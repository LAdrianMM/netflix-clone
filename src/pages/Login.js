import React, { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import logo from  '../assets/images/netflix-logo.png'
import HeroBanner from  '../assets/images/HeroBanner.jpg'
import { NetflixButton, NetflixInput } from '../styled/styledcomponents'
import SignUp from './SignUp'

const Home = () => {
  const classes = useStyles()
  const [signIn, setSignIn] = useState(false)

  return (
    <div className={classes.root}>
      <img src={logo} alt='logo' className={classes.logo} />
      <NetflixButton onClick={() => setSignIn(!signIn)} radius='5px' className={classes.session}>Iniciar sesion</NetflixButton>
      <div className={classes.info}>
        {
          signIn ? (<SignUp />) : (
            <>
              <Typography variant='h4' gutterBottom>
                Unlimited films, TV programmes and more
              </Typography>
              <Typography variant='h5'>
                Watch anywhere. Cancel at any time.
              </Typography>
              <Typography variant='h6' gutterBottom>
                Ready to watch? Enter your email to create or restart your membership
              </Typography>
              <div className={classes.inputBlock}>
                <NetflixInput placeholder='Email address...' />
                <NetflixButton radius='loginInput'>GET STARTED</NetflixButton>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  info:{
    color: '#fff',
    zIndex: 15,
    textAlign: 'center',

    '& h4': {
      fontWeight: 800,
    },
    '& h5': {
      fontWeight: 600,
    }
  },
  inputBlock:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    position: 'fixed',
    top: 20,
    left: 20,
    width: '150px',
    cursor: 'pointer'
  },
  root: {
    position: 'relative',
    height: '100vh',
    objectFit: 'contain',
    backgroundImage: `url(${HeroBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  session: {
    position: 'fixed',
    zIndex: 15,
    right: 20,
    top: 20,
  }
}))

export default Home
