import { makeStyles, useTheme } from "@material-ui/core/styles";
import TeacherStudent from "../assets/TeacherStudent.png";
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
import { useNavigate, Link } from "react-router-dom";

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
  let navigate = useNavigate();
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
    console.log("submit");
    e.preventDefault();
    dispatch(
      registerUser({
        username: username,
        password: password,
        phone_number: phone,
        fullname: fullName,
        address: address,
        gender: gender,
        role: role,
        email: email,
      })
    ).then(() => {
      navigate("/login");
    });
  };
  // useEffect(() => {
  //   if (!Array.isArray(userInfo) && !userInfo.length) {
  //     navigate("/login");
  //   }
  // }, [userInfo]);
  return (
    <Grid container direction="row" spacing={0} className={classes.root}>
      <Grid item xs={6}>
        <img
          src={TeacherStudent}
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
          <p className="font-bold text-2xl text-bktutor-blue flex text-center mb-3">
            C??ng tr??? th??nh m???t th??nh vi??n c???a BKTutor nh??~
          </p>

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
              label="T??i kho???n"
              name="username"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui l??ng ??i???n t??n t??i kho???n",
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
                  message: "Xin vui l??ng ??i???n email!",
                },
              ]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="?????a ch???"
              name="address"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui l??ng ??i???n ?????a ch??? c???a b???n",
                },
              ]}
            >
              <Input onChange={(e) => setAddress(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="H??? T??n"
              name="full name"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui l??ng ??i???n h??? v?? t??n",
                },
              ]}
            >
              <Input onChange={(e) => setFullName(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Vai tr??"
              name="role"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "B???n mu???n ????ng vai tr?? g?? ??? BKTutor?",
                },
              ]}
            >
              <Input
                placeholder="B???n l?? m???t gia s??, hay m???t ph??? huynh?"
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Gi???i t??nh"
              name="gender"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui l??ng cho ch??ng t??i bi???t gi???i t??nh c???a b???n",
                },
              ]}
            >
              <Input onChange={(e) => setGender(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="S??T"
              name="phone"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui l??ng nh???p s??? ??i???n tho???i",
                },
              ]}
            >
              <Input onChange={(e) => setPhone(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="M???t kh???u"
              name="password"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui l??ng nh???p m???t kh???u!",
                },
              ]}
            >
              <Input.Password onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <div style={{ width: "100%" }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                name="signin"
                style={{ width: "100%" }}
              >
                ????ng k??
              </Button>
              <p className="mt-2">
                ???? c?? t??i kho???n?{" "}
                <Link to="/login" className="font-bold text-blue-700">
                  Click v??o t??i ????? ????ng nh???p!
                </Link>{" "}
              </p>
            </div>
          </Form>
        </Card>
      </Grid>
    </Grid>
  );
}
