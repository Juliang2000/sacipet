import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// Modal Dialog
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

// Carousel
import CarouselData from '../AdoptData/CarouselData';

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

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paperContainer: {
    padding: '50px',
  },
  media: {
    height: 450,
    paddingTop: '56.25%', // 16:9
    cursor: 'pointer',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function createData(name, calories, sexo, fat, carbs, protein) {
  return { name, calories, sexo, fat, carbs, protein };
}

const rows = [createData('Pinina', 10, 'Macho', 'Pastor Alemán', 'Perro', 80)];

export default function AlertDialogSlide() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CardMedia
        className={classes.media}
        image={mascota1}
        title="Pinina"
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClickClose}
      >
        <Paper elevation={3} className={classes.paperContainer}>
          <Box display="flex" justifyContent="center">
            <CarouselData />
          </Box>
          <Box display="flex" justifyContent="center" mb={5} my={5}>
            <Typography variant="h4" color="initial">
              Ficha De Mascota
            </Typography>
          </Box>
          <Box mb={5}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                {/* style={{ border: 'blue 7px solid'}} */}
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Edad</TableCell>
                    <TableCell>Sexo</TableCell>
                    <TableCell>Raza</TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Peso&nbsp;(Kg)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.calories}</TableCell>
                      <TableCell>{row.sexo}</TableCell>
                      <TableCell>{row.fat}</TableCell>
                      <TableCell>{row.carbs}</TableCell>
                      <TableCell>{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Vacunas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ol>
                    <li>Vacuna</li>
                    <li>Vacuna</li>
                    <li>Vacuna</li>
                </ol>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Documentación</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Trae Cartilla Documentación</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Observaciones</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Tratarle con mucho cariño <br />
                Es enojón por todo
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Dialog>
    </div>
  );
}
