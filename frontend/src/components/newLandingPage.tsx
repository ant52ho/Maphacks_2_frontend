import { Grid, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import personalSite from "../images/personalSite.png";
import "./LandingPage2.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3567CB",
    },
  },
  typography: {
    // fontSize: 12,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default function NewLandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <div
        className="full bgImg"
        style={{
          backgroundImage: `url(${personalSite})`,
        }}
      >
        <Grid
          container
          spacing={2}
          style={{ textAlign: "right", marginRight: "80px" }}
        >
          <Grid item xs={12} style={{ marginBottom: "0px" }}>
            <Typography
              variant="h1"
              style={{ fontWeight: "800", fontSize: "100", color: "#3567CB" }}
            >
              Instant Intro
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ fontWeight: "200" }}>
              Using AI to generate your personal portfolio
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ marginTop: "80px", marginBottom: "00px" }}
          >
            <a href="/form">
              <Button
                variant="contained"
                style={{ width: "200px", height: "60px", borderRadius: "50px" }}
              >
                Try it Out!
              </Button>
            </a>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
