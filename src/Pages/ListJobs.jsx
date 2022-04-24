import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { Suspense } from "react";
const NavbarAfter = React.lazy(() => import("../Components/BeforeLogin/Navbar/NavbarAfter"));
const Jobs = React.lazy(() => import("../Components/Jobs"));
const Footer = React.lazy(() => import("../Components/BeforeLogin/Footer/"));

const ListJobs = ({ matches }) => {
  return (
    <>
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              height: "100vh",
              width: "100vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <NavbarAfter matches={matches} />
        <Jobs />
        <Footer />
      </Suspense>
    </>
  );
};

export default ListJobs;
