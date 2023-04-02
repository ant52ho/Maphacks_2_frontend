/* eslint-disable react/no-direct-mutation-state */
 
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { InfoContext, InfoContextType } from '../index';
import * as React from "react";
import { Component, useState, useEffect, useContext} from 'react';
import { Typography, Grid, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import formSidePicture from "../pictures/formSidePicture.png";

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
    const [projectNames, setprojectNames] = useState<String>();
    const [email, setemail] = useState<String>();
    const [tel, settel] = useState<String>();
    const [getMessage, setGetMessage] = useState({} as any)
    const navigate = useNavigate()

    const {info, setInfo} = useContext<InfoContextType>(InfoContext)

    const submitButton = () =>{

        const userData = {
            name: name,
            email: email,
            telephone: tel,
            projects: projectNames,
            description: desc
        };

        //make api call
        //redirect to generated page

        axios.post('http://localhost:5000/flask/hello', userData).then(response => {
            console.log("POST SUCCESS", response)
            setInfo(response.data)
            navigate('/home', {state : response.data, replace : false})
          }).catch(error => {
            console.log("ERROR")
          })
    }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", marginTop: "90px"}}>
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
              Name:
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
                value={name?.toString()}
              />
            </Grid>

            <br />

            {/* <Grid item xs={2}>
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
            </Grid> */}

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
                placeholder="Comma Seperated"
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
