import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Paypal from './pages/Paypal'
import Home from './pages/Home'
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

const App = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const user = useSelector(selectUser)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }

      return unsubscribe
    })
  }, [dispatch])


  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/checkout'>
            <Paypal />
          </Route>
          <Route path='/'>
            <Home />
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    minHeight: '100vh'
  }
}))

export default App;
