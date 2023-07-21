import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../JS/Actions/listMovies';
import Rating from '@mui/material/Rating';
import SlideshowIcon from '@mui/icons-material/Slideshow';

const Movie = ({movie}) => {

  const dispatch = useDispatch()

  return (
    <div>
    <Card sx={{ maxWidth: 345 ,mt :"2%" , mb : "7%" }}>
    <CardMedia
      sx={{ height: 280 }}
      image={movie.posterUrl}
      title="green iguana"
    />
    <Rating
    name="simple-controlled"
    value={movie.rate}
    readOnly 
    sx={{mt : "5%"}}
  />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {movie.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {movie.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="warning" onClick={()=> dispatch(deleteMovie(movie.id))} >Delete <DeleteForeverIcon/> </Button>
      <Button variant="contained" href={movie.trailer} target='blank' >Trailer <SlideshowIcon/> </Button>
    </CardActions>
  </Card>
    </div>
  )
}

export default Movie
