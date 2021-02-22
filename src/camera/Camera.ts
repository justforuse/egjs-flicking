/*
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import Flicking, { FlickingOptions } from "~/Flicking";
import FlickingError from "~/core/FlickingError";
import Panel from "~/core/Panel";
import AnchorPoint from "~/core/AnchorPoint";
import * as ERROR from "~/const/error";
import { ALIGN, DIRECTION, EVENTS } from "~/const/external";
import { checkExistence, clamp, getFlickingAttached, includes, parseAlign } from "~/utils";

export interface CameraOptions {
  align: FlickingOptions["align"];
}

abstract class Camera {
  // Options
  protected _align: FlickingOptions["align"];

  // Internal states
  protected _flicking: Flicking | null;
  protected _el: HTMLElement;
  protected _transform: string;
  protected _position: number;
  protected _alignPos: number;
  protected _offset: number;
  protected _range: { min: number; max: number };
  protected _visiblePanels: Panel[];
  protected _anchors: AnchorPoint[];
  protected _needPanelTriggered: { prev: boolean; next: boolean };

  // Internal states getter
  public get element() { return this._el; }
  public get position() { return this._position; }
  public get alignPosition() { return this._alignPos; }
  public get offset() { return this._offset; }
  public get range() { return this._range; }
  public get rangeDiff() { return this._range.max - this._range.min; }
  public get visiblePanels() { return this._visiblePanels; }
  public get visibleRange() { return { min: this._position - this._alignPos, max: this._position - this._alignPos + this.size }; }
  public get anchorPoints() { return this._anchors; }
  public get controlParams() { return { range: this._range, position: this._position, circular: false }; }
  public get size() {
    const flicking = this._flicking;
    return flicking
      ? flicking.horizontal
        ? flicking.viewport.width
        : flicking.viewport.height
      : 0;
  }

  public set offset(val: number) { this._offset = val; }

  // Options Getter
  public get align() { return this._align; }

  // Options Setter
  public set align(val: FlickingOptions["align"]) {
    this._align = val;
  }

  public constructor({
    align = ALIGN.CENTER
  }: Partial<CameraOptions> = {}) {
    this._flicking = null;
    this._resetInternalValues();

    // Options
    this._align = align;
  }

  public abstract updateRange(): this;

  public init(flicking: Flicking): this {
    this._flicking = flicking;

    const viewportEl = flicking.viewport.element;

    checkExistence(viewportEl.firstElementChild, "First element child of the viewport element");
    this._el = viewportEl.firstElementChild as HTMLElement;
    this._checkTranslateSupport();

    return this;
  }

  public destroy(): this {
    this._flicking = null;
    this._resetInternalValues();
    return this;
  }

  public lookAt(pos: number): this {
    const prevPos = this._position;

    this._position = pos;
    this._refreshVisiblePanels();
    this._checkNeedPanel();
    this._checkReachEnd(prevPos, pos);
    this._applyTransform();

    return this;
  }

  public getPrevAnchor(anchor: AnchorPoint): AnchorPoint | null {
    return this._anchors[anchor.index - 1] || null;
  }

  public getNextAnchor(anchor: AnchorPoint): AnchorPoint | null {
    return this._anchors[anchor.index + 1] || null;
  }

  public findAnchorIncludePosition(position: number): AnchorPoint | null {
    const anchors = this._anchors;

    for (const anchor of anchors) {
      if (anchor.panel.includePosition(position, true)) {
        return anchor;
      }
    }

    return null;
  }

  public findNearestAnchor(position: number): AnchorPoint | null {
    const anchors = this._anchors;

    if (anchors.length <= 0) return null;

    let prevDist = Infinity;
    for (let anchorIdx = 0; anchorIdx < anchors.length; anchorIdx++) {
      const anchor = anchors[anchorIdx];
      const dist = Math.abs(anchor.position - position);

      if (dist > prevDist) {
        // Return previous anchor
        return anchors[anchorIdx - 1];
      }

      prevDist = dist;
    }

    // Return last anchor
    return anchors[anchors.length - 1];
  }

  public clampToReachablePosition(position: number): number {
    const range = this._range;
    return clamp(position, range.min, range.max);
  }

  public canReach(panel: Panel): boolean {
    const range = this._range;

    if (panel.element.parentElement !== this._el) return false;

    const panelPos = panel.position;

    return panelPos >= range.min && panelPos <= range.max;
  }

  public canSee(panel: Panel): boolean {
    const visibleRange = this.visibleRange;
    // Should not include margin, as we don't declare what the margin is visible as what the panel is visible.
    return panel.includeRange(visibleRange.min, visibleRange.max, false);
  }

  public updateAlignPos(): this {
    const align = this._align;

    const alignVal = typeof align === "object"
      ? (align as { camera: string | number }).camera
      : align;

    this._alignPos = parseAlign(alignVal, this.size);

    return this;
  }

  public updateAnchors(): this {
    const flicking = getFlickingAttached(this._flicking, "Camera");
    const panels = flicking.renderer.panels;

    this._anchors = panels.map((panel, index) => new AnchorPoint({
      index,
      position: panel.position,
      panel
    }));

    return this;
  }

  public resetNeedPanelHistory() {
    this._needPanelTriggered = { prev: false, next: false };
  }

  protected _resetInternalValues() {
    this._position = 0;
    this._alignPos = 0;
    this._offset = 0;
    this._range = { min: 0, max: 0 };
    this._visiblePanels = [];
    this._anchors = [];
    this._needPanelTriggered = { prev: false, next: false };
  }

  protected _refreshVisiblePanels() {
    const flicking = getFlickingAttached(this._flicking, "Camera");
    const panels = flicking.renderer.panels;

    const newVisiblePanels = panels.filter(panel => this.canSee(panel));
    const prevVisiblePanels = this._visiblePanels;
    this._visiblePanels = newVisiblePanels;

    const added: Panel[] = newVisiblePanels.filter(panel => !includes(prevVisiblePanels, panel));
    const removed: Panel[] = prevVisiblePanels.filter(panel => !includes(newVisiblePanels, panel));

    if (added.length > 0 || removed.length > 0) {
      flicking.renderer.render();

      flicking.trigger(EVENTS.VISIBLE_CHANGE, {
        added,
        removed,
        visiblePanels: newVisiblePanels
      });
    }
  }

  protected _checkNeedPanel(): void {
    const needPanelTriggered = this._needPanelTriggered;

    if (needPanelTriggered.prev && needPanelTriggered.next) return;

    const flicking = getFlickingAttached(this._flicking, "Camera");
    const panels = flicking.renderer.panels;

    if (panels.length <= 0) {
      if (!needPanelTriggered.prev) {
        flicking.trigger(EVENTS.NEED_PANEL, { direction: DIRECTION.PREV });
        needPanelTriggered.prev = true;
      }
      if (!needPanelTriggered.next) {
        flicking.trigger(EVENTS.NEED_PANEL, { direction: DIRECTION.NEXT });
        needPanelTriggered.next = true;
      }

      return;
    }

    const cameraPosition = this._position;
    const cameraSize = this.size;
    const cameraRange = this._range;
    const needPanelThreshold = flicking.needPanelThreshold;

    const cameraPrev = cameraPosition - this._alignPos;
    const cameraNext = cameraPrev + cameraSize;

    const firstPanel = panels[0];
    const lastPanel = panels[panels.length - 1];

    if (!needPanelTriggered.prev) {
      const firstPanelPrev = firstPanel.range.min;

      if (cameraPrev <= (firstPanelPrev + needPanelThreshold) || cameraPosition <= (cameraRange.min + needPanelThreshold)) {
        flicking.trigger(EVENTS.NEED_PANEL, { direction: DIRECTION.PREV });
        needPanelTriggered.prev = true;
      }
    }

    if (!needPanelTriggered.next) {
      const lastPanelNext = lastPanel.range.max;

      if (cameraNext >= (lastPanelNext - needPanelThreshold) || cameraPosition >= (cameraRange.max - needPanelThreshold)) {
        flicking.trigger(EVENTS.NEED_PANEL, { direction: DIRECTION.NEXT });
        needPanelTriggered.next = true;
      }
    }
  }

  protected _checkReachEnd(prevPos: number, newPos: number): void {
    const flicking = getFlickingAttached(this._flicking, "Camera");
    const range = this._range;

    const wasBetweenRange = prevPos > range.min && prevPos < range.max;
    const isBetweenRange = newPos > range.min && newPos < range.max;

    if (!wasBetweenRange || isBetweenRange) return;

    const direction = newPos <= range.min ? DIRECTION.PREV : DIRECTION.NEXT;

    flicking.trigger(EVENTS.REACH_EDGE, {
      direction
    });
  }

  protected _applyTransform(): void {
    const el = this._el;
    const flicking = getFlickingAttached(this._flicking, "Camera");

    const actualPosition = this._position - this._alignPos - this._offset;

    el.style[this._transform] = flicking.horizontal
      ? `translate(${-actualPosition}px)`
      : `translate(0, ${-actualPosition}px)`;
  }

  protected _checkTranslateSupport = () => {
    const transforms = ["webkitTransform", "msTransform", "MozTransform", "OTransform", "transform"];

    const supportedStyle = document.documentElement.style;
    let transformName = "";
    for (const prefixedTransform of transforms) {
      if (prefixedTransform in supportedStyle) {
        transformName = prefixedTransform;
      }
    }

    if (!transformName) {
      throw new FlickingError(ERROR.MESSAGE.TRANSFORM_NOT_SUPPORTED, ERROR.CODE.TRANSFORM_NOT_SUPPORTED);
    }

    this._transform = transformName;
  };
}

export default Camera;
