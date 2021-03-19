/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Chip, Tooltip, Zoom, Box } from '@material-ui/core';

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
import petRaceDog1 from '../../../assets/icons/filters/pet-race-dog01.svg';
import petRaceDog2 from '../../../assets/icons/filters/pet-race-dog02.svg';
import petRaceDog3 from '../../../assets/icons/filters/pet-race-dog03.svg';
import petRaceDog4 from '../../../assets/icons/filters/pet-race-dog04.svg';
import petRaceDog5 from '../../../assets/icons/filters/pet-race-dog05.svg';

import petSize from '../../../assets/icons/filters/pet-size-final.svg';
import petSmall from '../../../assets/icons/filters/small-final.svg';
import petMedium from '../../../assets/icons/filters/medium-final.svg';
import petBig from '../../../assets/icons/filters/big-final.svg';

import petGender from '../../../assets/icons/filters/pet-gender-final.svg';
import petMale from '../../../assets/icons/filters/male-final.svg';
import petFemale from '../../../assets/icons/filters/female-final.svg';

import petYear from '../../../assets/icons/filters/pet-year-final.svg';
import petYoung from '../../../assets/icons/filters/young-final.svg';
import petAdult from '../../../assets/icons/filters/adult-final.svg';
import petOld from '../../../assets/icons/filters/old-final.svg';

// Dispatch Redux
import { useDispatch } from 'react-redux';

// Redux Actions
import { get_saci_pets_action } from '../../../redux/actions/saciPets';

// import Button from '@material-ui/core/Button';

// prueba componente
// import LottiePrueba from './LottiePrueba'
// prueba gitlab

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      // backgroundColor: theme.palette.action.hover,
      backgroundColor: '#c9caca',
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
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

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
    marginRight: '10px',
  },
  iconSize2: {
    width: '60px',
    marginRight: '10px',
  },

  CustomTooltip: {
    backgroundColor: '#63C132',
    fontSize: '12px',
  },

  filtersChips: {
    margin: theme.spacing(3),

    '& .MuiChip-deleteIconColorPrimary': {
      color: '#FFF',
    },

    '& .MuiChip-label': {
      color: '#FFF',
    },

    '& .MuiChip-root:hover': {
      backgroundColor: 'red',
    },

    '& .MuiChip-root': {
      marginRight: '5px',
      marginBottom: '5px',
    },
  },
}));

export default function GmailTreeView() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const lottieFilter = () => {
    return (
      <img src={petFilter} alt="Icon Pet Filter" className={classes.iconSize} />
    );
  };

  const lottiePetType = () => {
    return (
      <img src={petType} alt="Icon Pet Type" className={classes.iconSize} />
    );
  };

  const lottieDog = () => {
    return <img src={petDog} alt="Icon Pet Dog" className={classes.iconSize} />;
  };

  const lottieCat = () => {
    return <img src={petCat} alt="Icon Pet Dog" className={classes.iconSize} />;
  };

  const lottieHamster = () => {
    return (
      <img src={petHamster} alt="Icon Pet Dog" className={classes.iconSize} />
    );
  };

  const lottiePetRace = () => {
    return (
      <img src={petRace} alt="Icon Pet Race" className={classes.iconSize} />
    );
  };

  const raceDog1 = () => {
    return (
      <img
        src={petRaceDog1}
        alt="Icon Pet Race 1"
        className={classes.iconSize}
      />
    );
  };

  const raceDog2 = () => {
    return (
      <img
        src={petRaceDog2}
        alt="Icon Pet Race 2"
        className={classes.iconSize}
      />
    );
  };

  const raceDog3 = () => {
    return (
      <img
        src={petRaceDog3}
        alt="Icon Pet Race 3"
        className={classes.iconSize}
      />
    );
  };

  const raceDog4 = () => {
    return (
      <img
        src={petRaceDog4}
        alt="Icon Pet Race 4"
        className={classes.iconSize}
      />
    );
  };

  const raceDog5 = () => {
    return (
      <img
        src={petRaceDog5}
        alt="Icon Pet Race 5"
        className={classes.iconSize}
      />
    );
  };
  ///////////////////////////////////////////////////////
  const lottiePetSize = () => {
    return (
      <img src={petSize} alt="Icon Pet Size" className={classes.iconSize2} />
    );
  };

  const lottieSmall = () => {
    return (
      <img src={petSmall} alt="Icon Pet Small" className={classes.iconSize} />
    );
  };

  const lottieMedium = () => {
    return (
      <img src={petMedium} alt="Icon Pet Medium" className={classes.iconSize} />
    );
  };

  const lottieBig = () => {
    return <img src={petBig} alt="Icon Pet Big" className={classes.iconSize} />;
  };

  const lottiePetGender = () => {
    return (
      <img src={petGender} alt="Icon Pet Gender" className={classes.iconSize} />
    );
  };

  const lottieMale = () => {
    return (
      <img
        src={petMale}
        alt="Icon Pet Gender Male"
        className={classes.iconSize}
      />
    );
  };

  const lottieFemale = () => {
    return (
      <img
        src={petFemale}
        alt="Icon Pet Gender Female"
        className={classes.iconSize}
      />
    );
  };

  const lottiePetYear = () => {
    return (
      <img src={petYear} alt="Icon Pet Year" className={classes.iconSize} />
    );
  };

  const lottieYoung = () => {
    return (
      <img src={petYoung} alt="Icon Pet Young" className={classes.iconSize} />
    );
  };

  const lottieAdult = () => {
    return (
      <img src={petAdult} alt="Icon Pet Adult" className={classes.iconSize} />
    );
  };

  const lottieOld = () => {
    return <img src={petOld} alt="Icon Pet Old" className={classes.iconSize} />;
  };

  /////////////////////////////////////////////////////////////////////////
  // tipos de mascota//

  // gatos
  const [filtersCats, setFiltersCats] = useState(false);
  const [filtersCatsValidate, setFiltersCatsValidate] = useState(false);

  const handleCatsAdd = () => {
    setFiltersCats(true);
  };

  const handleCatsDelete = () => {
    setFiltersCatsValidate(true);
    setTimeout(() => {
      setFiltersCats(false);
      setFiltersCatsValidate(false);
    }, 1000);
  };

  // perros
  const [filtersDogs, setFiltersDogs] = useState(false);
  const [filtersDogsValidate, setFiltersDogsValidate] = useState(false);

  const handleDogsAdd = () => {
    setFiltersDogs(true);
  };

  const handleDogsDelete = () => {
    setFiltersDogsValidate(true);
    setTimeout(() => {
      setFiltersDogs(false);
      setFiltersDogsValidate(false);
    }, 1000);
  };

  // hamsters
  const [filtersHamsters, setFiltersHamsters] = useState(false);
  const [filtersHamstersValidate, setFiltersHamsterValidate] = useState(false);

  const handleHamstersAdd = () => {
    setFiltersHamsters(true);
  };

  const handleHamstersDelete = () => {
    setFiltersHamsterValidate(true);
    setTimeout(() => {
      setFiltersHamsterValidate(false);
      setFiltersHamsters(false);
    }, 1000);
  };

  /////////////////////////////////////////////////////////////////////////
  // tamaños //

  // mequeño
  const [filtersSmalls, setFiltersSmalls] = useState(false);
  const [filtersSmallsValidate, setFiltersSmallsValidate] = useState(false);

  const handleSmallsAdd = () => {
    setFiltersSmalls(true);
  };

  const handleSmallsDelete = () => {
    setFiltersSmallsValidate(true);
    setTimeout(() => {
      setFiltersSmallsValidate(false);
      setFiltersSmalls(false);
    }, 1000);
  };

  // mediano
  const [filtersMediums, setFiltersMediums] = useState(false);
  const [filtersMediumsValidate, setFiltersMediumsValidate] = useState(false);

  const handleMediumsAdd = () => {
    setFiltersMediums(true);
  };

  const handleMediumsDelete = () => {
    setFiltersMediumsValidate(true);
    setTimeout(() => {
      setFiltersMediumsValidate(false);
      setFiltersMediums(false);
    }, 1000);
  };

  // grande
  const [filtersBigs, setFiltersBigs] = useState(false);
  const [filtersBigsValidate, setFiltersBigsValidate] = useState(false);

  const handleBigsAdd = () => {
    setFiltersBigs(true);
  };

  const handleBigsDelete = () => {
    setFiltersBigsValidate(true);
    setTimeout(() => {
      setFiltersBigsValidate(false);
      setFiltersBigs(false);
    }, 1000);
  };

  /////////////////////////////////////////////////////////////////////////
  //genero

  //machos
  const [filtersMales, setFiltersMales] = useState(false);
  const [filtersMalesValidate, setFiltersMalesValidate] = useState(false);

  const handleMalesAdd = () => {
    setFiltersMales(true);
  };

  const handleMalesDelete = () => {
    setFiltersMalesValidate(true);
    setTimeout(() => {
      setFiltersMalesValidate(false);
      setFiltersMales(false);
    }, 1000);
  };

  //hembras
  const [filtersFemales, setFiltersFemales] = useState(false);
  const [filtersFemalesValidate, setFiltersFemalesValidate] = useState(false);

  const handleFemalesAdd = () => {
    setFiltersFemales(true);
  };

  const handleFemalesDelete = () => {
    setFiltersFemalesValidate(true);
    setTimeout(() => {
      setFiltersFemalesValidate(false);
      setFiltersFemales(false);
    }, 1000);
  };

  /////////////////////////////////////////////////////////////////////////

  //genero

  // jovenes
  const [filtersYoungs, setFiltersYoungs] = useState(false);
  const [filtersYoungsValidate, setFiltersYoungsValidate] = useState(false);

  const handleYoungsAdd = () => {
    setFiltersYoungs(true);
  };

  const handleYoungsDelete = () => {
    setFiltersYoungsValidate(true);
    setTimeout(() => {
      setFiltersYoungsValidate(false);
      setFiltersYoungs(false);
    }, 1000);
  };

  // adultos
  const [filtersAdults, setFiltersAdults] = useState(false);
  const [filtersAdultsValidate, setFiltersAdultsValidate] = useState(false);
  const handleAdultsAdd = () => {};
  const handleAdultsDelete = () => {};

  //viejos
  const [filtersOlds, setFiltersOlds] = useState(false);
  const [filtersOldsValidate, setFiltersOldsValidate] = useState(false);
  const handleOldsAdd = () => {};
  const handleOldsDelete = () => {};

  /////////////////////////////////////////////////////////////////////////

  // const { mascotas } = useSelector(state => state.saciPets);
  // const harold = mascotas.filter(pets => pets.id_tipo_mascota === "1")
  // const [filters, setFilters] = useState({
  //   filtro: mascotas.filter(pets => pets.id_tipo_mascota === "1")
  // })

  let filtersObjs = {
    id_tipo_mascota: false,
    cats: true,
    dogs: true,
    hamsters: true,
    smalls: true,
    mediums: true,
    bigs: true,
    males: true,
    females: true,
  };

  const {
    id_tipo_mascota,
    cats,
    dogs,
    hamsters,
    smalls,
    mediums,
    bigs,
    males,
    females,
  } = filtersObjs;

  // filtro vacio
  const [filtersInitial] = useState({
    id_tipo_mascota,
  });

  // filtro gatos
  const [petsFiltersCats] = useState({
    cats,
  });

  // filtro perros
  const [petsFiltersDogs] = useState({
    dogs,
  });

  // filtro hamsters
  const [petsFiltersHamsters] = useState({
    hamsters,
  });

  // filtro gatos y perros
  const [petsFiltersCatsDogs] = useState({
    cats,
    dogs,
  });

  // filtro gatos y hamsters
  const [petsFiltersCatsHamsters] = useState({
    cats,
    hamsters,
  });

  // filtro perros y hamsters
  const [petsFiltersDogsHamsters] = useState({
    dogs,
    hamsters,
  });

  // filtro perros, gatos y hamsters
  const [petsFiltersCatsDogsHamsters] = useState({
    cats,
    dogs,
    hamsters,
  });

  // filtros pequeños
  const [petsFiltersSmalls] = useState({
    smalls,
  });

  // filtro medianos
  const [petsFiltersMediums] = useState({
    mediums,
  });

  // filtro grandes
  const [petsFiltersBigs] = useState({
    bigs,
  });

  // filtro pequeños y medianos
  const [petsFiltersSmallsMediums] = useState({
    smalls,
    mediums,
  });

  //filtro pequeños y grandes
  const [petsFiltersSmallsBigs] = useState({
    smalls,
    bigs,
  });

  //filtro grandes y medianos
  const [petsFiltersBigsMediums] = useState({
    bigs,
    mediums,
  });

  //filtro pequeños, medianos, grandes
  const [petsFiltersSmallsMediumsBigs] = useState({
    smalls,
    mediums,
    bigs,
  });

  //filtro gatos, pequeños
  const [petsFiltersCatsSmalls] = useState({
    cats,
    smalls,
  });

  //filtro gatos, medianos
  const [petsFiltersCatsMediums] = useState({
    cats,
    mediums,
  });

  //filtro gatos, grandes
  const [petsFiltersCatsBigs] = useState({
    cats,
    bigs,
  });

  //filtro perros, pequeños
  const [petsFiltersDogsSmalls] = useState({
    dogs,
    smalls,
  });

  //filtro perros, medianos
  const [petsFiltersDogsMediums] = useState({
    dogs,
    mediums,
  });

  //filtro perros, grandes
  const [petsFiltersDogsBigs] = useState({
    dogs,
    bigs,
  });

  //filtro hamsters tamaños no

  //filtro gatos, pequeños, medianos
  const [petsFiltersCatsSmallsMediums] = useState({
    cats,
    smalls,
    mediums,
  });

  //filtro gatos, pequeños, grandes
  const [petsFiltersCatsSmallsBigs] = useState({
    cats,
    smalls,
    bigs,
  });

  //filtro gatos, medianos, grandes
  const [petsFiltersCatsMediumsBigs] = useState({
    cats,
    mediums,
    bigs,
  });

  //filtro perros, pequeños, medianos
  const [petsFiltersDogsSmallsMediums] = useState({
    dogs,
    smalls,
    mediums,
  });

  //filtro perros, pequeños, grandes
  const [petsFiltersDogsSmallsBigs] = useState({
    dogs,
    smalls,
    bigs,
  });

  //filtro perros, medianos, grandes
  const [petsFiltersDogsMediumsBigs] = useState({
    dogs,
    mediums,
    bigs,
  });

  //filtro gatos, perros, pequeños
  const [petsFiltersCatsDogsSmalls] = useState({
    cats,
    dogs,
    smalls,
  });

  //filtro gatos, perros, medianos
  const [petsFiltersCatsDogsMediums] = useState({
    cats,
    dogs,
    mediums,
  });

  //filtro gatos, perros, grandes
  const [petsFiltersCatsDogsBigs] = useState({
    cats,
    dogs,
    bigs,
  });

  //filtro gatos, perros, pequeños, medianos
  const [petsFiltersCatsDogsSmallsMediums] = useState({
    cats,
    dogs,
    smalls,
    mediums,
  });

  //filtro gatos, perros, pequeños, grandes
  const [petsFiltersCatsDogsSmallsBigs] = useState({
    cats,
    dogs,
    smalls,
    bigs,
  });

  //filtro gatos, perros, medianos, grandes
  const [petsFiltersCatsDogsMediumsBigs] = useState({
    cats,
    dogs,
    mediums,
    bigs,
  });

  //filtro gatos, pequeños, medianos, grandes
  const [petsFiltersCatsSmallsMediumsBigs] = useState({
    cats,
    smalls,
    mediums,
    bigs,
  });

  //filtro perros, pequeños, medianos, grandes
  const [petsFiltersDogsSmallsMediumsBigs] = useState({
    dogs,
    smalls,
    mediums,
    bigs,
  });

  // filtros gatos, perros, pequeños, medianos, grandes
  const [petsFiltersCatsDogsSmallsMediumsBigs] = useState({
    cats,
    dogs,
    smalls,
    mediums,
    bigs,
  });

  // filtros machos
  const [petsFiltersMales] = useState({
    males,
  });

  // filtros hembras
  const [petsFiltersFemales] = useState({
    females,
  });

  // filtros machos, hembras
  const [petsFiltersMalesFemales] = useState({
    males,
    females,
  });

  // filtros, gatos, machos
  const [petsFiltersCatsMales] = useState({
    cats,
    males,
  });

  // filtros, gatos, hembras
  const [petsFiltersCatsFemales] = useState({
    cats,
    females,
  });

  // filtros, perros, machos
  const [petsFiltersDogsMales] = useState({
    dogs,
    males,
  });

  // filtros, perros, hembras
  const [petsFiltersDogsFemales] = useState({
    dogs,
    females,
  });

  // filtros, hamsters, machos
  const [petsFiltersHamstersMales] = useState({
    hamsters,
    males,
  });

  // filtros, hamsters, hembras
  const [petsFiltersHamstersFemales] = useState({
    hamsters,
    females,
  });

  // filtros, gatos, machos, hembras
  const [petsFiltersCatsMalesFemales] = useState({
    cats,
    males,
    females,
  });

  // filtros, perros, machos, hembras
  const [petsFiltersDogsMalesFemales] = useState({
    dogs,
    males,
    females,
  });

  // filtros, hamsters, machos, hembras
  const [petsFiltersHamstersMalesFemales] = useState({
    hamsters,
    males,
    females,
  });

  // filtros, gatos, perros, machos
  const [petsFiltersCatsDogsMales] = useState({
    cats,
    dogs,
    males,
  });

  // filtros, gatos, perros, hembras
  const [petsFiltersCatsDogsFemales] = useState({
    cats,
    dogs,
    females,
  });

  // filtros, gatos, hamsters, machos
  const [petsFiltersCatsHamstersMales] = useState({
    cats,
    hamsters,
    males,
  });

  // filtros, gatos, hamsters, hembras
  const [petsFiltersCatsHamstersFemales] = useState({
    cats,
    hamsters,
    females,
  });

  // filtros, perros, hamsters, machos
  const [petsFiltersDogsHamstersMales] = useState({
    dogs,
    hamsters,
    males,
  });

  // filtros, perros, hamsters, hembras
  const [petsFiltersDogsHamstersFemales] = useState({
    dogs,
    hamsters,
    females,
  });

  // gatos, perros, machos, hembras
  const [petsFiltersCatsDogsMalesFemales] = useState({
    cats,
    dogs,
    males,
    females,
  });

  // gatos, hamsters, machos, hembras
  const [petsFiltersCatsHamstersMalesFemales] = useState({
    cats,
    hamsters,
    males,
    females,
  });

  // perros, hamsters, machos, hembras
  const [petsFiltersDogsHamstersMalesFemales] = useState({
    dogs,
    hamsters,
    males,
    females,
  });

  // filtros, gatos, perros, hamsters, machos
  const [petsFiltersCatsDogsHamstersMales] = useState({
    cats,
    dogs,
    hamsters,
    males,
  });

  // filtros, gatos, perros, hamsters, hembras
  const [petsFiltersCatsDogsHamstersFemales] = useState({
    cats,
    dogs,
    hamsters,
    females,
  });

  // filtros, gatos, perros, hamsters, machos, hembras
  const [petsFiltersCatsDogsHamstersMalesFemales] = useState({
    cats,
    dogs,
    hamsters,
    males,
    females,
  });

  // filtros, gatos, pequeños, machos
  const [petsFiltersCatsSmallsMales] = useState({
    cats,
    smalls,
    males,
  });

  // filtros, gatos, pequeños, hembras
  const [petsFiltersCatsSmallsFemales] = useState({
    cats,
    smalls,
    females,
  });

  // filtros, perros, pequeños, machos
  const [petsFiltersDogsSmallsMales] = useState({
    dogs,
    smalls,
    males,
  });

  // filtros, perros, pequeños, hembras
  const [petsFiltersDogsSmallsFemales] = useState({
    dogs,
    smalls,
    females,
  });
  // filtros hamsters no tienen tamaño
  // filtros hamsters no tienen tamaño

  // filtros, gatos, medianos, machos
  const [petsFiltersCatsMediumsMales] = useState({
    cats,
    mediums,
    males,
  });

  // filtros, gatos, medianos, hembras
  const [petsFiltersCatsMediumsFemales] = useState({
    cats,
    mediums,
    females,
  });

  // filtros, perros, medianos, machos
  const [petsFiltersDogsMediumsMales] = useState({
    dogs,
    mediums,
    males,
  });

  // filtros, perros, medianos, hembras
  const [petsFiltersDogsMediumsFemales] = useState({
    dogs,
    mediums,
    females,
  });
  // filtros hamsters no tienen tamaño
  // filtros hamsters no tienen tamaño

  // filtros, gatos, grandes, machos
  const [petsFiltersCatsBigsMales] = useState({
    cats,
    bigs,
    males,
  });

  // filtros, gatos, grandes, hembras
  const [petsFiltersCatsBigsFemales] = useState({
    cats,
    bigs,
    females,
  });

  // filtros, perros, grandes, machos
  const [petsFiltersDogsBigsMales] = useState({
    dogs,
    bigs,
    males,
  });

  // filtros, perros, grandes, hembras
  const [petsFiltersDogsBigsFemales] = useState({
    dogs,
    bigs,
    females,
  });

  // filtros hamsters no tienen tamaño
  // filtros hamsters no tienen tamaño

  // filtros gatos, pequeños, machos, hembras
  const [petsFiltersCatsSmallsMalesFemales] = useState({
    cats,
    smalls,
    males,
    females,
  });

  // filtros gatos, medianos, machos, hembras
  const [petsFiltersCatsMediumsMalesFemales] = useState({
    cats,
    mediums,
    males,
    females,
  });

  // filtros gatos, grandes, machos, hembras
  const [petsFiltersCatsBigsMalesFemales] = useState({
    cats,
    bigs,
    males,
    females,
  });

  // filtros perros, pequeños, machos, hembras
  const [petsFiltersDogsSmallsMalesFemales] = useState({
    dogs,
    smalls,
    males,
    females,
  });

  // filtros perros, medianos, machos, hembras
  const [petsFiltersDogsMediumsMalesFemales] = useState({
    dogs,
    mediums,
    males,
    females,
  });

  // filtros perros, grandes, machos, hembras
  const [petsFiltersDogsBigsMalesFemales] = useState({
    dogs,
    bigs,
    males,
    females,
  });

  // filtros gatos, perros, pequeños, machos
  const [petsFiltersCatsDogsSmallsMales] = useState({
    cats,
    dogs,
    smalls,
    males,
  });

  // filtros gatos, perros, pequeños, hembras
  const [petsFiltersCatsDogsSmallsFemales] = useState({
    cats,
    dogs,
    smalls,
    females,
  });

  // filtros gatos, perros, medianos, machos
  const [petsFiltersCatsDogsMediumsMales] = useState({
    cats,
    dogs,
    mediums,
    males,
  });

  // gatos, perros, medianos, hembras
  const [petsFiltersCatsDogsMediumsFemales] = useState({
    cats,
    dogs,
    mediums,
    females,
  });

  // filtros gatos, perros, grandes, machos
  const [petsFiltersCatsDogsBigsMales] = useState({
    cats,
    dogs,
    bigs,
    males,
  });

  // filtros gatos, perros, grandes, hembras
  const [petsFiltersCatsDogsBigsFemales] = useState({
    cats,
    dogs,
    bigs,
    females,
  });

  // filtros gatos, perros, pequeños, machos, hembras
  const [petsFiltersCatsDogsSmallsMalesFemales] = useState({
    cats,
    dogs,
    smalls,
    males,
    females,
  });

  // filtros gatos, perros, medianos, machos, hembras
  const [petsFiltersCatsDogsMediumsMalesFemales] = useState({
    cats,
    dogs,
    mediums,
    males,
    females,
  });

  // filtros gatos, perros, grandes, machos, hembras
  const [petsFiltersCatsDogsBigsMalesFemales] = useState({
    cats,
    dogs,
    bigs,
    males,
    females,
  });

  // filtros pequeños, machos
  const [petsFiltersSmallsMales] = useState({
    smalls,
    males,
  });

  // filtros pequeños, hembras
  const [petsFiltersSmallsFemales] = useState({
    smalls,
    females,
  });

  // filtros pequeños, machos, hembras
  const [petsFiltersSmallsMalesFemales] = useState({
    smalls,
    males,
    females,
  });

  // filtros medianos, machos
  const [petsFiltersMediumsMales] = useState({
    mediums,
    males,
  });

  // filtros medianos, hembras
  const [petsFiltersMediumsFemales] = useState({
    mediums,
    females,
  });

  // filtros medianos, machos, hembras
  const [petsFiltersMediumsMalesFemales] = useState({
    mediums,
    males,
    females,
  });

  // filtros grandes, machos
  const [petsFiltersBigsMales] = useState({
    bigs,
    males,
  });

  // filtros grandes, hembras
  const [petsFiltersBigsFemales] = useState({
    bigs,
    females,
  });

  // filtros grandes, machos, hembras
  const [petsFiltersBigsMalesFemales] = useState({
    bigs,
    males,
    females,
  });

  // filtros pequeños, medianos, machos
  const [petsFiltersSmallsMediumsMales] = useState({
    smalls,
    mediums,
    males,
  });

  // filtros pequeños, medianos, hembras
  const [petsFiltersSmallsMediumsFemales] = useState({
    smalls,
    mediums,
    females,
  });

  // filtros pequeños, medianos, machos, hembras
  const [petsFiltersSmallsMediumsMalesFemales] = useState({
    smalls,
    mediums,
    males,
    females,
  });

  // filtros pequeños, grandes, machos
  const [petsFiltersSmallsBigsMales] = useState({
    smalls,
    bigs,
    males,
  });

  // filtros pequeños, grandes, hembras
  const [petsFiltersSmallsBigsFemales] = useState({
    smalls,
    bigs,
    females,
  });

  // filtros pequeños, grandes, machos, hembras
  const [petsFiltersSmallsBigsMalesFemales] = useState({
    smalls,
    bigs,
    males,
    females,
  });

  // filtros medianos, grandes, machos
  const [petsFiltersMediumsBigsMales] = useState({
    mediums,
    bigs,
    males,
  });

  // filtros medianos, grandes, hembras
  const [petsFiltersMediumsBigsFemales] = useState({
    mediums,
    bigs,
    females,
  });

  // filtros medianos, grandes, machos, hembras
  const [petsFiltersMediumsBigsMalesFemales] = useState({
    mediums,
    bigs,
    males,
    females,
  });

  // filtros pequeños, medianos, grandes, machos
  const [petsFiltersSmallsMediumsBigsMales] = useState({
    smalls,
    mediums,
    bigs,
    males,
  });

  // filtros pequeños, medianos, grandes, hembras
  const [petsFiltersSmallsMediumsBigsFemales] = useState({
    smalls,
    mediums,
    bigs,
    females,
  });

  // filtros pequeños, medianos, grandes, machos, hembras
  const [petsFiltersSmallsMediumsBigsMalesFemales] = useState({
    smalls,
    mediums,
    bigs,
    males,
    females,
  });

  // filtros gatos, pequeños, medianos, machos
  const [petsFiltersCatsSmallsMediumsMales] = useState({
    cats,
    smalls,
    mediums,
    males,
  });

  // filtros gatos, pequeños, medianos, hembras
  const [petsFiltersCatsSmallsMediumsFemales] = useState({
    cats,
    smalls,
    mediums,
    females,
  });

  // filtros gatos, pequeños, medianos, machos, hembras
  const [petsFiltersCatsSmallsMediumsMalesFemales] = useState({
    cats,
    smalls,
    mediums,
    males,
    females,
  });

  // filtros gatos, pequeños, grandes, machos
  const [petsFiltersCatsSmallsBigsMales] = useState({
    cats,
    smalls,
    bigs,
    males,
  });

  // filtros gatos, pequeños, grandes, hembras
  const [petsFiltersCatsSmallsBigsFemales] = useState({
    cats,
    smalls,
    bigs,
    females,
  });

  // filtros gatos, pequeños, grandes, machos, hembras
  const [petsFiltersCatsSmallsBigsMalesFemales] = useState({
    cats,
    smalls,
    bigs,
    males,
    females,
  });

  // filtros gatos, medianos, grandes, machos
  const [petsFiltersCatsMediumsBigsMales] = useState({
    cats,
    mediums,
    bigs,
    males,
  });

  // filtros gatos, medianos, grandes, hembras
  const [petsFiltersCatsMediumsBigsFemales] = useState({
    cats,
    mediums,
    bigs,
    females,
  });

  // filtros gatos, medianos, grandes, machos, hembras
  const [petsFiltersCatsMediumsBigsMalesFemales] = useState({
    cats,
    mediums,
    bigs,
    males,
    females,
  });

  // filtros perros, pequeños, medianos, machos
  const [petsFiltersDogsSmallsMediumsMales] = useState({
    dogs,
    smalls,
    mediums,
    males,
  });

  // filtros perros, pequeños, medianos, hembras
  const [petsFiltersDogsSmallsMediumsFemales] = useState({
    dogs,
    smalls,
    mediums,
    females,
  });

  // filtros perros, pequeños, medianos, machos, hembras
  const [petsFiltersDogsSmallsMediumsMalesFemales] = useState({
    dogs,
    smalls,
    mediums,
    males,
    females,
  });

  // filtros perros, pequeños, grandes, machos
  const [petsFiltersDogsSmallsBigsMales] = useState({
    dogs,
    smalls,
    bigs,
    males,
  });

  // filtros perros, pequeños, grandes, hembras
  const [petsFiltersDogsSmallsBigsFemales] = useState({
    dogs,
    smalls,
    bigs,
    females,
  });

  // filtros perros, pequeños, grandes, machos, hembras
  const [petsFiltersDogsSmallsBigsMalesFemales] = useState({
    dogs,
    smalls,
    bigs,
    males,
    females,
  });

  // filtros perros, medianos, grandes, machos
  const [petsFiltersDogsMediumsBigsMales] = useState({
    dogs,
    mediums,
    bigs,
    males,
  });

  // filtros perros, medianos, grandes, hembras
  const [petsFiltersDogsMediumsBigsFemales] = useState({
    dogs,
    mediums,
    bigs,
    females,
  });

  // filtros perros, medianos, grandes, machos, hembras
  const [petsFiltersDogsMediumsBigsMalesFemales] = useState({
    dogs,
    mediums,
    bigs,
    males,
    females,
  });

  // filtros gatos, perros, pequeños, medianos, machos
  const [petsFiltersCatsDogsSmallsMediumsMales] = useState({
    cats,
    dogs,
    smalls,
    mediums,
    males,
  });

  // filtros gatos, perros, pequeños, medianos, hembras
  const [petsFiltersCatsDogsSmallsMediumsFemales] = useState({
    cats,
    dogs,
    smalls,
    mediums,
    females,
  });

  // filtros gatos, perros, pequeños, medianos, machos, hembras
  const [petsFiltersCatsDogsSmallsMediumsMalesFemales] = useState({
    cats,
    dogs,
    smalls,
    mediums,
    males,
    females,
  });

  // filtros gatos, perros, pequeños, grandes, machos
  const [petsFiltersCatsDogsSmallsBigsMales] = useState({
    cats,
    dogs,
    smalls,
    bigs,
    males,
  });

  // filtros gatos, perros, pequeños, grandes, hembras
  const [petsFiltersCatsDogsSmallsBigsFemales] = useState({
    cats,
    dogs,
    smalls,
    bigs,
    females,
  });

  // filtros gatos, perros, pequeños, grandes, machos, hembras
  const [petsFiltersCatsDogsSmallsBigsMalesFemales] = useState({
    cats,
    dogs,
    smalls,
    bigs,
    males,
    females,
  });

  // filtros gatos, perros, medianos, grandes, machos
  const [petsFiltersCatsDogsMediumsBigsMales] = useState({
    cats,
    dogs,
    mediums,
    bigs,
    males,
  });

  // filtros gatos, perros, medianos, grandes, hembras
  const [petsFiltersCatsDogsMediumsBigsFemales] = useState({
    cats,
    dogs,
    mediums,
    bigs,
    females,
  });

  // filtros gatos, perros, medianos, grandes, machos, hembras
  const [petsFiltersCatsDogsMediumsBigsMalesFemales] = useState({
    cats,
    dogs,
    mediums,
    bigs,
    males,
    females,
  });

  // filtros, gatos, perros, pequeños, medianos, grandes, machos
  const [petsFiltersCatsDogsSmallsMediumsBigsMales] = useState({
    cats,
    dogs,
    smalls,
    mediums,
    bigs,
    males,
  });

  // filtros, gatos, perros, pequeños, medianos, grandes, hembras
  const [petsFiltersCatsDogsSmallsMediumsBigsFemales] = useState({
    cats,
    dogs,
    smalls,
    mediums,
    bigs,
    females,
  });

  // filtros, gatos, perros, pequeños, medianos, grandes, machos, hembras
  const [petsFiltersCatsDogsSmallsMediumsBigsMalesFemales] = useState({
    cats,
    dogs,
    smalls,
    mediums,
    bigs,
    males,
    females,
  });

  const filtersDeps = [
    filtersCats,
    filtersDogs,
    filtersHamsters,
    filtersSmalls,
    filtersMediums,
    filtersBigs,
    filtersMales,
    filtersFemales,
  ];

  useEffect(() => {
    // filtro vacio
    if (
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(filtersInitial));
    }

    // gatos
    if (
      filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCats));
    }

    // perros
    if (
      filtersDogs &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogs));
    }

    // hamsters
    if (
      filtersHamsters &&
      !filtersCats &&
      !filtersDogs &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersHamsters));
    }

    // gatos y perros
    if (
      filtersCats &&
      filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogs));
    }

    // gatos y hamsters
    if (
      filtersCats &&
      filtersHamsters &&
      !filtersDogs &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsHamsters));
    }

    // perros y hamsters
    if (
      filtersDogs &&
      filtersHamsters &&
      !filtersCats &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsHamsters));
    }

    // gatos, perros y hamsters
    if (
      filtersCats &&
      filtersDogs &&
      filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsHamsters));
    }

    ///////////// tamaños /////////////

    // pequeño
    if (
      filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmalls));
    }

    // mediano
    if (
      filtersMediums &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersMediums));
    }

    // grande
    if (
      filtersBigs &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersBigs));
    }

    // pequeño y mediano
    if (
      filtersSmalls &&
      filtersMediums &&
      !filtersBigs &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsMediums));
    }

    // pequeño y grande
    if (
      filtersSmalls &&
      filtersBigs &&
      !filtersMediums &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsBigs));
    }

    // grande y mediano
    if (
      filtersBigs &&
      filtersMediums &&
      !filtersSmalls &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersBigsMediums));
    }

    // pequeño, mediano y grande
    if (
      filtersSmalls &&
      filtersMediums &&
      filtersBigs &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsMediumsBigs));
    }

    /////////////////////// tamaños por mascota ///////////////////////

    // gatos pequeños
    if (
      filtersCats &&
      filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmalls));
    }

    // gatos medianos
    if (
      filtersCats &&
      filtersMediums &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsMediums));
    }

    //gatos grandes
    if (
      filtersCats &&
      filtersBigs &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsBigs));
    }

    // perros pequeños
    if (
      filtersDogs &&
      filtersSmalls &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmalls));
    }

    // perros medianos
    if (
      filtersDogs &&
      filtersMediums &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsMediums));
    }

    // perros grandes
    if (
      filtersDogs &&
      filtersBigs &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsBigs));
    }

    // hamsters no tienen tamaño

    // gatos, pequeños, medianos
    if (
      filtersCats &&
      filtersSmalls &&
      filtersMediums &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsMediums));
    }

    // gatos, pequeños, grandes
    if (
      filtersCats &&
      filtersSmalls &&
      filtersBigs &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsBigs));
    }

    // gatos, medianos, grandes
    if (
      filtersCats &&
      filtersMediums &&
      filtersBigs &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsMediumsBigs));
    }

    // perros, pequeños, medianos
    if (
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsMediums));
    }

    // perros, pequeños, grandes
    if (
      filtersDogs &&
      filtersSmalls &&
      filtersBigs &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsBigs));
    }

    // perros, medianos, grandes
    if (
      filtersDogs &&
      filtersMediums &&
      filtersBigs &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsMediumsBigs));
    }

    // gatos y perros, pequeños
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmalls));
    }

    // gatos y perros, medianos
    if (
      filtersCats &&
      filtersDogs &&
      filtersMediums &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMediums));
    }

    // gatos y perros, grandes
    if (
      filtersCats &&
      filtersDogs &&
      filtersBigs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsBigs));
    }

    // gatos y perros, pequeños, medianos
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      !filtersHamsters &&
      !filtersBigs &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsMediums));
    }

    // gatos y perros, pequeños, grandes
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersBigs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsBigs));
    }

    // gatos y perros, medianos, grandes
    if (
      filtersCats &&
      filtersDogs &&
      filtersMediums &&
      filtersBigs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMediumsBigs));
    }

    // gatos, pequeños, medianos, grandes
    if (
      filtersCats &&
      filtersSmalls &&
      filtersMediums &&
      filtersBigs &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsMediumsBigs));
    }

    // perros, pequeños, medianos, grandes
    if (
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      filtersBigs &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsMediumsBigs));
    }

    // gatos, perros, pequeños, medianos, grandes
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      filtersBigs &&
      !filtersHamsters &&
      !filtersMales &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsMediumsBigs));
    }

    // machos
    if (
      filtersMales &&
      !filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersMales));
    }

    // hembras

    if (
      filtersFemales &&
      !filtersMales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersFemales));
    }

    // machos, hembras

    if (
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersMalesFemales));
    }

    // gatos, machos

    if (
      filtersCats &&
      filtersMales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsMales));
    }

    // gatos, hembras

    if (
      filtersCats &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsFemales));
    }

    // perros, machos

    if (
      filtersDogs &&
      filtersMales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsMales));
    }

    // perros, hembras

    if (
      filtersDogs &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsFemales));
    }

    // hamsters, machos

    if (
      filtersHamsters &&
      filtersMales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersHamstersMales));
    }

    // hamsters, hembras

    if (
      filtersHamsters &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersHamstersFemales));
    }

    // gatos, machos, hembras

    if (
      filtersCats &&
      filtersMales &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsMalesFemales));
    }

    // perros, machos, hembras

    if (
      filtersDogs &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsMalesFemales));
    }

    // hamsters, machos, hembras

    if (
      filtersHamsters &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersHamstersMalesFemales));
    }

    // gatos, perros, machos

    if (
      filtersCats &&
      filtersDogs &&
      filtersMales &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMales));
    }

    // gatos, perros, hembras

    if (
      filtersCats &&
      filtersDogs &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsFemales));
    }

    // gatos, hamsters, machos

    if (
      filtersCats &&
      filtersHamsters &&
      filtersMales &&
      !filtersDogs &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsHamstersMales));
    }

    // gatos, hamsters, hembras

    if (
      filtersCats &&
      filtersHamsters &&
      filtersFemales &&
      !filtersDogs &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsHamstersFemales));
    }

    // perros, hamsters, machos

    if (
      filtersDogs &&
      filtersHamsters &&
      filtersMales &&
      !filtersCats &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsHamstersMales));
    }

    // perros, hamsters, hembras

    if (
      filtersDogs &&
      filtersHamsters &&
      filtersFemales &&
      !filtersCats &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsHamstersFemales));
    }

    // gatos, perros, machos, hembras

    if (
      filtersCats &&
      filtersDogs &&
      filtersMales &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMalesFemales));
    }

    // gatos, hamsters, machos, hembras

    if (
      filtersCats &&
      filtersHamsters &&
      filtersMales &&
      filtersFemales &&
      !filtersDogs &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsHamstersMalesFemales));
    }

    // perros, hamsters, machos, hembras

    if (
      filtersDogs &&
      filtersHamsters &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsHamstersMalesFemales));
    }

    // gatos, perros, hamsters, machos

    if (
      filtersCats &&
      filtersDogs &&
      filtersHamsters &&
      filtersMales &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsHamstersMales));
    }

    // gatos, perros, hamsters, hembras

    if (
      filtersCats &&
      filtersDogs &&
      filtersHamsters &&
      filtersFemales &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsHamstersFemales));
    }

    // gatos, perros, hamsters, machos, hembras

    if (
      filtersCats &&
      filtersDogs &&
      filtersHamsters &&
      filtersMales &&
      filtersFemales &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsHamstersMalesFemales));
    }

    // gatos, pequeños, machos

    if (
      filtersCats &&
      filtersSmalls &&
      filtersMales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsMales));
    }

    // gatos, pequeños, hembras

    if (
      filtersCats &&
      filtersSmalls &&
      filtersFemales & !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsFemales));
    }

    // perros, pequeños, machos

    if (
      filtersDogs &&
      filtersSmalls &&
      filtersMales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsMales));
    }

    // perros, pequeños, hembras

    if (
      filtersDogs &&
      filtersSmalls &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsFemales));
    }

    // hamsters no tienen tamaño
    // hamsters no tienen tamaño

    // gatos, medianos, machos

    if (
      filtersCats &&
      filtersMediums &&
      filtersMales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsMediumsMales));
    }

    // gatos, medianos, hembras
    if (
      filtersCats &&
      filtersMediums &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsMediumsFemales));
    }

    // perros, medianos, machos
    if (
      filtersDogs &&
      filtersMediums &&
      filtersMales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsMediumsMales));
    }

    // perros, medianos, hembras
    if (
      filtersDogs &&
      filtersMediums &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsMediumsFemales));
    }

    // hamsters no tienen tamaño

    // gatos, grandes, machos
    if (
      filtersCats &&
      filtersBigs &&
      filtersMales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsBigsMales));
    }

    // gatos, grandes, hembras
    if (
      filtersCats &&
      filtersBigs &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsBigsFemales));
    }

    // perros, grandes, machos
    if (
      filtersDogs &&
      filtersBigs &&
      filtersMales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsBigsMales));
    }

    // perros, grandes, hembras

    if (
      filtersDogs &&
      filtersBigs &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsBigsFemales));
    }

    // hamsters no tienen tamaño
    // hamsters no tienen tamaño

    // gatos, pequeños, machos, hembras
    if (
      filtersCats &&
      filtersSmalls &&
      filtersMales &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsMalesFemales));
    }

    // gatos, medianos, machos, hembras
    if (
      filtersCats &&
      filtersMediums &&
      filtersMales &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsMediumsMalesFemales));
    }

    // gatos, grandes, machos, hembras
    if (
      filtersCats &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsBigsMalesFemales));
    }

    // perros, pequeños, machos, hembras
    if (
      filtersDogs &&
      filtersSmalls &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsMalesFemales));
    }

    // perros, medianos, machos, hembras
    if (
      filtersDogs &&
      filtersMediums &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsMediumsMalesFemales));
    }

    // perros, grandes, machos, hembras
    if (
      filtersDogs &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsBigsMalesFemales));
    }

    // gatos, perros, pequeños, machos
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersMales &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsMales));
    }

    // gatos, perros, pequeños, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsFemales));
    }

    // gatos, perros, medianos, machos
    if (
      filtersCats &&
      filtersDogs &&
      filtersMediums &&
      filtersMales &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMediumsMales));
    }

    // gatos, perros, medianos, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersMediums &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMediumsFemales));
    }

    // gatos, perros, grandes, machos
    if (
      filtersCats &&
      filtersDogs &&
      filtersBigs &&
      filtersMales &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsBigsMales));
    }

    // gatos, perros, grandes, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersBigs &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsBigsFemales));
    }

    // gatos, perros, pequeños, machos, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersMales &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsMalesFemales));
    }

    // gatos, perros, medianos, machos, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersMediums &&
      filtersMales &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMediumsMalesFemales));
    }

    // gatos, perros, grandes, machos, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsBigsMalesFemales));
    }

    // pequeños, machos
    if (
      filtersSmalls &&
      filtersMales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsMales));
    }

    // pequeños, hembras
    if (
      filtersSmalls &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsFemales));
    }

    // pequeños, machos, hembras
    if (
      filtersSmalls &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsMalesFemales));
    }

    // medianos, machos
    if (
      filtersMediums &&
      filtersMales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersMediumsMales));
    }

    // medianos, hembras
    if (
      filtersMediums &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersMediumsFemales));
    }

    // medianos, machos, hembras
    if (
      filtersMediums &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersMediumsMalesFemales));
    }

    // grandes, machos
    if (
      filtersBigs &&
      filtersMales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersBigsMales));
    }

    // grandes, hembras
    if (
      filtersBigs &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersBigsFemales));
    }

    // grandes, machos, hembras
    if (
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMediums
    ) {
      dispatch(get_saci_pets_action(petsFiltersBigsMalesFemales));
    }

    // pequeños, medianos, machos
    if (
      filtersSmalls &&
      filtersMediums &&
      filtersMales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsMediumsMales));
    }

    // pequeños, medianos, hembras
    if (
      filtersSmalls &&
      filtersMediums &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsMediumsFemales));
    }

    // pequeños, medianos, machos, hembras
    if (
      filtersSmalls &&
      filtersMediums &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsMediumsMalesFemales));
    }

    // pequeños, grandes, machos
    if (
      filtersSmalls &&
      filtersBigs &&
      filtersMales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsBigsMales));
    }

    // pequeños, grandes, hembras
    if (
      filtersSmalls &&
      filtersBigs &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsBigsFemales));
    }

    // pequeños, grandes, machos, hembras
    if (
      filtersSmalls &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsBigsMalesFemales));
    }

    // medianos, gandes, machos
    if (
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersMediumsBigsMales));
    }

    // medianos, gandes, hembras
    if (
      filtersMediums &&
      filtersBigs &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersMediumsBigsFemales));
    }

    // medianos, gandes, machos, hembras
    if (
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls
    ) {
      dispatch(get_saci_pets_action(petsFiltersMediumsBigsMalesFemales));
    }

    // pequeños, medianos, grandes, machos
    if (
      filtersSmalls &&
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsMediumsBigsMales));
    }

    // pequeños, medianos, grandes, hembras
    if (
      filtersSmalls &&
      filtersMediums &&
      filtersBigs &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsMediumsBigsFemales));
    }

    // pequeños, medianos, grandes, machos, hembras
    if (
      filtersSmalls &&
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersDogs &&
      !filtersHamsters
    ) {
      dispatch(get_saci_pets_action(petsFiltersSmallsMediumsBigsMalesFemales));
    }
    // gatos, pequeños, medianos, machos
    if (
      filtersCats &&
      filtersSmalls &&
      filtersMediums &&
      filtersMales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsMediumsMales));
    }

    // gatos, pequeños, medianos, hembras
    if (
      filtersCats &&
      filtersSmalls &&
      filtersMediums &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsMediumsFemales));
    }

    // gatos, pequeños, medianos, machos, hembras
    if (
      filtersCats &&
      filtersSmalls &&
      filtersMediums &&
      filtersMales &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsMediumsMalesFemales));
    }

    // gatos, pequeños, grandes, machos
    if (
      filtersCats &&
      filtersSmalls &&
      filtersBigs &&
      filtersMales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsBigsMales));
    }

    // gatos, pequeños, grandes, hembras
    if (
      filtersCats &&
      filtersSmalls &&
      filtersBigs &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsBigsFemales));
    }

    // gatos, pequeños, grandes, machos, hembras
    if (
      filtersCats &&
      filtersSmalls &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsBigsMalesFemales));
    }

    // gatos, medianos, grandes, machos
    if (
      filtersCats &&
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsMediumsBigsMales));
    }

    // gatos, medianos, grandes, hembras
    if (
      filtersCats &&
      filtersMediums &&
      filtersBigs &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsMediumsBigsFemales));
    }

    // gatos, medianos, grandes, machos, hembras
    if (
      filtersCats &&
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersDogs &&
      !filtersHamsters &&
      !filtersSmalls
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsMediumsBigsMalesFemales));
    }

    // perros, pequeños, medianos, machos
    if (
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      filtersMales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsMediumsMales));
    }

    // perros, pequeños, medianos, hembras
    if (
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsMediumsFemales));
    }

    // perros, pequeños, medianos, machos, hembras
    if (
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersBigs
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsMediumsMalesFemales));
    }

    // perros, pequeños, grandes, machos
    if (
      filtersDogs &&
      filtersSmalls &&
      filtersBigs &&
      filtersMales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsBigsMales));
    }

    // perros, pequeños, grandes, hembras
    if (
      filtersDogs &&
      filtersSmalls &&
      filtersBigs &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsBigsFemales));
    }

    // perros, pequeños, gandes, machos, hembras
    if (
      filtersDogs &&
      filtersSmalls &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersMediums
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsBigsMalesFemales));
    }

    // perros, medianos, grandes, machos
    if (
      filtersDogs &&
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsMediumsBigsMales));
    }

    // perros, medianos, grandes, hembras
    if (
      filtersDogs &&
      filtersMediums &&
      filtersBigs &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsMediumsBigsFemales));
    }

    // perros, medianos, grandes, machos, hembras
    if (
      filtersDogs &&
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersCats &&
      !filtersHamsters &&
      !filtersSmalls
    ) {
      dispatch(get_saci_pets_action(petsFiltersDogsMediumsBigsMalesFemales));
    }

    // gatos, perros, pequeños, medianos, machos
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      filtersMales &&
      !filtersHamsters &&
      !filtersBigs &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsMediumsMales));
    }

    // gatos, perros, pequeños, medianos, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsMediumsFemales));
    }

    // gatos, perros, pequeños, medianos, machos, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      filtersMales &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersBigs
    ) {
      dispatch(
        get_saci_pets_action(petsFiltersCatsDogsSmallsMediumsMalesFemales)
      );
    }

    // gatos, perros, pequeños, grandes, machos
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersBigs &&
      filtersMales &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsBigsMales));
    }

    // gatos, perros, pequeños, grandes, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersBigs &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsBigsFemales));
    }

    // gatos, perros, pequeños, grandes, machos, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersMediums
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsBigsMalesFemales));
    }

    // gatos, perros, medianos, grandes, machos
    if (
      filtersCats &&
      filtersDogs &&
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMediumsBigsMales));
    }

    // gatos, perros, medianos, grandes, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersMediums &&
      filtersBigs &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersSmalls &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMediumsBigsFemales));
    }

    // gatos, perros, medianos, grandes, machos, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersSmalls
    ) {
      dispatch(
        get_saci_pets_action(petsFiltersCatsDogsMediumsBigsMalesFemales)
      );
    }

    // gatos, perros, pequeños, medianos, grandes, machos
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      !filtersHamsters &&
      !filtersFemales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsMediumsBigsMales));
    }

    // gatos, perros, pequeños, medianos, grandes, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      filtersBigs &&
      filtersFemales &&
      !filtersHamsters &&
      !filtersMales
    ) {
      dispatch(
        get_saci_pets_action(petsFiltersCatsDogsSmallsMediumsBigsFemales)
      );
    }

    // gatos, perros, pequeños, medianos, grandes, machos, hembras
    if (
      filtersCats &&
      filtersDogs &&
      filtersSmalls &&
      filtersMediums &&
      filtersBigs &&
      filtersMales &&
      filtersFemales &&
      !filtersHamsters
    ) {
      dispatch(
        get_saci_pets_action(petsFiltersCatsDogsSmallsMediumsBigsMalesFemales)
      );
    }
  }, [filtersDeps]);

  const CustomTooltip = (props) => (
    <Tooltip
      {...props}
      arrow
      TransitionComponent={Zoom}
      placement={'right'}
      classes={{ tooltip: classes.CustomTooltip }}
    />
  );

  // const CustomTooltip = withStyles({
  //   tooltip: {
  //     color: 'white',
  //   },
  // })(Tooltip);

  return (
    <div>
      {/* <Lottie
    options={{ animationData: dog, ...defaultOptions }}
    height={400}
    width={400}
    autoplay={isStart}
    /> */}

      <div className={classes.filtersChips}>
        {filtersCats ? (
          <Chip
            className={
              filtersCatsValidate
                ? 'animate__animated animate__backOutDown'
                : 'animate__animated animate__fadeInUpBig'
            }
            color="primary"
            label="Gatos"
            onDelete={handleCatsDelete}
          />
        ) : null}

        {filtersDogs ? (
          <Chip
            className={
              filtersDogsValidate
                ? 'animate__animated animate__backOutDown'
                : 'animate__animated animate__fadeInUpBig'
            }
            color="primary"
            label="Perros"
            onDelete={handleDogsDelete}
          />
        ) : null}

        {filtersHamsters ? (
          <Chip
            className={
              filtersHamstersValidate
                ? 'animate__animated animate__backOutDown'
                : 'animate__animated animate__fadeInUpBig'
            }
            color="primary"
            label="Hamsters"
            onDelete={handleHamstersDelete}
          />
        ) : null}
      </div>

      <div className={classes.filtersChips}>
        {filtersSmalls ? (
          <Chip
            className={
              filtersSmallsValidate
                ? 'animate__animated animate__backOutDown'
                : 'animate__animated animate__fadeInUpBig'
            }
            color="primary"
            label="Pequeños"
            onDelete={handleSmallsDelete}
          />
        ) : null}

        {filtersMediums ? (
          <Chip
            className={
              filtersMediumsValidate
                ? 'animate__animated animate__backOutDown'
                : 'animate__animated animate__fadeInUpBig'
            }
            color="primary"
            label="Medianos"
            onDelete={handleMediumsDelete}
          />
        ) : null}

        {filtersBigs ? (
          <Chip
            className={
              filtersBigsValidate
                ? 'animate__animated animate__backOutDown'
                : 'animate__animated animate__fadeInUpBig'
            }
            color="primary"
            label="Grandes"
            onDelete={handleBigsDelete}
          />
        ) : null}
      </div>

      <div className={classes.filtersChips}>
        {filtersMales ? (
          <Chip
            className={
              filtersMalesValidate
                ? 'animate__animated animate__backOutDown'
                : 'animate__animated animate__fadeInUpBig'
            }
            color="primary"
            label="Machos"
            onDelete={handleMalesDelete}
          />
        ) : null}
        {filtersFemales ? (
          <Chip
            className={
              filtersFemalesValidate
                ? 'animate__animated animate__backOutDown'
                : 'animate__animated animate__fadeInUpBig'
            }
            color="primary"
            label="Hembras"
            onDelete={handleFemalesDelete}
          />
        ) : null}
        {filtersYoungs ? (
          <Chip
            className={
              filtersYoungsValidate
                ? 'animate__animated animate__backOutDown'
                : 'animate__animated animate__fadeInUpBig'
            }
            color="primary"
            label="Jóvenes"
            onDelete={handleYoungsDelete}
          />
        ) : null}
      </div>

      <TreeView
        className={classes.root}
        defaultExpanded={['1']}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        <StyledTreeItem
          nodeId="1"
          labelText="Filtros"
          labelIcon={lottieFilter}
          bgColor="#63C132"
          color="#FFFFFF"
        >
          <StyledTreeItem
            nodeId="2"
            labelText="Tipo De Mascota"
            labelIcon={lottiePetType}
          >
            <StyledTreeItem
              nodeId="7"
              labelText="Gatos"
              labelIcon={lottieCat}
              onClick={handleCatsAdd}
              // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="8"
              labelText="Perros"
              labelIcon={lottieDog}
              onClick={handleDogsAdd}
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
          <StyledTreeItem nodeId="3" labelText="Raza" labelIcon={lottiePetRace}>
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
          <StyledTreeItem
            nodeId="4"
            labelText="Tamaño"
            labelIcon={lottiePetSize}
          >
            <StyledTreeItem
              nodeId="15"
              labelText="Pequeños"
              labelIcon={lottieSmall}
              onClick={handleSmallsAdd}
              // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="16"
              labelText="Medianos"
              labelIcon={lottieMedium}
              onClick={handleMediumsAdd}
              // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="17"
              labelText="Grandes"
              labelIcon={lottieBig}
              onClick={handleBigsAdd}
              // labelInfo="90"
            />
          </StyledTreeItem>
          <StyledTreeItem
            nodeId="5"
            labelText="Género"
            labelIcon={lottiePetGender}
          >
            <StyledTreeItem
              nodeId="18"
              labelText="Machos"
              labelIcon={lottieMale}
              onClick={handleMalesAdd}
              // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="19"
              labelText="Hembras"
              labelIcon={lottieFemale}
              onClick={handleFemalesAdd}
              // labelInfo="90"
            />
          </StyledTreeItem>
          <StyledTreeItem nodeId="6" labelText="Edad" labelIcon={lottiePetYear}>
            <CustomTooltip title="Mascotas entre 1 semana a 6 meses">
              <Box>
                <StyledTreeItem
                  nodeId="20"
                  labelText="Cachorros"
                  labelIcon={lottieYoung}
                  // onClick={handleChildrensAdd}
                  // labelInfo="90"
                />
              </Box>
            </CustomTooltip>
            <CustomTooltip title="Mascotas entre 7 meses a 2 años">
              <Box>
                <StyledTreeItem
                  nodeId="21"
                  labelText="Jóvenes"
                  labelIcon={lottieYoung}
                  onClick={handleYoungsAdd}
                  // labelInfo="90"
                />
              </Box>
            </CustomTooltip>
            <CustomTooltip title="Mascotas entre 3 a 10 años">
              <Box>
                <StyledTreeItem
                  nodeId="22"
                  labelText="Adultos"
                  labelIcon={lottieAdult}
                  onClick={handleAdultsAdd}
                  // labelInfo="90"
                />
              </Box>
            </CustomTooltip>
            <CustomTooltip title="Mascotas entre 11 a 25 años">
              <Box>
                <StyledTreeItem
                  nodeId="23"
                  labelText="Viejos"
                  labelIcon={lottieOld}
                  onClick={handleOldsAdd}
                  // labelInfo="90"
                />
              </Box>
            </CustomTooltip>
          </StyledTreeItem>
        </StyledTreeItem>
      </TreeView>
    </div>
  );
}
