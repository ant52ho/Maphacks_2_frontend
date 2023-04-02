import * as React from "react";
import { useState } from "react";
import { Typography, Grid, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import formSidePicture from "../pictures/formSidePicture.png";
// const formSidePicture = require("../pictures/formSidePicture.png");

console.log(formSidePicture);

const theme = createTheme({
  palette: {
    primary: {
      main: "#3567CB",
    },
  },
  typography: {
    fontSize: 12,
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

function InputFormPage() {
  const [age, setAge] = useState<String>();
  const [name, setName] = useState<String>();
  const [desc, setDesc] = useState<String>();
  const [projectNames, setprojectNames] = useState<String>(
    "comma seperated please"
  );
  const [email, setemail] = useState<String>();
  const [tel, settel] = useState<String>();

  const submitButton = () => {
    alert(desc);
    //make api call
    //redirect to generated page
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex" }}>
        <div>
          <Typography
            variant="h2"
            style={{
              marginLeft: "85px",
              marginTop: "30px",
              color: "#3567CB",
              fontWeight: "bold",
            }}
          >
            Create Your Personal Portfolio
          </Typography>

          <Grid
            container
            spacing={2}
            style={{ marginLeft: "80px", marginTop: "30px" }}
          >
            <Grid item xs={2}>
              Occupation:
            </Grid>
            <Grid item xs={10}>
              <input
                style={{
                  width: "400px",
                  height: "40px",
                  borderRadius: "8px",
                  borderWidth: "thin",
                }}
                type="text"
                name="name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                placeholder="Name"
                value={name?.toString()}
              />
            </Grid>

            <br />

            <Grid item xs={2}>
              Age:
            </Grid>
            <Grid item xs={10}>
              <input
                style={{
                  width: "400px",
                  height: "40px",
                  borderRadius: "8px",
                  borderWidth: "thin",
                }}
                name="age"
                type="number"
                value={age?.toString()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAge(e.target.value)
                }
              />
            </Grid>

            <br />

            <Grid item xs={2}>
              Description:
            </Grid>
            <Grid item xs={10}>
              <textarea
                style={{
                  width: "400px",
                  height: "100px",
                  borderRadius: "8px",
                  borderWidth: "thin",
                }}
                name="desc"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setDesc(e.target.value)
                }
              >
                {desc}
              </textarea>
            </Grid>

            <br />

            <Grid item xs={2}>
              Projects:
            </Grid>
            <Grid item xs={10}>
              <textarea
                style={{
                  width: "400px",
                  height: "100px",
                  borderRadius: "8px",
                  borderWidth: "thin",
                }}
                name="project_name"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setprojectNames(e.target.value)
                }
              >
                {projectNames}
              </textarea>
            </Grid>

            <br />

            <Grid item xs={2}>
              Email:
            </Grid>
            <Grid item xs={10}>
              <input
                style={{
                  width: "400px",
                  height: "40px",
                  borderRadius: "8px",
                  borderWidth: "thin",
                }}
                name="email"
                value={email?.toString()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setemail(e.target.value)
                }
                type="email"
              />
            </Grid>

            <br />

            <Grid item xs={2}>
              Phone Number:
            </Grid>
            <Grid item xs={10}>
              <input
                style={{
                  width: "400px",
                  height: "40px",
                  borderRadius: "8px",
                  borderWidth: "thin",
                }}
                type="tel"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={tel?.toString()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  settel(e.target.value)
                }
              />
            </Grid>

            <Button
              variant="contained"
              onClick={submitButton}
              color="primary"
              style={{
                marginLeft: "90px",
                marginTop: "60px",
                width: "500px",
                height: "50px",
                borderRadius: "20px",
              }}
            >
              Submit
            </Button>
          </Grid>
        </div>
        <div style={{ marginTop: "70px", marginRight: "10px" }}>
          <img src={formSidePicture} alt="" height="630" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default InputFormPage;
