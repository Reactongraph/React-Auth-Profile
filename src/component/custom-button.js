import React from "react";
import SpinnerLoader from "./spinner-loader";
import { Button } from "@mui/material";

const CustomButton = ({
  disabled,
  children,
  handler = () => {},
  loading = false,
  ...rest
}) => {
  const loadingComponent = (
    <>
      <SpinnerLoader />
    </>
  );
  return (
    <Button disabled={disabled} onClick={handler} {...rest}>
      {loading ? loadingComponent : children}
    </Button>
  );
};

export default CustomButton;
