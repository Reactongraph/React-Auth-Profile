import * as React from "react";
import Typography from "@mui/material/Typography";

import { Grid } from "@mui/material";
import { PadGrid, StackMt15 } from "./Styled";
import { UpdatePasswordForm } from "./update-password-form";
import { UpdateNameForm } from "./update-name-form";
import { UpdateEmailForm } from "./update-email-form";

export default function Setting() {
  return (
    <StackMt15 spacing={3}>
      <Grid>
        <Typography variant="h4">Setting</Typography>
      </Grid>
      <Grid container>
        <PadGrid xs={12} padding="10px" item>
          <UpdateNameForm />
        </PadGrid>
        <PadGrid xs={12} padding="10px" item>
          <UpdateEmailForm />
        </PadGrid>
        <PadGrid xs={12} padding="10px" item>
          <UpdatePasswordForm />
        </PadGrid>
      </Grid>
    </StackMt15>
  );
}
