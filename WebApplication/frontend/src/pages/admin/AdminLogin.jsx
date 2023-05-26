import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { MDBCol, MDBContainer, MDBRow, MDBCard } from 'mdb-react-ui-kit';
import axios from '../../config/axios';
import { useDispatch } from 'react-redux';
import { login } from '../../redux-toolkit/adminAuthSlice.js';
import Loading from '../../components/loding/Loding';


function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false);
  const token  = localStorage.getItem('admin') ? localStorage.getItem('admin') : null;
  useEffect(() => {
    if(token){
      navigate('/admin/home');
    }
  },[token,navigate])

  const submitHandler = async function (e) {
    e.preventDefault();
    setLoading(true);
    try {
      axios.post('/admin/login',{
        email,
        password
      }).then((res)=>{
        dispatch(login(res.data.token));
        navigate('/admin/home');
        localStorage.setItem('admin',res.data.token);
        setLoading(false);
      })
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* {loading && <Loading />} */}
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="6">
            <MDBCard className='p-5' style={{ boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',marginTop:'5rem',borderRadius:'10px',background:'#DDDDDE'}}>
              <h1>Admin Log In</h1>
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
                  Log In
                </Button>
              </Form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default AdminLogin;
