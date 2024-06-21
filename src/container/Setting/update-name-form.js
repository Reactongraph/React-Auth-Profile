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
import { AvatarInputField, PhoneInputField, TextInputField } from "../../component/inputFields";
import { updateProfileSchema } from "../../utils/validationSchema";
import { updateUserProfile } from "../../redux/userReducer/action";

const defaultValues = {
  fullName: "",
  phone: "",
  avatar: "",
}

export function UpdateNameForm() {
  const {  fullName, phone, avatar }  = useSelector((state) => state?.user?.userProfile) || "";

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues,
    resolver: zodResolver(updateProfileSchema),
  });

  useEffect(() => {
    if (fullName || phone) {
      reset({ fullName, phone });
    }
  }, [fullName, phone, reset]);

  const handleAvatarChange = (file) => {
    const avatar = URL.createObjectURL(file)
    setValue("avatar", avatar);
  };

  const watcher = watch();
  const hasChange =
    watcher.fullName !== fullName || watcher.phone !== phone || watcher.avatar;

  const submitHandler = async (data) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("phone", data.phone);
    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }
    dispatch(
      updateUserProfile(data)
    );
      toast.success("User information update successfully!");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(submitHandler)}>
        <CardHeader subheader="General Details" title="General" />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <AvatarInputField
                name={fullName}
                originalSrc={avatar}
                handleChange={handleAvatarChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInputField
                control={control}
                name="fullName"
                label="Full Name"
                errors={errors}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PhoneInputField
                control={control}
                name="phone"
                label="Phone Number"
                errors={errors}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <CustomButton
            disabled={!hasChange}
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
