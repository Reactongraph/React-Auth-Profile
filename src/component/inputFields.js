import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  IconButton,
  Badge,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { PhotoCamera } from "@mui/icons-material";
import { CustomAvatar } from "./styled";

export const TextInputField = ({ control, name, label, errors, type }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl error={Boolean(errors[name])} fullWidth>
          <InputLabel>{label}</InputLabel>
          <OutlinedInput {...field} label={label} type={type || "text"} />
          {errors[name] ? (
            <FormHelperText>{errors[name].message}</FormHelperText>
          ) : null}
        </FormControl>
      )}
    />
  );
};

export const EmailInputField = (props) => {
  return <TextInputField {...props} type="email" />;
};

export const PasswordInputField = ({ control, name, label, errors }) => {
  const [showPassword, setShowPassword] = useState();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl error={Boolean(errors[name])} fullWidth>
          <InputLabel>{label}</InputLabel>
          <OutlinedInput
            {...field}
            endAdornment={
              showPassword ? (
                <VisibilityOutlinedIcon
                  cursor="pointer"
                  fontSize="small"
                  onClick={() => {
                    setShowPassword(false);
                  }}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  cursor="pointer"
                  fontSize="small"
                  onClick={() => {
                    setShowPassword(true);
                  }}
                />
              )
            }
            label={label}
            type={showPassword ? "text" : "password"}
          />
          {errors[name] ? (
            <FormHelperText>{errors[name].message}</FormHelperText>
          ) : null}
        </FormControl>
      )}
    />
  );
};

export const CheckInputField = ({ control, name, label, errors }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div>
          <FormControlLabel control={<Checkbox {...field} />} label={label} />
          {errors[name] ? (
            <FormHelperText error>{errors[name].message}</FormHelperText>
          ) : null}
        </div>
      )}
    />
  );
};

export const PhoneInputField = ({ control, name, label, errors, type }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl error={Boolean(errors[name])} fullWidth>
          <InputLabel>{label}</InputLabel>
          <OutlinedInput
            {...field}
            label={label}
            type={type || "text"}
            onChange={(event) => {
              const { value } = event.target;
              if (/^\d*$/.test(value)) {
                event.target.value = value;
              } else {
                return;
              }
              field.onChange(event);
            }}
          />
          {errors[name] ? (
            <FormHelperText>{errors[name].message}</FormHelperText>
          ) : null}
        </FormControl>
      )}
    />
  );
};

export const AvatarInputField = ({
  name,
  originalSrc = undefined,
  handleChange,
}) => {
  const [imageSrc, setImageSrc] = useState(originalSrc);

  const handleFileChange = (event) => {
    const file = event?.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
      handleChange(file);
    }
  };

  useEffect(() => {
    setImageSrc(originalSrc);
  }, [originalSrc]);

  return (
    <>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="contained-button-file">
              <IconButton color="primary" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </>
        }
      >
        <CustomAvatar src={imageSrc} alt={name} width={100} height={100}>
          {!imageSrc && name.charAt(0)}
        </CustomAvatar>
      </Badge>
    </>
  );
};
