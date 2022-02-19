import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }
//
function getModalStyle() {
  // const top = 50 + rand();
  // const left = 50 + rand();
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  navLink: {
    backgroundColor:theme.palette.common.black,
    textDecoration:'none',
    // width:'5rem'
  },
  navLink: {
    color:theme.palette.common.white,
    textDecoration:'none',
    //
  }
}));

export default function SimpleModal({ isModalOpen, isModalData }) {
  console.log("isModalOpen",isModalOpen);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(isModalOpen);

  // const handleOpen = () => { setOpen(true); };
  // const handleClose = () => { setOpen(false); };


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <SimpleModal />

      <Button color="disabled">
        <Link className={classes.navLink} to="/">
          Back
        </Link>
      </Button>
    </div>
  );

  return (
    <div>
      <Modal
        open={isModalOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
