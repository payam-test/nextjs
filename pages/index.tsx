import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Car360Com from "../src/Car360";
import ResponsiveAppBar from "../src/Appbar";

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI - Next.js example in TypeScript
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <Car360Com />
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
