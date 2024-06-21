import React from "react";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { PadGrid } from "../../component/styled";
import { useDispatch, useSelector } from "react-redux";
import { clearUserProfile } from "../../redux/userReducer/action";
import { useNavigate } from "react-router-dom";

export function UserPopover({ anchorEl, onClose, open }) {
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state?.user?.userProfile);
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    dispatch(clearUserProfile());
    navigate("/");
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      onClose={onClose}
      open={open}
      slotProps={{ paper: { sx: { width: "240px" } } }}
    >
      <PadGrid padding="16px 20px">
        <Typography variant="subtitle1">{userProfile?.fullName}</Typography>
        <Typography color="text.secondary" variant="body2">
          {userProfile?.email}
        </Typography>
      </PadGrid>
      <Divider />
      <MenuList disablePadding>
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
}
