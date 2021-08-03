import { createVar, fallbackVar, style } from "@vanilla-extract/css";

export const colorAccent = createVar("mondaine-accent");
export const colorForeground = createVar("mondaine-fg");
export const colorBackground = createVar("mondaine-bg");

export const container = style({
  width: "100%",
  height: "100%",
  position: "relative",
  vars: {
    [colorBackground]: "#fff",
    [colorForeground]: "#000",
    [colorAccent]: "#d8232a",
  },
});

export const layer = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 0,
});

export const svg = style({
  width: "100%",
  maxHeight: "100%",
});

export const face = style({
  fill: fallbackVar(colorBackground, "#fff"),
  zIndex: 0,
});

export const hourMark = style({
  fill: colorForeground,
});

export const minuteMark = style({
  fill: colorForeground,
});

export const secondHand = style({
  fill: colorAccent,
  transformOrigin: "center 250px !important",
});

export const minuteHand = style({
  fill: colorForeground,
  transformOrigin: "center 250px !important",
});

export const hourHand = style({
  fill: colorForeground,
  transformOrigin: "center 250px !important",
});
