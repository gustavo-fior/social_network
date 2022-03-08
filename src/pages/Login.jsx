import React from "react";
import { useState } from "react";
import { auth, getHome, getUsername } from "../api/api";
import {
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "15% auto",
  };
  return (
    <Grid container>
      <Grid item xs={6}>
        <img src="https://p4.wallpaperbetter.com/wallpaper/185/914/378/hexagon-white-abstract-3d-abstract-hd-wallpaper-preview.jpg" />
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={7} style={paperStyle}>
          <Grid align="center">
            <Typography variant="h4">Swell</Typography>
          </Grid>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              auth(email, password).then(() => {
                navigate("/home");
              });
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              margin="normal"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            ></TextField>
            <TextField
              fullWidth
              variant="standard"
              margin="normal"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            ></TextField>
            <Grid align="center">
              <Button variant="contained" type="submit">
                Login
              </Button>
            </Grid>
          </form>
          <Grid align="center">
            Don't have an account?{" "}
            <Link href="/signup" underline="hover">
              Sign up!
            </Link>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
