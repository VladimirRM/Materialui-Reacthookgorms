import React from 'react'
import "./auth-form.css"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
      <TextField
          required

          label="Parol"
          type="password"
          size='small'
          margin='normal'
          className='auth-form__input'
          fullWidth={true}

        />
        <Button>
            Enter
        </Button>
      </form>
    </div>
  )
}

export default AuthForm