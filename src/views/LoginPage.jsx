import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  Card,
  Typography,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import { AppContext } from "../context/role";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#e6e0e0",
    height: "100vh",
  },
  text20: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "0.01rem",
    color: "#192A3E",
    marginBottom: "16px",
  },
  text13: {
    fontFamily: "Poppins",
    fontSize: "13px",
    lineHeight: "19px",
    letterSpacing: "0.01rem",
    color: "#FFF",
    fontWeight: 600,
  },
  input: {
    width: "400px",
    height: "48px",
    borderRadius: "8px",
    marginBottom: "12px",
    outline: "none",
    padding: "16px 12px",
  },
  label: {
    marginBottom: "16px",
    fontFamily: "DM Sans",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#404D61",
  },
  button: {
    width: "155px",
    height: "40px",
  },
}));

export default function Login() {
  let navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { role, setRole } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setRole(username);
    console.log(role);
  };
  useEffect(() => {
    console.log(role)
    if (role == "tutor" || role == "parent") {
      console.log("run");
      navigate("/");
    }
  }, [navigate,role]);

  return (
    <Grid container direction="row" spacing={0} className={classes.root}>
      <Grid item xs={6}>
        <img
          src="https://st.quantrimang.com/photos/image/2019/04/24/multiplebackground-1.jpg"
          style={{ height: "100%", width: "100%" }}
        ></img>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ padding: "62px 29px", height: "441px", width: "472px" }}>
          <Typography className={classes.text20}>Welcome to Virsity</Typography>

          <form onSubmit={handleSubmit}>
            <label className={classes.label}>Username</label>
            <br></br>
            <input
              type="text"
              className={classes.input}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br></br>
            <label className={classes.label}>Password</label>
            <br></br>
            <input type="password" className={classes.input}></input>
            <br></br>
            <List>
              <ListItem>
                <Button variant="contained" color="primary" type="submit">
                  Sign in
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "auto" }}
                >
                  Sign Up
                </Button>
              </ListItem>
            </List>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
}
