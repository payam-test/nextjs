import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Car360Com from "../src/Car360";
import ResponsiveAppBar from "../src/Appbar";
import Car360viewer from "../src/components/Car360Viewer";

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Car360viewer />
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
