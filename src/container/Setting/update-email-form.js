import React, { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CustomButton from "../../component/custom-button";
import { EmailInputField } from "../../component/inputFields";
import { updateEmailSchema } from "../../utils/validationSchema";
import { updateUserProfile } from "../../redux/userReducer/action";

const defaultValues = {
  email: "",
};

export function UpdateEmailForm() {
  const { email }  = useSelector((state) => state?.user?.userProfile) || "";

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: zodResolver(updateEmailSchema),
  });

  useEffect(() => {
    if (email) {
      reset({ email });
    }
  }, [email, reset]);

  const submitHandler = async (data) => {
    dispatch(
      updateUserProfile(data)
    );
    toast.success("User information update successfully!");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(submitHandler)}>
        <CardHeader subheader="Change Email" title="Email" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <EmailInputField
                control={control}
                name="email"
                label="Email"
                errors={errors}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <CustomButton
            type="submit"
            variant="contained"
          >
            Update
          </CustomButton>
        </CardActions>
      </form>
    </Card>
  );
}
