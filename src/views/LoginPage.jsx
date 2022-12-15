import { makeStyles, useTheme } from "@material-ui/core/styles";
import TeacherStudent from "../assets/TeacherStudent.png";
import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
// import { AppContext } from "../context/role";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, getInformationOfUser, getRoleId } from "../redux/authSlice";
import Swal from "sweetalert2";
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
    border: "1px solid #404D61",
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
const loginErrorModal = (message) => {
  Swal.fire({
    icon: "error",
    title: message,
    text: "Something went wrong!",
  });
};
export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { message, error, loading, userInfo } = userLogin;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(
      loginUser({ username: username, password: password })
    );
    dispatch(getRoleId(data.payload.user._id))
    if (!!data?.payload?.user)
      await dispatch(getInformationOfUser(data.payload.user._id));
    if (!!data?.payload?.message) loginErrorModal(data.payload.message);
  };

  useEffect(() => {
    if (!Array.isArray(userInfo) && !userInfo.length) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <Grid container direction="row" spacing={0} className={classes.root}>
      <Grid item xs={6}>
        <img
          src={TeacherStudent}
          style={{ height: "100%", width: "100%"}}
          
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
          <div className="flex flex-col text-center mb-3">
            <div className="flex justify-items-center justify-center"><img src={logo}
              style={{ height: "30%", width: "30%" }}>

            </img></div>
              <p className="font-bold text-2xl text-bktutor-blue">Xin chào đến với BKTutor!</p>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="font-bold">Tài khoản</label>
            <br></br>
            <input
              name="username"
              type="text"
              className={classes.input}
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br></br>
            <label className="font-bold">Mật khẩu</label>
            <br></br>
            <input
              name="password"
              type="password"
              className={classes.input}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br></br>
            {/* {message != "" ? <p style={{ color: "red" }}>{message}</p> : ""} */}
            <div  style={{ width: '100%' }}>
              <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    name="signin"
                    style={{ width: '100%' }}
                >
                    Đăng nhập
              </Button>
            </div>
            <p className="mt-5">Chưa có tài khoản? <Link to="/register" className="font-bold text-blue-700">Click vào tôi để đăng ký!</Link> </p>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
}
