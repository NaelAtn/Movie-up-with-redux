import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../JS/Actions/listMovies';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddMovie() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title,setTitle] = React.useState("")
  const [rate,setRate] = React.useState(0)
  const [posterUrl,setPosterUrl] = React.useState("")
  const [description,setDescription] = React.useState("")
  const [trailer,setTrailer] = React.useState("")

  const dispatch = useDispatch()

  const handleAdd =(e) => {
      e.preventDefault()
      if (title && rate && posterUrl && description && trailer ) {
          dispatch(addMovie({id : Math.random() , title , trailer , rate , posterUrl , description }))
          handleClose()
      }
      else {
          alert("please fill all fields")}
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{mt : "5%"}} >Add Movie <AddIcon/> </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography gutterBottom variant="h5" component="div">Add Movie +</Typography>
        <TextField id="standard-basic" label="Movie title" variant="standard" onChange={(e)=> setTitle(e.target.value)} value={title} />
        <br/>
        <TextField id="standard-basic" label="PosterUrl" variant="standard" onChange={(e)=> setPosterUrl(e.target.value)} value={posterUrl} /> 
        <br/>
        <TextField id="standard-basic" label="Movie rate" variant="standard" type='number' onChange={(e)=> setRate(e.target.value)} value={rate} />
        <br/>
        <TextField id="standard-basic" label="Description" variant="standard" onChange={(e)=> setDescription(e.target.value)} value={description} />
        <br/>
        <TextField id="standard-basic" label="Trailer" variant="standard" onChange={(e)=> setTrailer(e.target.value)} value={trailer} />
        <br/>

        <Button variant="contained" sx={{mt : "5%"}} onClick={handleAdd} >Add Movie</Button>
        <br/><br/>
        <Button variant="outlined" onClick={handleClose} >Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
