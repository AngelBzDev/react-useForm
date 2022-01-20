import { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Form from "./components/Form";
import ListUsers from "./components/ListUsers";
import UsersContext from "./context/userContext";
import './styles/Input.css'

const App = () => {

  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={{
      users, setUsers
    }}>
      <Container>
        <Card>
          <Form />
          <ListUsers />
        </Card>
      </Container>
    </UsersContext.Provider>
  );
}

export default App;
