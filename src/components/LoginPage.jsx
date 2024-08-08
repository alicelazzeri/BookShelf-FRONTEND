import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  // Aggiungi altri utenti qui
];

const LoginPage = ({ onUserSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserSelect = user => {
    onUserSelect(user);
    navigate("/books");
  };

  return (
    <div className="login-container">
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id} onClick={() => handleUserSelect(user)}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

LoginPage.propTypes = {
  onUserSelect: PropTypes.func.isRequired,
};

export default LoginPage;
