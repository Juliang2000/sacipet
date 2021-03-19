import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import {
  Button,
} from '@material-ui/core';
import clsx from 'clsx';
import StepConnector from '@material-ui/core/StepConnector';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Swal from 'sweetalert2';
import { select_pet_action } from '../../../redux/actions/saciPets';


//redux actions
import { useDispatch } from 'react-redux';


export default function SelectedPetButton({ id_mascota }) {
  // const classes = useStyles();
  const dispatch = useDispatch
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        onCLick={() => alert(id_mascota)}
        variant='contained'
        color='primary'
        size='medium'
        fullWidth
      >
        Adóptame
      </Button>


    </>
  );
}
