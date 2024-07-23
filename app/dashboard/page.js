'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Form, FormGroup, Label, Input, Button, Table, Navbar, NavbarBrand, Nav, NavItem, NavLink, Alert } from 'reactstrap';
import Link from 'next/link';
import PasswordModal from '../components/PasswordModal';

const DashboardPage = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(true); // Show modal initially
  const [news, setNews] = useState([]);
  const [unis, setUnis] = useState([]);
  const [newNews, setNewNews] = useState({
    title: '',
    description: '',
    url: '',
    imageUrl: '',
    type: 'main',
  });
  const [newUni, setNewUni] = useState({
    code: '',
    filliere: '',
    university: '',
    etablissement: '',
    gouvernorat: '',
    critere: [],
    score: 0,
  });
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (isAdmin) {
      const fetchNews = async () => {
        try {
          const response = await fetch('/api/news');
          if (!response.ok) throw new Error('Failed to fetch news');
          const data = await response.json();
          setNews(data);
        } catch (error) {
          setAlert({ message: 'Error fetching news', color: 'danger' });
        }
      };

      const fetchUnis = async () => {
        try {
          const response = await fetch('/api/unis');
          if (!response.ok) throw new Error('Failed to fetch universities');
          const data = await response.json();
          setUnis(data);
        } catch (error) {
          setAlert({ message: 'Error fetching universities', color: 'danger' });
        }
      };

      fetchNews();
      fetchUnis();
    }
  }, [isAdmin]);

  const handleAddNews = async () => {
    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNews),
      });

      if (!response.ok) throw new Error('Failed to add news');

      const data = await response.json();
      setNews(prevNews => [...prevNews, data]);
      setAlert({ message: 'News added successfully!', color: 'success' });
      setNewNews({
        title: '',
        description: '',
        url: '',
        imageUrl: '',
        type: 'main',
      });
    } catch (error) {
      setAlert({ message: 'Error adding news', color: 'danger' });
    }
  };

  const handleDeleteNews = async (id) => {
    try {
      await fetch(`/api/news/${id}`, {
        method: 'DELETE',
      });
      setNews(news.filter(item => item._id !== id));
      setAlert({ message: 'News deleted successfully!', color: 'success' });
    } catch (error) {
      setAlert({ message: 'Error deleting news', color: 'danger' });
    }
  };

  const handleAddUni = async () => {
    try {
      const response = await fetch('/api/unis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUni),
      });

      if (!response.ok) throw new Error('Failed to add university');

      const data = await response.json();
      setUnis(prevUnis => [...prevUnis, data]);
      setAlert({ message: 'University added successfully!', color: 'success' });
      setNewUni({
        code: '',
        filliere: '',
        university: '',
        etablissement: '',
        gouvernorat: '',
        critere: [],
        score: 0,
      });
    } catch (error) {
      setAlert({ message: 'Error adding university', color: 'danger' });
    }
  };

  const handleDeleteUni = async (id) => {
    try {
      await fetch(`/api/unis/${id}`, {
        method: 'DELETE',
      });
      setUnis(unis.filter(item => item._id !== id));
      setAlert({ message: 'University deleted successfully!', color: 'success' });
    } catch (error) {
      setAlert({ message: 'Error deleting university', color: 'danger' });
    }
  };

  const handleAuthenticate = (status) => {
    if (status) {
      setIsAdmin(true);
      setShowPasswordModal(false);
    } else {
      router.push('/'); // Redirect to home page on failure
    }
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand tag={Link} href="/dashboard">Admin Dashboard</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} href="/dashboard">Manage News & Universities</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {alert && <Alert color={alert.color}>{alert.message}</Alert>}

        <section>
          <h2>Manage News</h2>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                type="text"
                value={newNews.title}
                onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                type="text"
                value={newNews.description}
                onChange={(e) => setNewNews({ ...newNews, description: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="url">URL</Label>
              <Input
                id="url"
                type="text"
                value={newNews.url}
                onChange={(e) => setNewNews({ ...newNews, url: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                type="text"
                value={newNews.imageUrl}
                onChange={(e) => setNewNews({ ...newNews, imageUrl: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="type">Type</Label>
              <Input
                id="type"
                type="select"
                value={newNews.type}
                onChange={(e) => setNewNews({ ...newNews, type: e.target.value })}
              >
                <option value="main">Main</option>
                <option value="left-large">Left Large</option>
                <option value="right-small">Right Small</option>
              </Input>
            </FormGroup>
            <Button color="primary" onClick={handleAddNews}>Add News</Button>
          </Form>

          <Table className="mt-4">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>URL</th>
                <th>Image URL</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {news.map((item) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.url}</td>
                  <td>{item.imageUrl}</td>
                  <td>{item.type}</td>
                  <td>
                    <Button color="danger" onClick={() => handleDeleteNews(item._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>

        <section className="mt-5">
          <h2>Manage Universities</h2>
          <Form>
            <FormGroup>
              <Label for="code">Code</Label>
              <Input
                id="code"
                type="text"
                value={newUni.code}
                onChange={(e) => setNewUni({ ...newUni, code: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="filiere">Filiere</Label>
              <Input
                id="filiere"
                type="text"
                value={newUni.filliere}
                onChange={(e) => setNewUni({ ...newUni, filliere: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="university">University</Label>
              <Input
                id="university"
                type="text"
                value={newUni.university}
                onChange={(e) => setNewUni({ ...newUni, university: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="etablissement">Etablissement</Label>
              <Input
                id="etablissement"
                type="text"
                value={newUni.etablissement}
                onChange={(e) => setNewUni({ ...newUni, etablissement: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="gouvernorat">Gouvernorat</Label>
              <Input
                id="gouvernorat"
                type="text"
                value={newUni.gouvernorat}
                onChange={(e) => setNewUni({ ...newUni, gouvernorat: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="critere">Critere (comma separated)</Label>
              <Input
                id="critere"
                type="text"
                value={newUni.critere.join(', ')}
                onChange={(e) => setNewUni({ ...newUni, critere: e.target.value.split(',').map((s) => s.trim()) })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="score">Score</Label>
              <Input
                id="score"
                type="number"
                value={newUni.score}
                onChange={(e) => setNewUni({ ...newUni, score: Number(e.target.value) })}
              />
            </FormGroup>
            <Button color="primary" onClick={handleAddUni}>Add University</Button>
          </Form>

          <Table className="mt-4">
            <thead>
              <tr>
                <th>Code</th>
                <th>Filiere</th>
                <th>University</th>
                <th>Etablissement</th>
                <th>Gouvernorat</th>
                <th>Critere</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {unis.map((item) => (
                <tr key={item._id}>
                  <td>{item.code}</td>
                  <td>{item.filliere}</td>
                  <td>{item.university}</td>
                  <td>{item.etablissement}</td>
                  <td>{item.gouvernorat}</td>
                  <td>{item.critere}</td>
                  <td>{item.score}</td>
                  <td>
                    <Button color="danger" onClick={() => handleDeleteUni(item._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </Container>
      <PasswordModal
        isOpen={showPasswordModal}
        onAuthenticate={handleAuthenticate}
        onClose={() => setShowPasswordModal(false)} // Close modal but do not redirect
      />
    </div>
  );
};

export default DashboardPage;
