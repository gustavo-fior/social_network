import React from "react";
import { useState } from "react";
import { signUp } from "../api/api";
import Button from "@mui/material/Button";
import { Grid, Link, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "15% auto",
  };
  return (
    <Grid container>
      <Grid item xs={6}>
        Some image
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={7} style={paperStyle}>
          <Grid align="center">
            <Typography variant="h4">Swell</Typography>
          </Grid>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signUp(email, username, password);
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              margin="normal"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Username"
            ></TextField>
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
              type="password"
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
                Sign up
              </Button>
            </Grid>
          </form>
          <Grid align="center">
            Already have an account?
            <Link href="/login" underline="hover">
              Log in
            </Link>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
