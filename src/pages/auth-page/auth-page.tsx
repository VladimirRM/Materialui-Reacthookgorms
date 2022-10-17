import React from 'react'
import './auth-page.css'
import Typography from '@mui/material/Typography';

 export const AuthPage: React.FC= () => {
  return (
    <div className='auth-page'>
      <AuthForm/>
    </div>
  )
}

export default AuthPage