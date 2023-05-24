import React from 'react'
import { useSelector } from 'react-redux';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import Header from '../components/Navbar/Header';


function UserHome() {
  const { token } = useSelector((state) => state.auth);
  return (
    <div>
      <Header />
      <div className="gradient-custom-2">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="12" xl="12">
              <MDBCard style={{marginTop:'5rem'}}>
                
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  )
}

export default UserHome


