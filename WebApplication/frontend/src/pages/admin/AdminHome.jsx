import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AdminHeader from '../../components/adminHeader/AdminHeader';
import axios from '../../config/axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AdminHome() {

  const [users, setUsers] = useState([]);

  const adminToken = localStorage.getItem('admin') ? localStorage.getItem('admin') : null

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/admin/get/users', {
      headers: {
        'Authorization': `Bearer ${adminToken}`
      }
    })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [users, adminToken]);

  const blockUser = (id) => {
    axios.put('/admin/block/user', {
      userId: id
    }, {
      headers: {
        'Authorization': `Bearer ${adminToken}`
      }
    }).then((res) => {
      console.log(res.data);
    })
  }

  const unblockUser = (userId) => {
    axios.put('/admin/unblock/user', {
      userId
    }, {
      headers: {
        'Authorization': `Bearer ${adminToken}`
      }
    }).then((res) => {
      console.log(res.data);
    })
  }

  const deleteUser = (userId) => {
    axios.delete('/admin/users/delete', {
      headers: {
        'Authorization': `Bearer ${adminToken}`
      },
      data: {
        userId
      }
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const editUser = (userId) => {
    localStorage.setItem('userId',userId);
    navigate('/admin/update/user')
  }
  
  return (
    <div>
      <AdminHeader />
      <MDBTable style={{ backgroundColor: '#D3D3D3 ' }} bordered>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Block</th>
            <th scope='col'>UnBlock</th>
            <th scope='col'>Delete</th>
            <th scope='col'>Edit</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {users.map((user, index) => (

            <React.Fragment key={index}>
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button variant='success' value={user._id}
                    onClick={(e) => unblockUser(e.target.value)}
                  >UnBlock</Button>
                </td>
                <td>
                  <Button variant='warning' value={user._id}
                    onClick={(e) => blockUser(e.target.value)}
                  >Block</Button>
                </td>
                <td>
                  <Button variant='danger' value={user._id}
                    onClick={(e) => deleteUser(e.target.value)}
                  >Delete</Button>
                </td>
                <td>
                  <Button variant='danger' value={user._id}
                    onClick={(e) => editUser(e.target.value)}
                  >Edit</Button>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}

export default AdminHome;