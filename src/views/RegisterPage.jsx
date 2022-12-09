import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { Checkbox, Form, Input } from "antd";
import {
  Grid,
  Card,
  Typography,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import { registerUser } from "../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";

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
    display: "flex",
    justifyContent: "center",
  },
  text13: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "19px",
    letterSpacing: "0.01rem",
    color: "#FFF",
  },
  input: {
    height: "24px",
    borderRadius: "8px",
    padding: "16px 12px",
    border: "1px solid black",
  },
  label: {
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

export default function Signin() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { message, error, loading, userInfo } = userLogin;
  const handleSubmit = (e) => {
    console.log("submit")
    e.preventDefault();
    dispatch(
      registerUser({
        "username": username,
        "password": password,
        "phone_number": phone,
        "fullname": fullName,
        "address": address,
        "gender": gender,
        "role": role,
        "email": email,
      })
    );
  };
  useEffect(() => {
    if (!Array.isArray(userInfo) && !userInfo.length) {
      navigate("/login");
    }
  }, [userInfo]);
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
        <Card
          style={{ padding: "35px 47px", height: "600px", width: "488px" }}
          className="flex flex-col  justify-center"
        >
          <Typography className={classes.text20}>
            Let's become one of us{" "}
          </Typography>

          <Form
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 20,
            }}
            onSubmit={handleSubmit}
          >
            <Form.Item
              label="Username"
              name="username"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Please input your email !",
                },
              ]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Please input your address !",
                },
              ]}
            >
              <Input onChange={(e) => setAddress(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Full name"
              name="full name"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Please input your full name !",
                },
              ]}
            >
              <Input onChange={(e) => setFullName(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Role"
              name="role"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Please input your role !",
                },
              ]}
            >
              <Input onChange={(e) => setRole(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Please input your gender !",
                },
              ]}
            >
              <Input onChange={(e) => setGender(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Please input your phone number !",
                },
              ]}
            >
              <Input onChange={(e) => setPhone(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>


            <List>
            <ListItem>
              <Button variant="contained" color="primary" type="submit" onClick ={(e)=>{handleSubmit(e)}}>
                Sign up
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "auto" }}
              >
                Sign In
              </Button>
            </ListItem>
          </List>
          </Form>
          
        </Card>
      </Grid>
    </Grid>
  );
}
