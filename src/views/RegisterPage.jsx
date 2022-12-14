import { makeStyles, useTheme } from "@material-ui/core/styles";
import TeacherStudent from "../assets/TeacherStudent.png";
import React, { useState, useEffect } from "react";
import { Checkbox, Form, Input} from "antd";
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
            Cùng trở thành một thành viên của BKTutor nhé~
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
              label="Tài khoản"
              name="username"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui lòng điền tên tài khoản",
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
                  message: "Xin vui lòng điền email!",
                },
              ]}
            >
              <Input onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Địa chỉ"
              name="address"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui lòng điền địa chỉ của bạn",
                },
              ]}
            >
              <Input onChange={(e) => setAddress(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Họ Tên"
              name="full name"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui lòng điền họ và tên",
                },
              ]}
            >
              <Input onChange={(e) => setFullName(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Vai trò"
              name="role"
              
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Bạn muốn đóng vai trò gì ở BKTutor?",
                },
              ]}
            >
              <Input placeholder = "Bạn là một gia sư, hay một phụ huynh?" onChange={(e) => setRole(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Giới tính"
              name="gender"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui lòng cho chúng tôi biết giới tính của bạn",
                },
              ]}
            >
              <Input onChange={(e) => setGender(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="SĐT"
              name="phone"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui lòng nhập số điện thoại",
                },
              ]}
            >
              <Input onChange={(e) => setPhone(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              className={classes.label}
              rules={[
                {
                  required: true,
                  message: "Xin vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <div  style={{ width: '100%' }}>
              <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick ={(e)=>{handleSubmit(e)}}
                    name="signin"
                    style={{ width: '100%' }}
                >
                    Đăng ký
              </Button>
              <p className="mt-2">Đã có tài khoản? <Link to="/login" className="font-bold text-blue-700">Click vào tôi để đăng nhập!</Link> </p>
            </div>
            {/* <List>
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
          </List> */}
          </Form>
          
        </Card>
      </Grid>
    </Grid>
  );
}
