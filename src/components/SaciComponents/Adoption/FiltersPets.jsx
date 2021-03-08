import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Chip } from "@material-ui/core";


// import filters from '../../../assets/icons/filters/046-pet-shelter.svg'
// import dog from '../../../assets/icons/petype/dog.svg';
// import cat from '../../../assets/icons/petype/cat.svg';
// import hamster from '../../../assets/icons/petype/hamster.svg';

import petFilter from '../../../assets/icons/filters/filters-final.svg';

import petType from '../../../assets/icons/filters/pet-type-final.svg';
import petDog from '../../../assets/icons/filters/dog-final.svg';
import petCat from '../../../assets/icons/filters/cat-final.svg';
import petHamster from '../../../assets/icons/filters/hamster-final.svg';

import petRace from '../../../assets/icons/filters/pet-race-final.svg';
import petRaceDog1 from '../../../assets/icons/filters/pet-race-dog01.svg'
import petRaceDog2 from '../../../assets/icons/filters/pet-race-dog02.svg'
import petRaceDog3 from '../../../assets/icons/filters/pet-race-dog03.svg'
import petRaceDog4 from '../../../assets/icons/filters/pet-race-dog04.svg'
import petRaceDog5 from '../../../assets/icons/filters/pet-race-dog05.svg'

import petSize from '../../../assets/icons/filters/petSize.svg';
import petGender from '../../../assets/icons/filters/petGender.svg';
import petGenderMale from '../../../assets/icons/filters/petGenderMale.svg';
import petGenderFemale from '../../../assets/icons/filters/petGenderFemale.svg';

import petYear from '../../../assets/icons/filters/petYear.svg';


// import Button from '@material-ui/core/Button';

// prueba componente
// import LottiePrueba from './LottiePrueba'
// prueba gitlab

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      // backgroundColor: theme.palette.action.hover,
      backgroundColor: '#c9caca'
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
    userSelect: 'none',
  },
  content: {
    color: theme.palette.text.secondary,
    // borderTopRightRadius: theme.spacing(2),
    // borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({

  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },

  iconSize: {
    width: '40px',
    marginRight: '10px'
  },

  filtersChips: {

    margin: theme.spacing(3),

    '& .MuiChip-deleteIconColorPrimary': {
      color: '#FFF'
    },

    '& .MuiChip-label': {
      color: '#FFF',
    },

    '& .MuiChip-root:hover': {
      backgroundColor: 'red'
    },

    '& .MuiChip-root': {
      marginRight: '5px',
      marginBottom: '5px'
    }

  }
}));



export default function GmailTreeView() {

  const classes = useStyles();

  const lottieFilter = () => {
    return (
      <img src={petFilter} alt="Icon Pet Filter" className={classes.iconSize} />
    )
  }

  const lottiePetType = () => {
    return (
      <img src={petType} alt="Icon Pet Type" className={classes.iconSize} />
    )
  }

  const lottieDog = () => {
    return (
      <img src={petDog} alt="Icon Pet Dog" className={classes.iconSize} />
    )
  }

  const lottieCat = () => {
    return (
      <img src={petCat} alt="Icon Pet Dog" className={classes.iconSize} />
    )
  }

  const lottieHamster = () => {
    return (
      <img src={petHamster} alt="Icon Pet Dog" className={classes.iconSize} />
    )
  }

  const lottiePetRace = () => {
    return (
      <img src={petRace} alt="Icon Pet Race" className={classes.iconSize} />
    )
  }

  const raceDog1 = () => {
    return (
      <img src={petRaceDog1} alt="Icon Pet Race 1" className={classes.iconSize} />
    )
  }

  const raceDog2 = () => {
    return (
      <img src={petRaceDog2} alt="Icon Pet Race 2" className={classes.iconSize} />
    )
  }

  const raceDog3 = () => {
    return (
      <img src={petRaceDog3} alt="Icon Pet Race 3" className={classes.iconSize} />
    )
  }

  const raceDog4 = () => {
    return (
      <img src={petRaceDog4} alt="Icon Pet Race 4" className={classes.iconSize} />
    )
  }

  const raceDog5 = () => {
    return (
      <img src={petRaceDog5} alt="Icon Pet Race 5" className={classes.iconSize} />
    )
  }

  const lottiePetSize = () => {
    return (
      <img src={petSize} alt="Icon Pet Size" className={classes.iconSize} />
    )
  }

  const lottiePetGender = () => {
    return (
      <img src={petGender} alt="Icon Pet Gender" className={classes.iconSize} />
    )
  }

  const lottiePetGenderMale = () => {
    return (
      <img src={petGenderMale} alt="Icon Pet Gender Male" className={classes.iconSize} />
    )
  }

  const lottiePetGenderFemale = () => {
    return (
      <img src={petGenderFemale} alt="Icon Pet Gender Female" className={classes.iconSize} />
    )
  }

  const lottiePetYear = () => {
    return (
      <img src={petYear} alt="Icon Pet Year" className={classes.iconSize} />
    )
  }

  const [filtersDogs, setFiltersDogs] = useState(false);

  const handleDogsAdd = () => {
    setFiltersDogs(true);
  }

  const handleDogsDelete = () => {
    setFiltersDogs(false);
  }

  const [filtersCats, setFiltersCats] = useState(false);

  const handleCatsAdd = () => {
    setFiltersCats(true);
  }

  const handleCatsDelete = () => {
    setFiltersCats(false);
  }

  const [filtersHamsters, setFiltersHamsters] = useState(false);

  const handleHamstersAdd = () => {
    setFiltersHamsters(true);
  }

  const handleHamstersDelete = () => {
    setFiltersHamsters(false);
  }

  return (
    <div>

      {/* <Lottie
    options={{ animationData: dog, ...defaultOptions }}
    height={400}
    width={400}
    autoplay={isStart}
    /> */}

      <div className={classes.filtersChips}>

        {filtersDogs ?
          <Chip
            className="animate__animated animate__fadeInUpBig"
            color="primary"
            label="Perros"
            onDelete={handleDogsDelete}
          />
          : null}

        {filtersCats ?
          <Chip
            className="animate__animated animate__fadeInUpBig"
            color="primary"
            label="Gatos"
            onDelete={handleCatsDelete}
          />
          : null}

        {filtersHamsters ?
          <Chip
            className={"animate__animated animate__fadeInUpBig"}
            color="primary"
            label="Hamsters"
            onDelete={handleHamstersDelete}
          />
          : null}

      </div>

      <TreeView
        className={classes.root}
        defaultExpanded={['1']}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        <StyledTreeItem nodeId="1" labelText="Filtros" labelIcon={lottieFilter} bgColor="#63C132" color="#FFFFFF">
          <StyledTreeItem nodeId="2" labelText="Tipo De Mascota" labelIcon={lottiePetType} >
            <StyledTreeItem
              nodeId="7"
              labelText="Perros"
              labelIcon={lottieDog}
              onClick={handleDogsAdd}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="8"
              labelText="Gatos"
              labelIcon={lottieCat}
              onClick={handleCatsAdd}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="9"
              labelText="Hámsters"
              labelIcon={lottieHamster}
              onClick={handleHamstersAdd}
            // labelInfo="90"
            />
          </StyledTreeItem>
          <StyledTreeItem nodeId="3" labelText="Raza" labelIcon={lottiePetRace} >
            <StyledTreeItem
              nodeId="10"
              labelText="Raza1"
              labelIcon={raceDog1}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="11"
              labelText="Raza2"
              labelIcon={raceDog2}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="12"
              labelText="Raza3"
              labelIcon={raceDog3}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="13"
              labelText="Raza4"
              labelIcon={raceDog4}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="14"
              labelText="Raza5"
              labelIcon={raceDog5}
            // labelInfo="90"
            />
          </StyledTreeItem>
          <StyledTreeItem nodeId="4" labelText="Tamaño" labelIcon={lottiePetSize} >
            <StyledTreeItem
              nodeId="15"
              labelText="Pequeño"
              labelIcon={SupervisorAccountIcon}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="16"
              labelText="Mediano"
              labelIcon={SupervisorAccountIcon}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="17"
              labelText="Grande"
              labelIcon={SupervisorAccountIcon}
            // labelInfo="90"
            />
          </StyledTreeItem>
          <StyledTreeItem nodeId="5" labelText="Género" labelIcon={lottiePetGender} >
            <StyledTreeItem
              nodeId="18"
              labelText="Macho"
              labelIcon={lottiePetGenderMale}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="19"
              labelText="Hembra"
              labelIcon={lottiePetGenderFemale}
            // labelInfo="90"
            />
          </StyledTreeItem>
          <StyledTreeItem nodeId="6" labelText="Edad" labelIcon={lottiePetYear} >
            <StyledTreeItem
              nodeId="20"
              labelText="Joven"
              labelIcon={SupervisorAccountIcon}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="21"
              labelText="Adulto"
              labelIcon={SupervisorAccountIcon}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="22"
              labelText="Viejo"
              labelIcon={SupervisorAccountIcon}
            // labelInfo="90"
            />
          </StyledTreeItem>
        </StyledTreeItem>
      </TreeView>
    </div>
  );
}
