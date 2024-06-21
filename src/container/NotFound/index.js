import React from "react";
import { CCBox, CStack, CenterTextTypography } from "./Styled";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NotFound = () => {
  return (
    <CCBox>
      <CStack spacing={3}>
        <Box>
          <img
            alt="Under development"
            src="/images/error-401.png"
            width={100}
            height={100}
          />
        </Box>
        <CenterTextTypography variant="h3">
          404: The page you are looking for isn&apos;t here
        </CenterTextTypography>
        <CenterTextTypography color="text.secondary" variant="body1">
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </CenterTextTypography>
        <Button
          href={"/"}
          startIcon={<ArrowBackIcon />}
          variant="contained"
        >
          Go back to home
        </Button>
      </CStack>
    </CCBox>
  );
};

export default NotFound;
