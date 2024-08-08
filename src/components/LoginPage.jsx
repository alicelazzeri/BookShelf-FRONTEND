/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, fetchAllUsers } from "../redux/actions/index.js";
import { useNavigate } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import logo from "../assets/images/logo.png";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state => state.user.users);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleLogin = user => {
    dispatch(setUser(user));
    navigate(`/user/${user.id}/books`);
  };

  const filteredUsers = users.filter(user => user.firstName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container>
      <div className="text-center">
        <h1 className="loginTitle my-4">
          Welcome to <span className="orangeSpan">Book</span>Shelf
        </h1>
        <p className="homeBody mb-0">
          Select your user from the list below or search by name or email to log in. <br /> If you don't have an
          account, click on the <span className="italicSpan">Add new user</span> button to create one.
        </p>
        <div className="mb-3">
          <input
            className="inputField"
            type="text"
            placeholder="Search user by name"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center gap-2 mb-4">
        <p className="mb-0">Don't have an account yet? </p>
        <button className="registerBtn">Add new user</button>
      </div>
      <hr />
      <div className="mb-5">
        {filteredUsers.map(user => (
          <Card key={user.id} className="userCard my-4">
            <Card.Header>
              <div className="d-flex align-items-center gap-2">
                <img className="logoPic" src={logo} alt="BookShelf Logo" />
                <h6 className="cardTitle mb-0">
                  <span className="orangeSpan">Book</span>Shelf
                </h6>
                {/* <Badge className="userBadge"> User #{user.id}</Badge> */}
              </div>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-row align-items-center my-2 ms-3 dataContainer">
                <img src={user.avatarUrl} className="rounded-circle avatarPic" alt="User Avatar" />
                <div className="d-flex flex-column align-items-start ms-4 contactsContainer">
                  <Card.Title className="userName">
                    {user.firstName} {user.lastName}
                  </Card.Title>
                  <Card.Text className="userEmail">{user.email}</Card.Text>
                  <button className="loginBtn" onClick={() => handleLogin(user)}>
                    Login
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default LoginPage;
