import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoutes() {
  const { userInfo } = useSelector((state) => state.auth );
  return userInfo ? <Outlet /> : <Navigate to={'/login'} replace />
  return (
    <div>
      
    </div>
  )
}

export default PrivateRoutes
