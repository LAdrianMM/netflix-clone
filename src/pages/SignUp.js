import React, { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { auth } from '../firebase';
import { useHistory } from 'react-router';

const SignUp = () => {
  const classes = useStyles()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const history = useHistory()

  const register = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then(authUser => history.push('/'))
      .catch(err => alert(err.message))

      setEmail('')
      setPassword('')
  }
  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
      .then(authUser => history.push('/'))
      .catch(err => alert(err.message))

      setEmail('')
      setPassword('')
  }

  return (
    <div className={classes.root}>
      <Typography variant='h5' align='left'>
        Sing Up
      </Typography>
      <form onSubmit={signIn} className={classes.form}>
        <NetflixInput 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email' 
          type='email'
          className={classes.email} />
        <NetflixInput 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password' 
          type='password'
          className={classes.password} />
        <NetflixButton 
          radius='5px' 
          wide='medium'>
            Sign In
        </NetflixButton>
        <Typography variant='subtitle2'>
          New to Netflix? {' '}
          <span 
            onClick={register}
            className={classes.signupLink}>
            Sign Up now. {' '}
          </span>
        </Typography>
      </form>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  email: {
    marginBottom: theme.spacing(2)
  },
  form: {
    width: '80%'
  },
  password: {
    marginBottom: theme.spacing(4)
  },
  root: {
    maxWidth: '350px',
    width: '20rem', 
    height: '25rem',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  signupLink: {
    color:'#fff',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline'
    }

  },
}))

export default SignUp
