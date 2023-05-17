import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, FormLabel } from 'react-bootstrap';
import FromContainer from '../components/formContainer/FromContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/loader/Loader';
import { FirebaseContext } from '../context/firebaseContext'


function SigninScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');
  const { firebase } = useContext(FirebaseContext);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo]);

  const submitHandler = async function (e) {
    e.preventDefault();
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then(async (url) => {
        let imageSrc = url;
        localStorage.setItem('userImg',url);
        if (password != confirmPassword) {
          toast.error('Password do not match.!');
        } else {
          try {
            const res = await register({ name, email, password, imageSrc }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/')
          } catch (error) {
            toast.error(error?.data?.message || error.error);
          }
        }
      })
    })
  }

  return (
    <FromContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>

        <Form.Group className='my-2' controlId='name'>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {image && <img style={{ objectFit: 'cover', border: '2px solid black', borderRadius: '50%' }} className='m2' alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>}
          </div>
          <Form.Label style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='mt-2'>Profile Image </Form.Label>
          <br />
          <input style={{ width: '99%', border: '1px solid #ced4da', borderRadius: '5px' }} className='m-1 p-1' onChange={(e) => setImage(e.target.files[0])} type="file" />
        </Form.Group>

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
  )
}

export default SigninScreen
