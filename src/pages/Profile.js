import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import Header from '../components/Header';
import netflixavatar from '../assets/images/netflixavatar.jpg'
import Plans from '../components/Plans';
import { NetflixButton } from '../styled/styledcomponents';
import { auth } from '../firebase';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Home = () => {
  const classes = useStyles()
  const history = useHistory()
  const user = useSelector(selectUser)

  const signout = () =>{
    auth.signOut()
    history.push('/login')
  }

  return (
    <div className={classes.root}>
      <Header />
      <Typography variant='h3'>Edit Profile</Typography>
      <div className={classes.info}>
        <img src={netflixavatar} alt='avatar'/>
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant='h6'>{user ? user.email : 'Email user'}</Typography>
            <Typography className={classes.plansText} variant='h5' gutterBottom>Plans</Typography>
            <Plans cost={7.99}>Netflix Standard</Plans>
            <Plans cost={11.99}>Netflix Basic</Plans>
            <Plans wide='medium' color='gray' cost={15.99}>Netflix Premium</Plans>
            <NetflixButton onClick={signout} wide='fullWidth'>Sign Out</NetflixButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  details: {
    width: '100%',
    marginLeft: theme.spacing(3),

    '& h6': {
      backgroundColor: '#aaa',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: '18px'
    }
  },
  info: {
    width: '80%',
    maxWidth: '800px',
    display: 'flex',

    '& img': {
      height: '100px',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  },
  plans: {
    width: '100%',
  },
  plansText: {
    borderBottom: '1px solid lightgray'
  },
  root: {
    color: '#fff',
    minHeight: '100vh',
    maxWidth: '100vw', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
}))

export default Home
