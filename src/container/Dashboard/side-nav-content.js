import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Avatar, Grid } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import { paths } from "../../utils/path";
import { Logo } from "../../component/logo";
import { truncateString } from "../../utils/helper";
import { usePopover } from "../../hooks/use-popover";
import { useLocation, useNavigate } from "react-router-dom";
import { UserPopover } from "./user-popover";
import { isNavItemActive } from "./is-nav-item-active";
import { useSelector } from "react-redux";

const SideNavContent = () => {
  const userProfile = useSelector((state) => state?.user?.userProfile);
  const pathname = useLocation();
  const userPopover = usePopover();

  return (
    <Grid
      sx={{
        height: "100vh",
        borderRight: "1px solid var(--SideNav-background)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid sx={{ p: 1, display: "flex", alignItems: "center", gap: "10px" }}>
        <Box
          href={paths.private.dashboard}
          sx={{ display: "block", width: "fit-content" }}
        >
          <Logo color="light" />
        </Box>
      </Grid>
      <Divider sx={{ borderColor: "var(--mui-palette-neutral-700)" }} />
      <Box
        component="nav"
        sx={{
          flex: "1 1 auto",
          p: "12px",
          overflow: "auto",
          flexGrow: 1,
          scrollbarWidth: "thin",
        }}
      >
        {renderNavItems({
          pathname,
          items: [
            { href: paths.private.dashboard, title: "Dashboard" },
            { href: paths.private.setting, title: "Profile Setting" },
          ],
        })}
      </Box>
      <Grid>
        <Divider sx={{ borderColor: "var(--mui-palette-neutral-700)" }} />
        <Grid sx={{ paddingX: "12px", marginY: "10px" }}>
          <Grid
            onClick={userPopover.handleOpen}
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
              borderRadius: "15px",
              ":hover": {
                backgroundColor: "var(--NavItem-hover-background)",
              },
            }}
          >
            <Avatar
              src={userProfile?.avatar ? userProfile.avatar : undefined}
              ref={userPopover.anchorRef}
            >
              {userProfile?.fullName?.[0]}
            </Avatar>
            <Typography variant="h6">{userProfile?.fullName}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <UserPopover
        anchorEl={userPopover.anchorRef.current}
        onClose={userPopover.handleClose}
        open={userPopover.open}
      />
    </Grid>
  );
};

export default SideNavContent;

function renderNavItems({ items = [], pathname }) {
  const children = items.reduce((acc, curr) => {
    const { href, title } = curr;

    acc.push(
      <NavItem
        key={href}
        id={href || ""}
        pathname={pathname?.pathname}
        title={title}
        href={href}
      />
    );

    return acc;
  }, []);

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: "none", m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

function NavItem({ disabled, external, href, matcher, pathname, title }) {
  const navigate = useNavigate();
  const active = isNavItemActive({
    disabled,
    external,
    href,
    matcher,
    pathname,
  });


  return (
    <li>
      <Box
        onClick={() => navigate(href)}
        {...(href
          ? {
              href,
              target: external ? "_blank" : undefined,
              rel: external ? "noreferrer" : undefined,
            }
          : { role: "button" })}
        sx={{
          alignItems: "center",
          borderRadius: 1,
          color: "var(--NavItem-color)",
          cursor: "pointer",
          display: "flex",
          flex: "0 0 auto",
          gap: 1,
          p: "6px 10px",
          position: "relative",
          textDecoration: "none",
          whiteSpace: "nowrap",
          ...(disabled && {
            bgcolor: "var(--NavItem-disabled-background)",
            color: "var(--NavItem-disabled-color)",
            cursor: "not-allowed",
          }),
          ...(active && {
            bgcolor: "var(--NavItem-active-background)",
            color: "var(--NavItem-active-color)",
          }),
          ":hover": {
            backgroundColor: "var(--NavItem-hover-background)",
          },
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flex: "0 0 auto",
          }}
        >
          <ArticleIcon
            fill={
              active
                ? "var(--NavItem-icon-active-color)"
                : "var(--NavItem-icon-color)"
            }
            fontSize="var(--icon-fontSize-md)"
            weight={active ? "fill" : undefined}
          />
        </Box>
        <Box sx={{ flex: "1 1 auto" }}>
          <Typography
            component="span"
            sx={{
              color: "inherit",
              fontSize: "0.875rem",
              fontWeight: 500,
              lineHeight: "28px",
            }}
          >
            {title ? truncateString(title, 34) : ""}
          </Typography>
        </Box>
      </Box>
    </li>
  );
}
