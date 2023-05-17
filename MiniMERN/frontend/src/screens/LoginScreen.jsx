import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, FormLabel } from 'react-bootstrap';
import FromContainer from '../components/formContainer/FromContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/loader/Loader'


function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(()=>{
    if (userInfo) {
       navigate('/')
    }
  },[navigate,userInfo]);

  const submitHandler = async function (e) {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/')
    } catch (err) {
      toast.error(err?.data?.message || err.error,'skdfhkjhdfjhksd'); 
    }
  }

  return (
    <FromContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
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
        {isLoading && <Loader />}
        <Button type='submit' variant='primary' className='mt-3'>
          Sign In
        </Button>

        <Row className='py-3'>
          <Col>
            New To My day? <Link to={'/register'}>Register</Link>
          </Col>
        </Row>
      </Form>
    </FromContainer>
  )
}

export default LoginScreen
