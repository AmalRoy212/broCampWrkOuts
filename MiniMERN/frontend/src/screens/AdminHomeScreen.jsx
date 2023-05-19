import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Loader from '../components/loader/Loader'


function AdminHomeScreen() {
  const datas = localStorage.getItem('userdata');

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr> 
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>

      </Table>

    </div>
  )
}

export default AdminHomeScreen;
