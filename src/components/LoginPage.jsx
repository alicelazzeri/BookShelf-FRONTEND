/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, fetchAllUsers, addUser } from "../redux/actions/index.js";
import { useNavigate } from "react-router-dom";
import { Card, Container, Modal, Form } from "react-bootstrap";
import logo from "../assets/images/logo.png";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(state => state.user.users);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    avatarUrl: "",
  });

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleLogin = user => {
    dispatch(setUser(user));
    navigate(`/user/${user.id}/books`);
  };

  const handleAddUser = () => {
    dispatch(addUser(newUser));
    setShowModal(false);
  };

  const filteredUsers = users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

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
        <button className="registerBtn" onClick={() => setShowModal(true)}>
          Add new user
        </button>
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
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title className="modalTitle">New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFirstName" className="mb-3">
              <Form.FloatingLabel className="modalInput" label="First Name">
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={newUser.firstName}
                  onChange={e => setNewUser({ ...newUser, firstName: e.target.value })}
                />
              </Form.FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formLastName" className="mb-3">
              <Form.FloatingLabel className="modalInput" label="Last Name">
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  value={newUser.lastName}
                  onChange={e => setNewUser({ ...newUser, lastName: e.target.value })}
                />
              </Form.FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.FloatingLabel className="modalInput" label="Email">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={newUser.email}
                  onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                />
              </Form.FloatingLabel>
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.FloatingLabel className="modalInput" label="Password">
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={newUser.password}
                  onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                />
              </Form.FloatingLabel>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="saveBtn" onClick={handleAddUser}>
            Add New User
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default LoginPage;
