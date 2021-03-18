import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// Modal Dialog
import { IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import ShareIcon from '@material-ui/icons/Share';


// Accordion
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

// Tablas
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

// Images
import CardMedia from '@material-ui/core/CardMedia';
import mascota1 from '../../../assets/images/cards/perro_con_peluca.jpg';



export default function PetModalData() {

  return (
    <>
      <div>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </div>

    </>

  );
}
