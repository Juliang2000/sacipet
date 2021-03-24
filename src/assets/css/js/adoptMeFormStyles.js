import { makeStyles } from '@material-ui/core/styles';

const adoptMeFormStyles = makeStyles((theme) => ({

    closeIconButton: {
        marginRight: 5,
        marginTop: 5,
    },

    closeButton: {

        color: '#808080',
        width: 30,
        height: 30,
    },

    button: {
        marginRight: theme.spacing(1),
        alignItems: 'center',
    },

    formPetDescription: {
        marginTop: 20,
        marginBottom: 20
    }

}))


export default adoptMeFormStyles;