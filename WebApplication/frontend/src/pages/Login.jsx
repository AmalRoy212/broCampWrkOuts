import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar/Header';
import { MDBCol, MDBContainer, MDBRow, MDBCard } from 'mdb-react-ui-kit';
import axios from '../config/axios';


function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');

  const navigae = useNavigate();


  const submitHandler = async function (e) {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('imgSrc', image); 
  
    try {
      axios.post('/users/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res)=>{
        console.log(res.data);
        navigae('/login');
      })
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="6">
            <MDBCard className='p-5' style={{ boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',marginTop:'5rem',borderRadius:'10px',background:'#DDDDDE'}}>
              <h1>Sign Up</h1>
              <Form onSubmit={submitHandler}>

                <Form.Group className='my-2' controlId='email'>
                  <Form.Label style={{float:'left'}}>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Please enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                  </Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='password'>
                  <Form.Label style={{float:'left'}}>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Please enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                  </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>
                  Sign Up
                </Button>

                <Row className='py-3'>
                  <Col>
                    New to me? <Link to={'/signup'}>Register</Link>
                  </Col>
                </Row>
              </Form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Login;
