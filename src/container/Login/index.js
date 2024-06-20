import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { paths } from "../../utils/path";
import CustomButton from "../../component/custom-button";
import {
  EmailInputField,
  PasswordInputField,
} from "../../component/inputFields";
import { signInSchema } from "../../utils/validationSchema";
import Layout from "../../component/authLayout";

const defaultValues = {
  email: "",
  password: "",
};

function SignInForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: zodResolver(signInSchema) });

  const onSubmit = async (data) => {
    //call reducer
  };

  return (
    <Layout>
      <Stack spacing={4}>
        <Stack spacing={1}>
          <Typography variant="h4">Sign in</Typography>
          <Typography color="text.secondary" variant="body2">
            Don&apos;t have an account?{" "}
            <Link
              href={paths.public.signUp}
              underline="hover"
              variant="subtitle2"
            >
              Sign up
            </Link>
          </Typography>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <EmailInputField
              control={control}
              name="email"
              label="Email address"
              errors={errors}
            />
            <PasswordInputField
              control={control}
              name="password"
              label="Password"
              errors={errors}
            />
            <div>
              <Link
                href={paths.public.forgetPassword}
                underline="hover"
                variant="subtitle2"
              >
                Forget password
              </Link>
            </div>
            {errors.root ? (
              <Alert color="error">{errors.root.message}</Alert>
            ) : null}
            <CustomButton
              // loading={true}
              // disabled={true}
              type="submit"
              variant="contained"
            >
              Sign in
            </CustomButton>
          </Stack>
        </form>
      </Stack>
    </Layout>
  );
}

export default SignInForm;
