import React from "react";
import { Box } from "@mui/material";
import { AlignCenter } from "./styled";

const HEIGHT = 50;
const WIDTH = 50;
export function Logo({
  color = "dark",
  emblem,
  height = HEIGHT,
  width = WIDTH,
}) {
  let url;

  if (emblem) {
    url =
      color === "light"
        ? "/images/logo-emblem.png"
        : "/images/logo-emblem--dark.png";
  } else {
    url = color === "light" ? "/images/logo.png" : "/images/logo--dark.png";
  }

  return (
    <AlignCenter>
      <Box alt="logo" component="img" height={height} src={url} width={width} />
    </AlignCenter>
  );
}

export function DynamicLogo({
  colorDark = "light",
  colorLight = "dark",
  height = HEIGHT,
  width = WIDTH,
  ...props
}) {
  return <Logo height={height} width={width} {...props} />;
}
