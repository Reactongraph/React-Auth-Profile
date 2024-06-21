import { Alert, Link, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../../component/authLayout";
import {
  CheckInputField,
  EmailInputField,
  PasswordInputField,
  TextInputField,
} from "../../component/inputFields";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../utils/validationSchema";
import CustomButton from "../../component/custom-button";
import { useSelector, useDispatch } from "react-redux";
import { registerUserData } from "../../redux/userReducer/action";
const defaultValues = {
  fullName: "",
  email: "",
  password: "",
  terms: false,
};
const Signup = () => {
  const [linkSent, setLinkSent] = useState(false);
  const [targetEmail, setTargetEmail] = useState("");
  const dispatch = useDispatch();
  const existedUserData = useSelector((state) => state?.user?.userData);

  console.log(existedUserData, "existedUserData-----");
  // const [createUser, { data, isLoading }] = useCreateUserMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues, resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data) => {
    const allmail = existedUserData?.map((item) => item?.email?.toLowerCase());
    if (allmail?.includes(data?.email?.toLowerCase())) {
      alert("This email is already taken");
    } else {
      dispatch(registerUserData(data));
    }
    // createUser(data);
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
              // component={RouterLink}
              // href={paths.public.signIn}
              underline="hover"
              variant="subtitle2"
            >
              Sign in
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
                  <Link
                    // component={RouterLink}
                    // href={paths.common.tnc}
                    target="_blank"
                  >
                    terms and conditions
                  </Link>
                </>
              }
              errors={errors}
            />
            {errors.root ? (
              <Alert color="error">{errors.root.message}</Alert>
            ) : null}
            <CustomButton
              // loading={isLoading}
              // disabled={isLoading}
              type="submit"
              variant="contained"
            >
              Sign up
            </CustomButton>
          </Stack>
        </form>
      </Layout>
    </>
  );
};

export default Signup;
