import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form, Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const createUser = async () => {
    try {
      await axios.post('http://localhost:3001/users', { username, password });
      setUsername('');
      setPassword('');
      fetchUsers();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:3001/users/${editingUserId}`, { username, password });
      setUsername('');
      setPassword('');
      setEditingUserId(null);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const editUser = (user) => {
    setUsername(user.username);
    setPassword(user.password);
    setEditingUserId(user.id);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1 className="mt-4">Usuários</h1>

          <Form onSubmit={editingUserId ? updateUser : createUser} className="mb-4">
            <Row className="mb-3">
              <Col md={6}>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button type="submit" variant="primary">
                  {editingUserId ? 'Atualizar Usuário' : 'Criar Usuário'}
                </Button>
              </Col>
            </Row>
          </Form>

          <Table>
            <thead>
              <tr>
                <th>Usuário</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>
                    <Button
                      onClick={() => editUser(user)}
                      variant="secondary"
                      size="sm"
                      className="me-2"
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => deleteUser(user.id)}
                      variant="danger"
                      size="sm"
                    >
                      Deletar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default App;