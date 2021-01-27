import React, { /* useState */ } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// import filters from '../../../assets/icons/filters/046-pet-shelter.svg'
// import dog from '../../../assets/icons/petype/dog.svg';
// import cat from '../../../assets/icons/petype/cat.svg';
// import hamster from '../../../assets/icons/petype/hamster.svg';

// Lotties
import Lottie from 'react-lottie';

import petFilter from '../../../assets/icons/filters/petFilter.svg';

import petType  from '../../../assets/icons/filters/petType.svg';
import dog from '../../../assets/lotties/lottieDog.json';
import cat from '../../../assets/lotties/lottieCat.json';
import hamster from '../../../assets/lotties/lottieHamster.json';

import petBreed  from '../../../assets/icons/filters/petBreed.svg';

import petSize  from '../../../assets/icons/filters/petSize.svg';

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
      backgroundColor: theme.palette.action.hover,
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
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
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

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
  iconSize: {
    width: '40px',
    marginRight: '10px'
  },
  // lottieSize: {
  //   width: '40px',
  //   marginRight: '10px'
  // }
});



export default function GmailTreeView() {

  const classes = useStyles();

  // Const Lotties
  const defaultOptions = {
    loop: true,
    autoplay: false,
    rendererSettings: {
      preserveAespectRatio: 'xMidYMid slice'
    }
  }

  // const [isPaused, setIsPaused] = useState(false);

  // const [isStopeed, setIsStopped] = useState(false);

  // const [isStart, setIsStart] = useState(false);

  // const handleStart = () => {
  //   setIsStart(true)
  // }

  const lottieDog = () => {
    return (
      <Lottie options={{ animationData: dog, ...defaultOptions }}/* className={classes.lottieSize} */
        style={{ width: '40px', marginRight: '10px' }}
        //  isStopped={isStopeed}
        //  isPaused={isPaused}
        // autoplay={isStart}
      />
    )
  }

  const lottieCat = () => {
    return (
      <Lottie options={{ animationData: cat, ...defaultOptions }}/* className={classes.lottieSize} */
        style={{ width: '40px', marginRight: '10px' }} />
    )
  }

  const lottieHamster = () => {
    return (
      <Lottie options={{ animationData: hamster, ...defaultOptions }}/* className={classes.lottieSize} */
        style={{ width: '40px', marginRight: '10px' }} />
    )
  }

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

  const lottiePetBreed = () => {
    return (
      <img src={petBreed} alt="Icon Pet Breed" className={classes.iconSize} />
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

  return (
<div>

    {/* <Lottie
    options={{ animationData: dog, ...defaultOptions }}
    height={400}
    width={400}
    autoplay={isStart}
    /> */}

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
            bgColor="#FF8899"
            nodeId="7"
            labelText="Perros"
            labelIcon={lottieDog}
            // onClick={handleStart}
            // labelInfo="90"
          />

          {/* <Button variant="text" color="default" onClick={handleStart}>
            prueba
          </Button> */}

          {/* <LottiePrueba/> */}

          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="8"
            labelText="Gatos"
            labelIcon={lottieCat}
          // labelInfo="90"
          />
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="9"
            labelText="Hámsters"
            labelIcon={lottieHamster}
          // labelInfo="90"
          />
        </StyledTreeItem>
        <StyledTreeItem nodeId="3" labelText="Raza" labelIcon={lottiePetBreed} >
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="10"
            labelText="Raza1"
            labelIcon={SupervisorAccountIcon}
          // labelInfo="90"
          />
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="11"
            labelText="Raza2"
            labelIcon={SupervisorAccountIcon}
          // labelInfo="90"
          />
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="12"
            labelText="Raza3"
            labelIcon={SupervisorAccountIcon}
          // labelInfo="90"
          />
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="13"
            labelText="Raza4"
            labelIcon={SupervisorAccountIcon}
          // labelInfo="90"
          />
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="14"
            labelText="Raza5"
            labelIcon={SupervisorAccountIcon}
          // labelInfo="90"
          />
        </StyledTreeItem>
        <StyledTreeItem nodeId="4" labelText="Tamaño" labelIcon={lottiePetSize} >
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="15"
            labelText="Pequeño"
            labelIcon={SupervisorAccountIcon}
          // labelInfo="90"
          />
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="16"
            labelText="Mediano"
            labelIcon={SupervisorAccountIcon}
          // labelInfo="90"
          />
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="17"
            labelText="Grande"
            labelIcon={SupervisorAccountIcon}
          // labelInfo="90"
          />
        </StyledTreeItem>
        <StyledTreeItem nodeId="5" labelText="Género" labelIcon={lottiePetGender} >
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="18"
            labelText="Macho"
            labelIcon={lottiePetGenderMale}
          // labelInfo="90"
          />
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="19"
            labelText="Hembra"
            labelIcon={lottiePetGenderFemale}
          // labelInfo="90"
          />
        </StyledTreeItem>
        <StyledTreeItem nodeId="6" labelText="Edad" labelIcon={lottiePetYear} >
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="20"
            labelText="Joven"
            labelIcon={SupervisorAccountIcon}
          // labelInfo="90"
          />
          <StyledTreeItem
            bgColor="#FF8899"
            nodeId="21"
            labelText="Adulto"
            labelIcon={SupervisorAccountIcon}
          // labelInfo="90"
          />
          <StyledTreeItem
            bgColor="#FF8899"
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