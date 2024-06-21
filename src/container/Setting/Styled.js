import { Grid, Stack } from "@mui/material";
import styled from "styled-components";

export const StackMt15 = styled(Stack)`
  margin-top: 15px;
`;

export const PadGrid = styled(Grid)`
  padding: ${({ padding }) => (padding ? padding : "10px")};
`;