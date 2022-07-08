import { Fragment, useState, useEffect } from "react";
import {Form, Button} from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authenticatedAction } from "../redux/actions/authenticated";
import Upload from "../component/uploadImage";
import './pages.css';
import axios from 'axios'

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const { token, data } = useSelector((state) => state.authenticatedReducer);
  const id = data.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const bodyUpdate = { username, email, id };
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const url = `https://challenge-chapter-9.herokuapp.com/profile/${id}`;
    axios
      .put(url, bodyUpdate, config)
      .then((res) => {
        localStorage.removeItem("data");
        localStorage.setItem("data", JSON.stringify(bodyUpdate));
        navigate("/");
      })
      .catch((err) => {
        console.log("gagal", err.message);
      });
  };

  useEffect(() => {
    dispatch(authenticatedAction());
    setUsername(data.username);
    setEmail(data.email);
  }, []);

  return (
    <Fragment>
      <div data-testid={'profile'} className="section">
        <Form className="container profile-form" onSubmit={handleSubmit}>
          <div className='profile-picture'>
            <Upload />
          </div>
          <h1 className="py-4">Edit Profile</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              data-testid={'profile-username'}
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
             data-testid={'profile-email'}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <div className="d-flex justify-content-start">
            <Link to="/">
              <button data-testid={'profile-link'} className="me-4 btn btn-danger">&laquo; back</button>
            </Link>
            <Button  variant="primary" type="submit">
              Edit data
            </Button>
          </div>
        </Form>
      </div>
    </Fragment>
  );
}