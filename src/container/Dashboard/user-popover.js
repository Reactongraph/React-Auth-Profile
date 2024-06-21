import React from "react";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { PadGrid } from "../../component/styled";
// import { paths } from "@/paths";
// import { useDispatch, useSelector } from "react-redux";
// import { signOut } from "next-auth/react";
// import { logOut } from "@/store/Features/auth/authSlice";
// import PadGrid from "@/components/styled/styled";

export function UserPopover({ anchorEl, onClose, open }) {
  // const { name, email } = useSelector((store) => store.auth);
  // const dispatch = useDispatch();

  // let name = "test",
  // var email = "test@gmail.com"
  const handleSignOut = async () => {
    // dispatch(logOut());
    // await signOut({ redirect: true, callbackUrl: paths.public.signIn });
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
        <Typography variant="subtitle1">test</Typography>
        <Typography color="text.secondary" variant="body2">
          test@gmail.com
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
