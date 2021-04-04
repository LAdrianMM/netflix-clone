import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import logo from  '../assets/images/netflix-logo.png'
import { useHistory } from 'react-router';

const Header = () => {
  const classes = useStyles()
  const [ show, setShow ] = useState(false)
  const history = useHistory()

  const hideHeader = () => {
    if(window.scrollY > 100){
      setShow(true)
    }else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', hideHeader)
    return () => window.removeEventListener('scroll', hideHeader)
  }, [])

  return (
    <AppBar position='sticky' elevation={0} className={`${classes.root} ${show && classes.transparent}`}>
      <Toolbar className={classes.toolbar}>
        <IconButton onClick={() => history.push('/')}>
          <img src={logo} alt='logo' className={classes.logo} />
        </IconButton>
        <Avatar onClick={() => history.push('/profile')} variant='square' style={{cursor: 'pointer'}} />
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  logo:{
    width: '150px',
    cursor: 'pointer'
  },
  root:{
    backgroundColor: '#111',
    top: 0,
    left: 0,
    right: 0,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  transparent:{
    backgroundColor: 'transparent'
  },

}))

export default Header