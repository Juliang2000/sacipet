/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
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

// Dispatch Redux
import { useDispatch } from 'react-redux';

// Redux Actions
import {
  get_saci_pets_action,
} from '../../../redux/actions/saciPets'


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

  const dispatch = useDispatch();

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

  /////////////////////////////////////////////////////////////////////////
  // tipos de mascota//

  // gatos
  const [filtersCats, setFiltersCats] = useState(false);
  const [filtersCatsValidate, setFiltersCatsValidate] = useState(false);

  const handleCatsAdd = () => {
    setFiltersCats(true);
  }

  const handleCatsDelete = () => {
    setFiltersCatsValidate(true);
    setTimeout(() => {
      setFiltersCats(false);
      setFiltersCatsValidate(false);

    }, 1000);
  }

  // perros
  const [filtersDogs, setFiltersDogs] = useState(false);
  const [filtersDogsValidate, setFiltersDogsValidate] = useState(false);

  const handleDogsAdd = () => {
    setFiltersDogs(true);
  }

  const handleDogsDelete = () => {
    setFiltersDogsValidate(true);
    setTimeout(() => {
      setFiltersDogs(false);
      setFiltersDogsValidate(false);
    }, 1000);
  }

  // hamsters
  const [filtersHamsters, setFiltersHamsters] = useState(false);
  const [filtersHamstersValidate, setFiltersHamsterValidate] = useState(false);

  const handleHamstersAdd = () => {
    setFiltersHamsters(true);
  }

  const handleHamstersDelete = () => {
    setFiltersHamsterValidate(true);
    setTimeout(() => {
      setFiltersHamsterValidate(false);
      setFiltersHamsters(false);
    }, 1000);
  }

  /////////////////////////////////////////////////////////////////////////
  // tamaños //

  // mequeño
  const [filtersSmalls, setFiltersSmalls] = useState(false);
  const [filtersSmallsValidate, setFiltersSmallsValidate] = useState(false);

  const handleSmallsAdd = () => {
    setFiltersSmalls(true);
  }

  const handleSmallsDelete = () => {
    setFiltersSmallsValidate(true);
    setTimeout(() => {
      setFiltersSmallsValidate(false);
      setFiltersSmalls(false);
    }, 1000);
  }

  // mediano
  const [filtersMediums, setFiltersMediums] = useState(false);
  const [filtersMediumsValidate, setFiltersMediumsValidate] = useState(false);

  const handleMediumsAdd = () => {
    setFiltersMediums(true);
  }

  const handleMediumsDelete = () => {
    setFiltersMediumsValidate(true);
    setTimeout(() => {
      setFiltersMediumsValidate(false);
      setFiltersMediums(false);
    }, 1000);
  }

  // grande
  const [filtersBigs, setFiltersBigs] = useState(false);
  const [filtersBigsValidate, setFiltersBigsValidate] = useState(false);

  const handleBigsAdd = () => {
    setFiltersBigs(true);
  }

  const handleBigsDelete = () => {
    setFiltersBigsValidate(true);
    setTimeout(() => {
      setFiltersBigsValidate(false);
      setFiltersBigs(false);
    }, 1000);
  }

  /////////////////////////////////////////////////////////////////////////
  //genero

  //machos
  const [filtersMales, setFiltersMales] = useState(false);
  const [filtersMalesValidate, setFiltersMalesValidate] = useState(false);

  const handleMalesAdd = () => {
    setFiltersMales(true);
  }

  const handleMalesDelete = () => {
    setFiltersMalesValidate(true);
    setTimeout(() => {
      setFiltersMalesValidate(false);
      setFiltersMales(false)
    }, 1000);
  }

  //hembras
  const [filtersFemales, setFiltersFemales] = useState(false);
  const [filtersFemalesValidate, setFiltersFemalesValidate] = useState(false);

  const handleFemalesAdd = () => {
    setFiltersFemales(true);
  }

  const handleFemalesDelete = () => {
    setFiltersFemalesValidate(true);
    setTimeout(() => {
      setFiltersFemalesValidate(false);
      setFiltersFemales(false)
    }, 1000);
  }





  // const { mascotas } = useSelector(state => state.saciPets);
  // const harold = mascotas.filter(pets => pets.id_tipo_mascota === "1")
  // const [filters, setFilters] = useState({
  //   filtro: mascotas.filter(pets => pets.id_tipo_mascota === "1")
  // })

  var filtersObjs = {
    id_tipo_mascota: false,
    cats: true,
    dogs: true,
    hamsters: true,
    smalls: true,
    mediums: true,
    bigs: true,
    males: true,
    females: true
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
    females
  } = filtersObjs

  // console.log(object1)


  // filtro vacio
  const [filtersInitial] = useState({
    id_tipo_mascota
  })


  // filtro gatos
  const [petsFiltersCats] = useState({
    cats
  })

  // filtro perros
  const [petsFiltersDogs] = useState({
    dogs
  })

  // filtro hamsters
  const [petsFiltersHamsters] = useState({
    hamsters
  })

  // filtro gatos y perros
  const [petsFiltersCatsDogs] = useState({
    cats,
    dogs
  })

  // filtro gatos y hamsters
  const [petsFiltersCatsHamsters] = useState({
    cats,
    hamsters
  })

  // filtro perros y hamsters
  const [petsFiltersDogsHamsters] = useState({
    dogs,
    hamsters
  })

  // filtro perros, gatos y hamsters
  const [petsFiltersCatsDogsHamsters] = useState({
    cats,
    dogs,
    hamsters
  })

  // filtros pequeños
  const [petsFiltersSmalls] = useState({
    smalls
  })

  // filtro medianos
  const [petsFiltersMediums] = useState({
    mediums
  })

  // filtro grandes
  const [petsFiltersBigs] = useState({
    bigs
  })

  // filtro pequeños y medianos
  const [petsFiltersSmallsMediums] = useState({
    smalls,
    mediums
  })

  //filtro pequeños y grandes
  const [petsFiltersSmallsBigs] = useState({
    smalls,
    bigs
  })

  //filtro grandes y medianos
  const [petsFiltersBigsMediums] = useState({
    bigs,
    mediums
  })

  //filtro pequeños, medianos, grandes
  const [petsFiltersSmallsMediumsBigs] = useState({
    smalls,
    mediums,
    bigs
  })

  //filtro gatos, pequeños
  const [petsFiltersCatsSmalls] = useState({
    cats,
    smalls
  })

  //filtro gatos, medianos
  const [petsFiltersCatsMediums] = useState({
    cats,
    mediums
  })

  //filtro gatos, grandes
  const [petsFiltersCatsBigs] = useState({
    cats,
    bigs
  })

  //filtro perros, pequeños
  const [petsFiltersDogsSmalls] = useState({
    dogs,
    smalls
  })

  //filtro perros, medianos
  const [petsFiltersDogsMediums] = useState({
    dogs,
    mediums
  })

  //filtro perros, grandes
  const [petsFiltersDogsBigs] = useState({
    dogs,
    bigs
  })

  //filtro hamsters tamaños no

  //filtro gatos, pequeños, medianos
  const [petsFiltersCatsSmallsMediums] = useState({
    cats,
    smalls,
    mediums
  })

  //filtro gatos, pequeños, grandes
  const [petsFiltersCatsSmallsBigs] = useState({
    cats,
    smalls,
    bigs
  })

  //filtro gatos, medianos, grandes
  const [petsFiltersCatsMediumsBigs] = useState({
    cats,
    mediums,
    bigs
  })

  //filtro perros, pequeños, medianos
  const [petsFiltersDogsSmallsMediums] = useState({
    dogs,
    smalls,
    mediums
  })

  //filtro perros, pequeños, grandes
  const [petsFiltersDogsSmallsBigs] = useState({
    dogs,
    smalls,
    bigs
  })

  //filtro perros, medianos, grandes
  const [petsFiltersDogsMediumsBigs] = useState({
    dogs,
    mediums,
    bigs
  })

  //filtro gatos, perros, pequeños
  const [petsFiltersCatsDogsSmalls] = useState({
    cats,
    dogs,
    smalls
  })

  //filtro gatos, perros, medianos
  const [petsFiltersCatsDogsMediums] = useState({
    cats,
    dogs,
    mediums
  })

  //filtro gatos, perros, grandes
  const [petsFiltersCatsDogsBigs] = useState({
    cats,
    dogs,
    bigs
  })

  //filtro gatos, perros, pequeños, medianos
  const [petsFiltersCatsDogsSmallsMediums] = useState({
    cats,
    dogs,
    smalls,
    mediums
  })

  //filtro gatos, perros, pequeños, grandes
  const [petsFiltersCatsDogsSmallsBigs] = useState({
    cats,
    dogs,
    smalls,
    bigs
  })

  //filtro gatos, perros, medianos, grandes
  const [petsFiltersCatsDogsMediumsBigs] = useState({
    cats,
    dogs,
    mediums,
    bigs
  })


  //filtro gatos, pequeños, medianos, grandes
  const [petsFiltersCatsSmallsMediumsBigs] = useState({
    cats,
    smalls,
    mediums,
    bigs
  })

  //filtro perros, pequeños, medianos, grandes
  const [petsFiltersDogsSmallsMediumsBigs] = useState({
    dogs,
    smalls,
    mediums,
    bigs
  })

  // filtros gatos, perros, pequeños, medianos, grandes
  const [petsFiltersCatsDogsSmallsMediumsBigs] = useState({
    cats,
    dogs,
    smalls,
    mediums,
    bigs
  })

  // filtros machos
  const [petsFiltersMales] = useState({
    males
  })

  // filtros hembras
  const [petsFiltersFemales] = useState({
    females
  })

  // filtros machos, hembras
  const [petsFiltersMalesFemales] = useState({
    males,
    females
  })

  // filtros, gatos, machos
  const [petsFiltersCatsMales] = useState({
    cats,
    males
  })

  // filtros, gatos, hembras
  const [petsFiltersCatsFemales] = useState({
    cats,
    females
  })

  // filtros, perros, machos
  const [petsFiltersDogsMales] = useState({
    dogs,
    males
  })

  // filtros, perros, hembras
  const [petsFiltersDogsFemales] = useState({
    dogs,
    females
  })

  // filtros, hamsters, machos
  const [petsFiltersHamstersMales] = useState({
    hamsters,
    males
  })

  // filtros, hamsters, hembras
  const [petsFiltersHamstersFemales] = useState({
    hamsters,
    females
  })

  // filtros, gatos, machos, hembras
  const [petsFiltersCatsMalesFemales] = useState({
    cats,
    males,
    females
  })

  // filtros, perros, machos, hembras
  const [petsFiltersDogsMalesFemales] = useState({
    dogs,
    males,
    females
  })

  // filtros, hamsters, machos, hembras
  const [petsFiltersHamstersMalesFemales] = useState({
    hamsters,
    males,
    females
  })

  // filtros, gatos, perros, machos
  const [petsFiltersCatsDogsMales] = useState({
    cats,
    dogs,
    males
  })

  // filtros, gatos, perros, hembras
  const [petsFiltersCatsDogsFemales] = useState({
    cats,
    dogs,
    females
  })

  // filtros, gatos, hamsters, machos
  const [petsFiltersCatsHamstersMales] = useState({
    cats,
    hamsters,
    males
  })

  // filtros, gatos, hamsters, hembras
  const [petsFiltersCatsHamstersFemales] = useState({
    cats,
    hamsters,
    females
  })

  // filtros, perros, hamsters, machos
  const [petsFiltersDogsHamstersMales] = useState({
    dogs,
    hamsters,
    males
  })

  // filtros, perros, hamsters, hembras
  const [petsFiltersDogsHamstersFemales] = useState({
    dogs,
    hamsters,
    females
  })

  // gatos, perros, machos, hembras
  const [petsFiltersCatsDogsMalesFemales] = useState({
    cats,
    dogs,
    males,
    females
  })

  // gatos, hamsters, machos, hembras
  const [petsFiltersCatsHamstersMalesFemales] = useState({
    cats,
    hamsters,
    males,
    females
  })

  // perros, hamsters, machos, hembras
  const [petsFiltersDogsHamstersMalesFemales] = useState({
    dogs,
    hamsters,
    males,
    females
  })


  // filtros, gatos, perros, hamsters, machos
  const [petsFiltersCatsDogsHamstersMales] = useState({
    cats,
    dogs,
    hamsters,
    males
  })

  // filtros, gatos, perros, hamsters, hembras
  const [petsFiltersCatsDogsHamstersFemales] = useState({
    cats,
    dogs,
    hamsters,
    females
  })

  // filtros, gatos, perros, hamsters, machos, hembras
  const [petsFiltersCatsDogsHamstersMalesFemales] = useState({
    cats,
    dogs,
    hamsters,
    males,
    females
  })

  // filtros, gatos, pequeños, machos
  const [petsFiltersCatsSmallsMales] = useState({
    cats,
    smalls,
    males
  })

  // filtros, gatos, pequeños, hembras
  const [petsFiltersCatsSmallsFemales] = useState({
    cats,
    smalls,
    females
  })

  // filtros, perros, pequeños, machos
  const [petsFiltersDogsSmallsMales] = useState({
    dogs,
    smalls,
    males
  })

  // filtros, perros, pequeños, hembras
  const [petsFiltersDogsSmallsFemales] = useState({
    dogs,
    smalls,
    females
  })
  // filtros hamsters no tienen tamaño
  // filtros hamsters no tienen tamaño



  // filtros, gatos, medianos, machos
  const [petsFiltersCatsMediumsMales] = useState({
    cats,
    mediums,
    males
  })

  // filtros, gatos, medianos, hembras
  const [petsFiltersCatsMediumsFemales] = useState({
    cats,
    mediums,
    females
  })

  // filtros, perros, medianos, machos
  const [petsFiltersDogsMediumsMales] = useState({
    dogs,
    mediums,
    males
  })

  // filtros, perros, medianos, hembras
  const [petsFiltersDogsMediumsFemales] = useState({
    dogs,
    mediums,
    females
  })
  // filtros hamsters no tienen tamaño
  // filtros hamsters no tienen tamaño




  // filtros, gatos, grandes, machos
  // filtros, gatos, grandes, hembras
  // filtros, perros, grandes, machos
  // filtros, perros, grandes, hembras

  // filtros hamsters no tienen tamaño
  // filtros hamsters no tienen tamaño


  // filtros, gatos, perros, pequeños, machos
  // filtros, gatos, perros, pequeños, hembras
  // filtros, gatos, perros, medianos, machos
  // filtros, gatos, perros, medianos, hembras
  // filtros, gatos, perros, grandes, machos
  // filtros, gatos, perros, grandes, hembras
















  const filtersDeps = [
    filtersCats,
    filtersDogs,
    filtersHamsters,
    filtersSmalls,
    filtersMediums,
    filtersBigs,
    filtersMales,
    filtersFemales
  ]

  // filtro vacio
  useEffect(() => {
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
      dispatch(get_saci_pets_action(filtersInitial))
    }
  }, [filtersDeps])

  // gatos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCats))
    }
  }, [filtersDeps])

  // perros
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogs))
    }
  }, [filtersDeps])

  // hamsters
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersHamsters))
    }
  }, [filtersDeps])

  // gatos y perros
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogs))
    }
  }, [filtersDeps])

  // gatos y hamsters
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsHamsters))
    }
  }, [filtersDeps])

  // perros y hamsters
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsHamsters))
    }
  }, [filtersDeps])

  // gatos, perros y hamsters
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsHamsters))
    }
  }, [filtersDeps])


  ///////////////////////////////////////////// => tamaños

  // pequeño
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersSmalls))
    }
  }, [filtersDeps])

  // mediano
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersMediums))
    }
  }, [filtersDeps])

  // grande
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersBigs))
    }
  }, [filtersDeps])

  // pequeño y mediano
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersSmallsMediums))
    }
  }, [filtersDeps])

  // pequeño y grande
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersSmallsBigs))
    }
  }, [filtersDeps])

  // grande y mediano
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersBigsMediums))
    }
  }, [filtersDeps])

  // pequeño, mediano y grande
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersSmallsMediumsBigs))
    }
  }, [filtersDeps])


  /////////////////////// tamaños por mascota ///////////////////////

  // gatos pequeños
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsSmalls))
    }
  }, [filtersDeps])

  // gatos medianos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsMediums))
    }
  }, [filtersDeps])

  //gatos grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsBigs))
    }
  }, [filtersDeps])

  // perros pequeños
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsSmalls))
    }
  }, [filtersDeps])

  // perros medianos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsMediums))
    }
  }, [filtersDeps])

  // perros grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsBigs))
    }
  }, [filtersDeps])

  // hamsters no tienen tamaño

  // gatos, pequeños, medianos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsMediums))
    }
  }, [filtersDeps])

  // gatos, pequeños, grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsBigs))
    }
  }, [filtersDeps])

  // gatos, medianos, grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsMediumsBigs))
    }
  }, [filtersDeps])


  // perros, pequeños, medianos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsMediums))
    }
  }, [filtersDeps])

  // perros, pequeños, grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsBigs))
    }
  }, [filtersDeps])

  // perros, medianos, grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsMediumsBigs))
    }
  }, [filtersDeps])

  // gatos y perros, pequeños
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmalls))
    }
  }, [filtersDeps])

  // gatos y perros, medianos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMediums))
    }
  }, [filtersDeps])

  // gatos y perros, grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsBigs))
    }
  }, [filtersDeps])

  // gatos y perros, pequeños, medianos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsMediums))
    }
  }, [filtersDeps])

  // gatos y perros, pequeños, grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsBigs))
    }
  }, [filtersDeps])

  // gatos y perros, medianos, grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMediumsBigs))
    }
  }, [filtersDeps])

  // gatos, pequeños, medianos, grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsMediumsBigs))
    }
  }, [filtersDeps])

  // perros, pequeños, medianos, grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsMediumsBigs))
    }
  }, [filtersDeps])

  // gatos, perros, pequeños, medianos, grandes
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsSmallsMediumsBigs))
    }
  }, [filtersDeps])


  // machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersMales))
    }
  }, [filtersDeps])

  // hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersFemales))
    }
  }, [filtersDeps])

  // machos, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersMalesFemales))
    }
  }, [filtersDeps])


  // gatos, machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsMales))
    }
  }, [filtersDeps])

  // gatos, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsFemales))
    }
  }, [filtersDeps])

  // perros, machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsMales))
    }
  }, [filtersDeps])

  // perros, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsFemales))
    }
  }, [filtersDeps])

  // hamsters, machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersHamstersMales))
    }
  }, [filtersDeps])

  // hamsters, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersHamstersFemales))
    }
  }, [filtersDeps])


  // gatos, machos, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsMalesFemales))
    }
  }, [filtersDeps])

  // perros, machos, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsMalesFemales))
    }
  }, [filtersDeps])


  // hamsters, machos, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersHamstersMalesFemales))
    }
  }, [filtersDeps])


  // gatos, perros, machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMales))
    }
  }, [filtersDeps])


  // gatos, perros, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsFemales))
    }
  }, [filtersDeps])

  // gatos, hamsters, machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsHamstersMales))
    }
  }, [filtersDeps])

  // gatos, hamsters, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsHamstersFemales))
    }
  }, [filtersDeps])

  // perros, hamsters, machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsHamstersMales))
    }
  }, [filtersDeps])

  // perros, hamsters, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsHamstersFemales))
    }
  }, [filtersDeps])


  // gatos, perros, machos, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsMalesFemales))
    }
  }, [filtersDeps])

  // gatos, hamsters, machos, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsHamstersMalesFemales))
    }
  }, [filtersDeps])

  // perros, hamsters, machos, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsHamstersMalesFemales))
    }
  }, [filtersDeps])


  // gatos, perros, hamsters, machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsHamstersMales))
    }
  }, [filtersDeps])

  // gatos, perros, hamsters, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsHamstersFemales))
    }
  }, [filtersDeps])

  // gatos, perros, hamsters, machos, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsDogsHamstersMalesFemales))
    }
  }, [filtersDeps])


  // gatos, pequeños, machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsMales))
    }
  }, [filtersDeps])

  // gatos, pequeños, hembras
  useEffect(() => {
    if (
      filtersCats &&
      filtersSmalls &&
      filtersFemales &
      !filtersDogs &&
      !filtersHamsters &&
      !filtersMediums &&
      !filtersBigs &&
      !filtersMales
    ) {
      dispatch(get_saci_pets_action(petsFiltersCatsSmallsFemales))
    }
  }, [filtersDeps])


  // perros, pequeños, machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsMales))
    }
  }, [filtersDeps])


  // perros, pequeños, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsSmallsFemales))
    }
  }, [filtersDeps])
  // hamsters no tienen tamaño
  // hamsters no tienen tamaño

  // gatos, medianos, machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsMediumsMales))
    }
  }, [filtersDeps])


  // gatos, medianos, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersCatsMediumsFemales))
    }
  }, [filtersDeps])


  // perros, medianos, machos
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsMediumsMales))
    }
  }, [filtersDeps])


  // perros, medianos, hembras
  useEffect(() => {
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
      dispatch(get_saci_pets_action(petsFiltersDogsMediumsFemales))
    }
  }, [filtersDeps])
  // hamsters no tienen tamaño
  // hamsters no tienen tamaño


  // gatos, grandes, machos


  // gatos, grandes, hembras


  // perros, grandes, machos


  // perros, grandes, hembras



  // hamsters no tienen tamaño
  // hamsters no tienen tamaño

  // filtros, gatos, perros, pequeños, machos
  // filtros, gatos, perros, pequeños, hembras
  // filtros, gatos, perros, medianos, machos
  // filtros, gatos, perros, medianos, hembras
  // filtros, gatos, perros, grandes, machos
  // filtros, gatos, perros, grandes, hembras






  // pequeños, machos
  // pequeños, hembras
  // pequeños, machos, hembras

  // medianos, machos
  // medianos, hembras
  // medianos, machos, hembras

  // grandes, machos
  // grandes, hembras
  // grandes, machos, hembras

  // pequeños, medianos, machos
  // pequeños, medianos, hembras
  // pequeños, medianos, machos, hembras

  // pequeños, grandes, machos
  // pequeños, grandes, hembras
  // pequeños, grandes, machos, hembras

  // pequeños, medianos, grandes, machos
  // pequeños, medianos, grandes, hembras
  // pequeños, medianos, grandes, machos, hembras


  return (
    <div>

      {/* <Lottie
    options={{ animationData: dog, ...defaultOptions }}
    height={400}
    width={400}
    autoplay={isStart}
    /> */}

      <div className={classes.filtersChips}>

        {filtersCats ?
          <Chip
            className={filtersCatsValidate ? "animate__animated animate__backOutDown" : "animate__animated animate__fadeInUpBig"}
            color="primary"
            label="Gatos"
            onDelete={handleCatsDelete}
          />
          : null}

        {filtersDogs ?
          <Chip
            className={filtersDogsValidate ? "animate__animated animate__backOutDown" : "animate__animated animate__fadeInUpBig"}
            color="primary"
            label="Perros"
            onDelete={handleDogsDelete}
          />
          : null}

        {filtersHamsters ?
          <Chip
            className={filtersHamstersValidate ? "animate__animated animate__backOutDown" : "animate__animated animate__fadeInUpBig"}
            color="primary"
            label="Hamsters"
            onDelete={handleHamstersDelete}
          />
          : null}



      </div>

      <div className={classes.filtersChips}>
        {filtersSmalls ?
          <Chip
            className={filtersSmallsValidate ? "animate__animated animate__backOutDown" : "animate__animated animate__fadeInUpBig"}
            color="primary"
            label="Pequeños"
            onDelete={handleSmallsDelete}
          />
          : null}

        {filtersMediums ?
          <Chip
            className={filtersMediumsValidate ? "animate__animated animate__backOutDown" : "animate__animated animate__fadeInUpBig"}
            color="primary"
            label="Medianos"
            onDelete={handleMediumsDelete}
          />
          : null}

        {filtersBigs ?
          <Chip
            className={filtersBigsValidate ? "animate__animated animate__backOutDown" : "animate__animated animate__fadeInUpBig"}
            color="primary"
            label="Grandes"
            onDelete={handleBigsDelete}
          />
          : null}
      </div>

      <div className={classes.filtersChips}>
        {filtersMales ?
          <Chip
            className={filtersMalesValidate ? "animate__animated animate__backOutDown" : "animate__animated animate__fadeInUpBig"}
            color="primary"
            label="Machos"
            onDelete={handleMalesDelete}
          />
          : null}
        {filtersFemales ?
          <Chip
            className={filtersFemalesValidate ? "animate__animated animate__backOutDown" : "animate__animated animate__fadeInUpBig"}
            color="primary"
            label="Hembras"
            onDelete={handleFemalesDelete}
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
              labelText="Pequeños"
              labelIcon={SupervisorAccountIcon}
              onClick={handleSmallsAdd}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="16"
              labelText="Medianos"
              labelIcon={SupervisorAccountIcon}
              onClick={handleMediumsAdd}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="17"
              labelText="Grandes"
              labelIcon={SupervisorAccountIcon}
              onClick={handleBigsAdd}
            // labelInfo="90"
            />
          </StyledTreeItem>
          <StyledTreeItem nodeId="5" labelText="Géneros" labelIcon={lottiePetGender} >
            <StyledTreeItem
              nodeId="18"
              labelText="Machos"
              labelIcon={lottiePetGenderMale}
              onClick={handleMalesAdd}
            // labelInfo="90"
            />
            <StyledTreeItem
              nodeId="19"
              labelText="Hembras"
              labelIcon={lottiePetGenderFemale}
              onClick={handleFemalesAdd}
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
