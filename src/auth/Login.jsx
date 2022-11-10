import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import axios from "axios";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [cookies, setCookies] = useCookies(["user"]);
  function handleData(event) {
    const { name, value } = event.target;
    setLoginData((preState) => ({
      ...preState,
      [name]: value,
    }));
    console.log(loginData);
  }

  function onFormSubmit() {
    const user = loginData.username;
    const pass = loginData.password;
    axios
    .post(
      "https://kwk26.herokuapp.com/graphql/",

      {
        query: `mutation($username:String!,$password:String!){
          tokenAuth(username: $username, password:$password){
            user{
              username
              firstName
              lastName
            }
            token
          }
      }
      `,
        variables: {
          username: user,
          password: ,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      let countries = response.data;
      console.log(countries);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

 

  return (
    <div className=" col-6 mx-auto">
      <Card shadow="true">
        <Card.Body>
          {" "}
          <h1 className="text-center">Please Login</h1>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                onChange={handleData}
                name="username"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleData}
                name="password"
                placeholder="Enter password"
              />
            </Form.Group>
            <Form.Group className="mt-3 text-center">
              <Button variant="primary" onClick={onFormSubmit}>
                Login
              </Button>
            </Form.Group>
          </Form>
          {cookies.user && <h1>{cookies.user}</h1>}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
