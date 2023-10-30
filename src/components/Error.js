import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Container maxWidth="md">
        <Grid>
          <Grid xs={6}>
            <Typography variant="h1" color={"white"}>404</Typography>
            <Typography variant="h6" color={"white"}>
              La página que estas buscando no existe.
            </Typography>
            <Button variant="contained" href="/">
              Volver al Home
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
