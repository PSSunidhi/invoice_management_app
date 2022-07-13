import React from 'react'; 
import Button from '@mui/material/Button'; 
import Stack from '@mui/material/Stack'; 
import './Header.css'; 
import ButtonGroup from '@mui/material/ButtonGroup'; 
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "#2d4250",
        border: '1px solid #000',
        borderRadius: '15px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TextButtons() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [value, setValue] = React.useState({});
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const handleChange_customerNumber = (event) => {
        setValue(event.target.value);
    };   
     
    console.log(setValue)
        
        return (  
   <>
        <div className='page' id='button'> 
           
                <Stack direction="row" spacing={2} size='small'> 
                <div className='page1'>
                    <ButtonGroup> 
                <Button id='sub'>PREDICT</Button> 
                <Button id='sub'>ANALYTICS VIEW</Button> 
                <Button id='sub'>ADVANCE SEARCH</Button> 
             </ButtonGroup> 
        
             </div>
                    <Button id='add' variant="outlined" onClick={handleOpen}>ADD</Button> 
                    <Button id='add' variant="text" >EDIT</Button> 
                    <Button id='add' variant="outlined">DELETE</Button> 
                    {<Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 style={{color: 'white'}}>Add</h2>
                        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 870,
          borderRadius: 3,
          alignContent: 'flex-start',
        }}
      >
        <TextField
          id="filled-multiline-flexible"
          label="Business Code"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          margin='normal'
          variant="filled"
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          id="filled-multiline-flexible"
          label="Customer Number"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange_customerNumber}
          variant="filled"
          margin='normal'
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
        id="date"
        label="Clear Date"
        type="date"
        defaultValue="2022-5-24"
        margin='normal'
        style={{width: '23%'}}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        id="filled-multiline-flexible"
        label="Business Year"
        multiline
        maxRows={4}
        value={value}
        onChange={handleChange}
        variant="filled"
        margin='normal'
      />
      <TextField
        id="filled-multiline-flexible"
        label="Document ID"
        multiline
        maxRows={4}
        value={value}
        onChange={handleChange}
        variant="filled"
        margin='normal'
      />&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
      id="date"
      label="Posting Date"
      type="date"
      margin='normal'
      defaultValue="2022-5-24"
      style={{width: '23%'}}
      sx={{ width: 220 }}
      InputLabelProps={{
        shrink: true,
      }}
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
        id="date"
        label="Document Create Date"
        type="date"
        margin='normal'
        defaultValue="2022-5-24"
        style={{width: '23%'}}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
          id="date"
          label="Due Date"
          type="date"
          margin='normal'
          defaultValue="2022-5-24"
          style={{width: '23%'}}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          />
          <TextField
            id="filled-multiline-flexible"
            label="Invoice Currency"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="filled"
            margin='normal'
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="filled-multiline-flexible"
            label="Document Type"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="filled"
            margin='normal'
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="filled-multiline-flexible"
            label="Posting ID"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="filled"
            margin='normal'
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="filled-multiline-flexible"
            label="Total Open Amount"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="filled"
            margin='normal'
          />
          <TextField
          id="date"
          label="Baseline Create Date"
          type="date"
          margin='normal'
          defaultValue="2022-5-24"
          style={{width: '23%'}}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="filled-multiline-flexible"
            label="Customer Payment Terms"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="filled"
            margin='normal'
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="filled-multiline-flexible"
            label="Invoice ID"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="filled"
            margin='normal'
          />
          <Button style={{width: '49%', border: '1px solid #2d4250', backgroundColor: '#2d4250', color: 'white'}}>Add</Button>&nbsp;&nbsp;
          <Button style={{width: '49%', border: '1px solid #2d4250', backgroundColor: '#2d4250', color: 'white'}}>Cancel</Button>  
      </Box>
                    </div>
                </Fade>
            </Modal> }
                    
                   
        </Stack> 
                
                <Box id='ser'
                     component="form"
                    sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
           <TextField id="filled-basic" label="Search Customer ID" variant="filled" />
      

      
                </Box>
               
            </div> 
    
           
    
 
            </> 
     
    ); 
    
}