import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { MDBCol, MDBContainer, MDBRow, MDBCard } from 'mdb-react-ui-kit';
import axios from '../../config/axios';
import AdminHeader from '../../components/adminHeader/AdminHeader';
import Loading from '../../components/loding/Loding';


function EditUserAdmin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [user, setUser] = useState();
  const [loading,setLoading] = useState(true);



  const navigate = useNavigate();

  // let { token } = useSelector((state) => state.admin);
  const token = localStorage.getItem('admin') ? localStorage.getItem('admin') : null;
  const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : null;

  useEffect(() => {
    axios.get(`/admin/get/single/user/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        setUser(res.data);
        setLoading(false)
      })
      .catch((err) => console.log(err.message));
  }, [token, userId]);

  const submitHandler = async function (e) {
    e.preventDefault();
    setLoading(true);
    axios.put(`/admin/users/update/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data :{
        name,
        email,
        password,
        id : userId
      }
    })
      .then((res) => {
        localStorage.removeItem('userId');
        navigate('/admin/home');
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  

  return (
    <>
      {/* {loading && <Loading />} */}
      <AdminHeader />
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="6">
            <MDBCard className='p-5' style={{ boxShadow: '0 5px 15px rgba(0, 0, 0, .5)', borderRadius: '10px', background: '#DDDDDE' }}>
              <h4>Update User Profile</h4>
              <Form onSubmit={submitHandler}>

                <Form.Group className='my-2' controlId='name'>
                  <Form.Label style={{ float: 'left' }}>Name </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder={user && user.name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    >
                  </Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='email'>
                  <Form.Label style={{ float: 'left' }}>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder={user && user.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                  </Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='password'>
                  <Form.Label style={{ float: 'left' }}>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Please enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                  </Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='confirmPassword'>
                  <Form.Label style={{ float: 'left' }}>Confirm Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}>
                  </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-3'>Update</Button>
              </Form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default EditUserAdmin;
