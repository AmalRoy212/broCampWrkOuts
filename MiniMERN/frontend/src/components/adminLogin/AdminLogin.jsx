import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
}
 from 'mdb-react-ui-kit';
import { useLoginMutation } from '../../slices/adminApiSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/adminAuthSlice';


function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();
  const { adminInfo } = useSelector((state) => state.adminAuth);
  
  useEffect(() => {
    if(adminInfo){
      navigate('/home');
    }
  },[navigate,adminInfo]);

  const adminSigninHandler = async function(){
    try {
      const res = await login().unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/home')
    } catch (error) {
      
    }
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput onChange={(e) => setEmail(e.target.value)} value={email} wrapperClass='mb-4' label='Email address' id='form1' type='email' />
      <MDBInput onChange={(e) => setPassword(e.target.value)} value={password} wrapperClass='mb-4' label='Password' id='form2' type='password' />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn onClick={ adminSigninHandler } className="mb-4">Sign in</MDBBtn>

    </MDBContainer>
  )
}

export default AdminLogin


