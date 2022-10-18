import React from 'react'
import "./auth-form.css"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

 export const AuthForm = () => {
  return (
    <div className='auth-form'>
           <Typography variant="h4" component='div' >
            Войдите
      </Typography>
           <Typography variant="subtitle1" component='div' gutterBottom={true} className='auth-form__subtitle1' >
            чтобы получить доступ
      </Typography>
      <form>
      <TextField
          required

          label="Login"
          size='small'
          margin='normal'
          className='auth-form__input'
          fullWidth={true}

        />
      </form>
    </div>
  )
}

export default AuthForm