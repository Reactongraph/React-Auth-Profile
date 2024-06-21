import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Alert, Link, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../component/authLayout";
import {
  CheckInputField,
  EmailInputField,
  PasswordInputField,
  TextInputField,
} from "../../component/inputFields";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../utils/validationSchema";
import CustomButton from "../../component/custom-button";
import { registerUserData } from "../../redux/userReducer/action";

import { paths } from "../../utils/path";

const defaultValues = {
  fullName: "",
  email: "",
  password: "",
  terms: false,
};
const Signup = () => {
  const dispatch = useDispatch();
  const existedUserData = useSelector((state) => state?.user?.userData);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues, resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data) => {
    const allmail = existedUserData?.map((item) => item?.email?.toLowerCase());

    if (allmail?.includes(data?.email?.toLowerCase())) {
      toast.error("This email is already taken");
      reset();
    } else {
      dispatch(registerUserData(data));
      navigate("/");
    }
  };
  return (
    <>
      <Layout>
        <Stack spacing={1}>
          <Typography variant="h4">Sign up</Typography>
          <Typography
            color="text.secondary"
            variant="body2"
            style={{ marginBottom: "8px" }}
          >
            Already have an account?{" "}
            <Link
              href={paths.public.signIn}
              underline="hover"
              variant="subtitle2"
            >
              Log in
            </Link>
          </Typography>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextInputField
              control={control}
              name="fullName"
              label="Full name"
              errors={errors}
            />
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
            <CheckInputField
              control={control}
              name="terms"
              label={
                <>
                  I have read the{" "}
                  <Link target="_blank">terms and conditions</Link>
                </>
              }
              errors={errors}
            />
            {errors.root ? (
              <Alert color="error">{errors.root.message}</Alert>
            ) : null}
            <CustomButton type="submit" variant="contained">
              Sign up
            </CustomButton>
          </Stack>
        </form>
      </Layout>
    </>
  );
};

export default Signup;
