import React from "react";
import "./form.css";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [empname, setEmpname] = useState(false);
  const [empmail, setEmpmail] = useState(false);
  const [emppass, setEmppass] = useState(false);
  const [msg, setMsg] = useState({ strength: "", color: "" });

  const empVal = () => {
    if (name === "" || pass === "" || email === "") {
      alert("Please fill the details");
    }
    if (name === "") {
      setEmpname(true);
    }
    if (email === "") {
      setEmpmail(true);
    }
    if (pass === "") {
      setEmppass(true);
    }
  };

  function passVal(pass) {
    let flag = 0;
    if (pass.length >= "8") {
      flag++;
    }
    if (pass.match(/[A-Z]/)) {
      flag++;
    }
    if (pass.match(/[a-z]/)) {
      flag++;
    }
    if (pass.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)) {
      flag++;
    }
    console.log(flag);
    if (flag === 0) {
      setMsg({ strength: "Password is required", color: "red" });
      console.log(msg);
    } else if (flag === 1) {
      setMsg({ strength: "Password is weak", color: "red" });
      console.log(msg);
    } else if (flag === 2) {
      setMsg({ strength: "Password is good", color: "orange" });
      console.log(msg);
    } else if (flag === 3) {
      setMsg({ strength: "Password is strong", color: "lightgreen" });
      console.log(msg);
    } else if (flag === 4) {
      setMsg({ strength: "Password is very strong", color: "green" });
      console.log(msg);
    }
  }
  return (
    <>
      <div className="main">
        <div>
          <h1 className="hd" style={{ textAlign: "center" }}>
            Dynamic Form
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              empVal();
            }}
            className="form"
          >
            <label htmlFor="uname">Enter your username</label>
            <input
              type="text"
              placeholder="Username"
              value={name}
              id="uname"
              className="in"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            {empname ? (
              <span style={{ color: "red", textAlign: "left" }}>
                "Username is required"
              </span>
            ) : null}
            <br></br>
            <label htmlFor="email">Enter your e-mail</label>
            <input
              type="email"
              placeholder="email@example.com"
              value={email.len}
              id="email"
              className="in"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            {empmail ? (
              <span style={{ color: "red", textAlign: "left" }}>
                "mail is required"
              </span>
            ) : null}
            <br></br>
            <label htmlFor="pw">Password</label>
            <input
              type="password"
              placeholder="aA1@bbbb"
              value={pass}
              id="pw"
              className="in"
              onChange={(e) => {
                setPass(e.target.value);
                passVal(e.target.value);
              }}
              style={{ backgroundColor: msg.color }}
            ></input>
            {emppass ? (
              <span style={{ color: "red", textAlign: "left" }}>
                "Password is required"
              </span>
            ) : null}
            {
              <p className="error" style={{ color: msg.color }}>
                {msg.strength}
              </p>
            }
            <br></br>
            <button type="submit" className="in">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;