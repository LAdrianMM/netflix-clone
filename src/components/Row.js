import React, { useEffect, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';

const Row = ({title, fetchUrl, isLargeRow}) => {
  const classes = useStyles()
  const [ movies, setMovies ] = useState([])
  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies)

  return (
    <div className={classes.root}>
      <Typography variant='h4' className={classes.title}>{title}</Typography>
      <div className={classes.posters}>

        {
          movies.map(movie => (
            (isLargeRow && movie.poster_path || 
            !isLargeRow && movie.backdrop_path) && (
              <img 
                key={movie.id}
                className={`${classes.poster} ${isLargeRow && classes.posterLarge}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name} />
            )
          ))
        }

      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  poster: {
    maxHeight: '12rem',
    borderRadius: '5px',
    objectFit: 'contain',
    marginRight: theme.spacing(2),
    transition: 'transform 450ms',

    '&:hover': {
      transform: 'scale(1.08)',
    }
  },
  posterLarge: {
    maxHeight: '15rem',

    '&:hover': {
      transform: 'scale(1.15)',
    }

  },
  posters: {
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'scroll',

    '&::-webkit-scrollbar': {
      display: 'none'
    },
  },
  root: {
    marginTop: theme.spacing(4),
    color: '#fff',
    marginLeft: theme.spacing(4),

    '&:last-child':{
      paddingBottom: theme.spacing(4)
    }

  },
  title: {
    marginBottom: theme.spacing(2)
  }
}))

export default Row