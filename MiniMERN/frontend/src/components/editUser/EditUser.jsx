import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import FromContainer from '../formContainer/FromContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';
import { useUpdateUserMutation } from '../../slices/usersApiSlice';



function EditUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();


  const setCookie = () => {
    document.cookie = `jwt=${userInfo}; expires=30 * 24 * 60 * 60 * 1000;`;
  };

  useEffect(() => {
    setCookie();
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  const submitHandler = async function (e) {
    e.preventDefault();

    if (password != confirmPassword) {
      toast.error('Password do not match.!');
    } else {
      try {
        const res = await updateProfile({
          _id : userInfo._id,
          name,
          email,
          password
        }).unwrap();
        dispatch(setCredentials({...res}));
        toast.success('Profile updated');
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  }
  return (
    <div>
      <FromContainer>
        <h1>Edit Profile</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className='my-2' controlId='name'>
            <Form.Label>Name </Form.Label>
            <Form.Control
              type='text'
              placeholder='Please enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}>
            </Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Please enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}>
            </Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Please enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}>
            </Form.Control>
          </Form.Group>

          <Form.Group className='my-2' controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}>
            </Form.Control>
          </Form.Group>
          {isLoading && <Loader />}
          <Button type='submit' variant='primary' className='mt-3'>
            Sign Up
          </Button>

          <Row className='py-3'>
            <Col>
              Already have an account? <Link to={'/login'}>Register</Link>
            </Col>
          </Row>
        </Form>
      </FromContainer>
    </div>
  )
}

export default EditUser
