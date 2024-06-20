import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const Signup = () => {
  return (
    <>
      <Stack spacing={1}>
        <Typography variant="h4">Sign up</Typography>
        <Typography color="text.secondary" variant="body2">
          Already have an account?{" "}
          <Link
            // component={RouterLink}
            // href={paths.public.signIn}
            underline="hover"
            variant="subtitle2"
          >
            Sign in
          </Link>
        </Typography>
      </Stack>
    </>
  );
};

export default Signup;
