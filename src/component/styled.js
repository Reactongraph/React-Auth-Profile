import styled from "@emotion/styled";
import { Avatar, Grid, Stack, Typography } from "@mui/material";

export const AlignCenter = styled(Grid)`
  display: flex;
  align-items: center;
`;

export const AlignJustifyCenter = styled(AlignCenter)`
  justify-content: center;
`;

export const CCBox = styled(AlignCenter)`
  justify-content: center;
  min-height: 100%;
`;

export const CStack = styled(Stack)`
  align-items: center;
  max-width: "md";
`;

export const StackMt15 = styled(Stack)`
  margin-top: 15px;
`;

export const CCGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CCGrid2 = styled(CCGrid)`
  height: 100%;
`;

export const CenterTextTypography = styled(Typography)`
  text-align: center;
`;

export const CustomAvatar = styled(Avatar)`
  width: ${({ width }) => (width ? `${width}px` : "100px")};
  height: ${({ height }) => (height ? `${height}px` : "100px")};
`;

export const PadGrid = styled(Grid)`
  padding: ${({ padding }) => (padding ? padding : "10px")};
`;

export const FullScreenLoaderContainer = styled(Grid)`
  background-color: white;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100000;
`;
