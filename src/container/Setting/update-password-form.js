import React from "react";
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
import { toast } from "react-toastify";
import CustomButton from "../../component/custom-button";
import { PasswordInputField } from "../../component/inputFields";
import { updatePasswordSchema } from "../../utils/validationSchema";
import { updateUserProfile } from "../../redux/userReducer/action";
import { useDispatch, useSelector } from "react-redux";

const defaultValues = {
  password: "",
  newPassword: "",
};

export function UpdatePasswordForm() {
  const dispatch = useDispatch();
  const { password } = useSelector((state) => state?.user?.userProfile) || "";
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues,
    resolver: zodResolver(updatePasswordSchema),
  });

  const watcher = watch();
  const hasChange = watcher.password && watcher.newPassword;

  const submitHandler = (data) => {
    if (password?.trim() === data?.password?.trim()) {
      dispatch(updateUserProfile({ password: data.newPassword.trim() }));
      reset({ password: "", newPassword: "" });
      toast.success("Password change successfully!");
    } else {
      toast.error("Old password not matched!");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(submitHandler)}>
        <CardHeader subheader="Change Password" title="Password" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <PasswordInputField
                control={control}
                name="password"
                label="Current Password"
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PasswordInputField
                control={control}
                name="newPassword"
                label="New Password"
                errors={errors}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <CustomButton disabled={!hasChange} type="submit" variant="contained">
            Update
          </CustomButton>
        </CardActions>
      </form>
    </Card>
  );
}
