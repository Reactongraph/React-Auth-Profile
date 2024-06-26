import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import GlobalStyles from "@mui/material/GlobalStyles";
import { MainNav } from "../main-nav";
import { SideNav } from "../side-nav";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const userProfile = useSelector((state) => state?.user?.userProfile);
  const navigation = useNavigate();
  const {pathname} = useLocation()

  useEffect(() => {
    if (!userProfile) {
      navigation("/");
    }
  }, [pathname]);
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            "--MainNav-height": "56px",
            "--MainNav-zIndex": 1000,
            "--SideNav-width": "280px",
            "--SideNav-zIndex": 1100,
            "--MobileNav-width": "320px",
            "--MobileNav-zIndex": 1100,
          },
        }}
      />
      <Box
        sx={{
          bgcolor: "var(--mui-palette-background-default)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minHeight: "100%",
        }}
      >
        <SideNav />
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            pl: { lg: "var(--SideNav-width)" },
          }}
        >
          <MainNav />
          <main>
            <Container maxWidth="xl">{children}</Container>
          </main>
        </Box>
      </Box>
    </>
  );
}
