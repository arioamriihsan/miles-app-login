import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  OverlayTrigger,
  Popover,
  InputGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faArrowLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { GoogleLogin } from "react-google-login";
import Logo from "../assets/logo.png";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import "../App.css";

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  const data = [
    [
      {
        lg: "Indonesia",
        header:
          "Platform Anda untuk mengelola semua manajemen layanan di lapangan",

        greet: "Selamat Datang",
        footer1: "Belum terdaftar?",
        fooerSpan: "Hubungi kami",
        footer2: " untuk info lebih lanjut",
        organisasiLabel: "Nama Organisasi",
        passLabel: "Kata Sandi",
        google: "Masuk lewat Google",
        fb: "Masuk lewat Facebook",
        loginText: "Masuk",
        back: "Kembali ke Mile",
      },
    ],
    [
      {
        lg: "English",
        header:
          "Your one stop platform to manage all of your field service management",
        greet: "Welcome Back",
        footer1: "Not registered yet?",
        fooerSpan: "Contact us",
        footer2: " for more info",
        organisasiLabel: "Organization's Name",
        passLabel: "Password",
        google: "Sign in with Google",
        fb: "Sign in with Facebook",
        loginText: "Login",
        back: "Back to Mile",
      },
    ],
  ];

  const dummyData = { organisationName: "arioamri", pass: "test123" };

  const [show, setShow] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [text, setText] = useState(data[1][0]);
  const [anotherLang, setAnotherLang] = useState(null);
  const target = useRef(null);
  const [orgName, setOrgName] = useState("");
  const [pass, setPass] = useState("");

  const renderData = () => {
    if (!isEnglish) {
      setAnotherLang("English");
      setText(data[0][0]);
    } else {
      setAnotherLang("Indonesia");
      setText(data[1][0]);
    }
  };

  useEffect(() => {
    renderData();
  }, [isEnglish]);
  useEffect(() => {
    renderData();
  }, []);

  const langClick = () => {
    setIsEnglish(!isEnglish);
    setShow(!show);
  };

  const handleBtn = () => {
    if (orgName === dummyData.organisationName && pass === dummyData.pass) {
      window.alert("YOU HAVE JUST LOGIN");
      setOrgName("");
      setPass("");
    } else {
      setOrgName("");
      setPass("");
      window.alert("Organization's name & password did not match ");
    }
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content style={{ width: "85px" }}>
        <div
          className="nav-cstm hover-cstm d-flex justify-content-center"
          onClick={langClick}
        >
          {anotherLang}
        </div>
      </Popover.Content>
    </Popover>
  );

  const MobileView = () => {
    return (
      <div className="container mt-3">
        <div className="card">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <div
              className="container mt-2 nav-cstm"
              style={{ color: "#4CA8F3", fontWeight: "bold" }}
            >
              <span className="mr-2">
                <FontAwesomeIcon
                  style={{ color: "#4CA8F3", fontSize: "0.8em" }}
                  icon={faArrowLeft}
                />
              </span>
              {data[1][0].back}
            </div>
          </Link>
          <div className="d-flex flex-column justify-content-center ml-4 mr-4 mt-4">
            <img
              className="mt-3"
              src={Logo}
              width={180}
              height={60}
              style={{ marginRight: "auto", marginLeft: "auto" }}
            />
            <div
              className="text-center mt-3"
              style={{
                color: "#808080",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "1.2px",
              }}
            >
              {data[1][0].header}
            </div>
            <div>
              <Form className="mt-4">
                <Form.Group>
                  <Form.Label style={{ color: "#66b1ff", fontWeight: "bold" }}>
                    {data[1][0].organisasiLabel}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={data[1][0].organisasiLabel}
                    onChange={(e) => setOrgName(e.target.value)}
                    value={orgName}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label style={{ color: "#66b1ff", fontWeight: "bold" }}>
                    {data[1][0].passLabel}
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={!showPass ? "password" : "text"}
                      placeholder={data[1][0].passLabel}
                      onChange={(e) => setPass(e.target.value)}
                      value={pass}
                    />
                    <InputGroup.Prepend
                      className="nav-cstm"
                      onClick={() => setShowPass(!showPass)}
                    >
                      <InputGroup.Text style={{ backgroundColor: "#fff" }}>
                        <FontAwesomeIcon
                          style={{ color: "#66b1ff" }}
                          icon={!showPass ? faEye : faEyeSlash}
                        />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>
                </Form.Group>
                <Button
                  style={{ width: "100%" }}
                  variant="info"
                  className="mt-3"
                  onClick={handleBtn}
                >
                  {data[1][0].loginText}
                </Button>
              </Form>
              <div
                className="py-3 text-center"
                style={{
                  color: "#808080",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {data[1][0].footer1}{" "}
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <span
                    className="nav-cstm"
                    style={{ color: "#66b1ff", fontWeight: "bold" }}
                  >
                    {data[1][0].fooerSpan}{" "}
                  </span>
                </Link>
                {data[1][0].footer2}
              </div>
            </div>
            <div
              style={{
                color: "#808080",
                fontSize: "18px",
                fontWeight: "bold",
                letterSpacing: "1.2px",
              }}
              className="text-center mt-3 mb-3"
            >
              Alternative Login
            </div>
            <div>
              <div>
                <GoogleLogin
                  clientId="935529337725-n3kelihu3a1nf0ghm1h8ob4ul4dsgnh7.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      style={{
                        backgroundColor: "#D93025",
                        color: "#fff",
                        border: "none",
                        padding: "6px",
                        borderRadius: "6px",
                        width: "100%",
                      }}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      {data[1][0].google} <FontAwesomeIcon icon={faGoogle} />
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
              <div className="mt-2 mb-4">
                <FacebookLogin
                  appId="1694608364052778"
                  autoLoad
                  callback={responseFacebook}
                  render={(renderProps) => (
                    <button
                      style={{
                        backgroundColor: "#4267B2",
                        color: "#fff",
                        border: "none",
                        padding: "6px",
                        borderRadius: "6px",
                        width: "100%",
                      }}
                      onClick={renderProps.onClick}
                    >
                      {data[1][0].fb}{" "}
                      <FontAwesomeIcon
                        style={{ fontSize: "1.2em" }}
                        icon={faFacebook}
                      />
                    </button>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DesktopView = () => {
    return (
      <>
        <div
          className="d-flex flex-row-reverse nav-cstm"
          style={{ backgroundColor: "#808080", height: "30px" }}
        >
          <div
            className="d-flex align-items-center mr-4"
            ref={target}
            onClick={() => setShow(!show)}
          >
            <OverlayTrigger
              show={show}
              trigger="click"
              overlay={popover}
              placement="bottom"
            >
              <div
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#fff",
                }}
              >
                {text.lg} <span className="dropdown-toggle" />
              </div>
            </OverlayTrigger>
          </div>
          <div
            className="d-flex align-items-center mr-5"
            style={{ color: "#fff" }}
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +62 812-1133-5608
          </div>
        </div>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div
            className="container mt-5 nav-cstm"
            style={{ color: "#4CA8F3", fontWeight: "bold" }}
          >
            <span className="mr-2">
              <FontAwesomeIcon
                style={{ color: "#4CA8F3", fontSize: "0.8em" }}
                icon={faArrowLeft}
              />
            </span>
            {text.back}
          </div>
        </Link>
        <div
          className="d-flex justify-content-center"
          style={{ backgroundColor: "#EAF6FD" }}
        >
          <div className="card section-container">
            <div className="d-flex flex-row align-items-center">
              <div
                style={{
                  padding: "16px 32px 16px 30px",
                  width: "60%",
                  backgroundColor: "#fff",
                }}
              >
                <div className="d-flex justify-content-center">
                  <img src={Logo} />
                </div>
                <div
                  className="py-3 d-none d-md-block text-center mt-4"
                  style={{
                    color: "#808080",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  {text.header}
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                  <div>
                    <GoogleLogin
                      clientId="935529337725-n3kelihu3a1nf0ghm1h8ob4ul4dsgnh7.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          style={{
                            backgroundColor: "#D93025",
                            color: "#fff",
                            border: "none",
                            padding: "6px",
                            borderRadius: "6px",
                            width: "200px",
                          }}
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          {text.google} <FontAwesomeIcon icon={faGoogle} />
                        </button>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                  <div className="mt-2">
                    <FacebookLogin
                      appId="1694608364052778"
                      autoLoad
                      callback={responseFacebook}
                      render={(renderProps) => (
                        <button
                          style={{
                            backgroundColor: "#4267B2",
                            color: "#fff",
                            border: "none",
                            padding: "6px",
                            borderRadius: "6px",
                            width: "200px",
                          }}
                          onClick={renderProps.onClick}
                        >
                          {text.fb}{" "}
                          <FontAwesomeIcon
                            style={{ fontSize: "1.2em" }}
                            icon={faFacebook}
                          />
                        </button>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderBottom: "solid 1px rgba(112, 112, 112, 0.16)",
                  padding: "16px 32px 16px 30px",
                  width: "40%",
                  backgroundColor: "#66b1ff",
                }}
              >
                <div
                  className="py-3 d-none d-md-block text-center"
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {text.greet}
                </div>
                <Form className="mt-4">
                  <Form.Group>
                    <Form.Label style={{ color: "#fff" }}>
                      {text.organisasiLabel}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={text.organisasiLabel}
                      onChange={(e) => setOrgName(e.target.value)}
                      value={orgName}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={{ color: "#fff" }}>
                      {text.passLabel}
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type={!showPass ? "password" : "text"}
                        placeholder={text.passLabel}
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                      />
                      <InputGroup.Prepend
                        className="nav-cstm"
                        onClick={() => setShowPass(!showPass)}
                      >
                        <InputGroup.Text style={{ backgroundColor: "#fff" }}>
                          <FontAwesomeIcon
                            style={{ color: "#66b1ff" }}
                            icon={!showPass ? faEye : faEyeSlash}
                          />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                    </InputGroup>
                  </Form.Group>
                  <Button
                    style={{ width: "100%" }}
                    variant="outline-light"
                    className="mt-3"
                    onClick={handleBtn}
                  >
                    {text.loginText}
                  </Button>
                </Form>
                <div
                  className="py-3 d-none d-md-block text-center mt-4"
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {text.footer1}{" "}
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <span
                      className="nav-cstm"
                      style={{ color: "#D93025", fontWeight: "bold" }}
                    >
                      {text.fooerSpan}{" "}
                    </span>
                  </Link>
                  {text.footer2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="d-sm-block d-none">{DesktopView()}</div>
      <div className="d-block d-sm-none">{MobileView()}</div>
    </>
  );
}

export default Login;
