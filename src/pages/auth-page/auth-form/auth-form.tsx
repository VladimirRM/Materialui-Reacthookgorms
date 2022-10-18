import React from 'react'
import "./auth-form.css"
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useForm,Controller,SubmitHandler, useFormState} from "react-hook-form"

interface ISignInForm{
  login: string;
  password:string
}

 export const AuthForm = () => {
    const {handleSubmit, control } = useForm<ISignInForm>()

    const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

    const {errors}= useFormState({
      control
    })
  return (
    <div className='auth-form'>
           <Typography variant="h4" component='div' >
            Войдите
      </Typography>
           <Typography variant="subtitle1" component='div' gutterBottom={true} className='auth-form__subtitle1' >
            чтобы получить доступ
      </Typography>
      <form className='auth-form__form ' onSubmit={handleSubmit(onSubmit)}>
      <Controller
      control={control}
      name='login'
      rules={{required:"Обязательно для заполнения"}}

      render={({field})=>(
        <TextField
        required

        label="Login"
        size='small'
        margin='normal'
        className='auth-form__input'
        fullWidth={true}
        onChange={(e)=>field.onChange(e)}
        value={field.value}
        error={!!errors.login?.message}
        helperText={errors.login?.message}

      />
      )}
      />
      <Controller
      control={control}
      name='password'
      rules={{required:"Обязательно для заполнения"}}

      render={({field})=>(
        <TextField
        required

        label="Parol"
        size='small'
        margin='normal'
        className='auth-form__input'
        fullWidth={true}
        onChange={(e)=>field.onChange(e)}
        value={field.value}
        error={!!errors.password?.message}
        helperText={errors.password?.message}

      />
      )}
      />
     
        <Button type='submit'
        variant='contained'
        fullWidth={true}
        disableElevation={true}
        sx={{
           marginTop: 2
        }}
        >
            Enter
        </Button>
      </form>
    </div>
  )
}

export default AuthForm