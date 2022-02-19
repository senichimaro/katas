import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container, FormControl, TextField, Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
    // width:'30rem'
  },
  root:{
    display: 'flex',
    // flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    // margin: theme.spacing(1),
    maxWidth:'100%'
  },
  wrapper:{
    width:'30rem'
    // width:'100%'
  }
}));



const FormEl = ({ onSubmit, postData }) => {
  // styles : material-ui
  const classes = useStyles();
  // Form handler
  const { register, handleSubmit } = useForm()
  // const onSubmit = formData => {
  //   console.log("formData",formData);
  // }

  const [ isState, setIsState ] = useState({
    title:'',
    paragraph:''
  });
  // console.log("postData",postData);

  const handleInput = event => {
    const { name, value } = event.target
    setIsState({...isState, [name]:value})
  }

  // if ( postData ) setIsState( postData );
// console.log("length", postData);
useEffect(() => {
  if ( postData ) setIsState( postData );
},[ postData ])

  return (
    <Container className={classes.root} >
      <div className={classes.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate autoComplete="off">

          <FormControl fullWidth className={classes.margin}>

            <TextField
              {...register('title',{required:true})}
              id="standard-basic"
              label="Title"
              siz="medium"
              value={isState.title}
              onChange={handleInput}
            />

            <TextField siz="medium"
            {...register('paragraph',{required:true})}
              id="standard-multiline-flexible"
              label="Paragraph"
              multiline
              minRows={4}
              value={isState.paragraph}
              onChange={handleInput}
            />

          </FormControl>

          <Button type="submit">Submit</Button>

        </form>
      </div>
    </Container>
  );
}

export default FormEl;
