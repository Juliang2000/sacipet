import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { get_saci_pets_action } from '../redux/actions/saciPets';
import { Dialog, Typography, Button, MenuItem, Select, Box } from '@material-ui/core'
import { array } from 'yup';





export default function PetImages() {
    const { mascotas } = useSelector(state => state.saciPets)
    const dispatch = useDispatch();
    const [content, setContent] = useState()
    const [open, setOpen] = useState(false);
    const [petData, setPetData] = useState([])
    const [petIndex, setPetIndex] = useState()

    const InitialPetState =
    {
        nombre_mascota: '',
        edad_mascota: "",
        escala_edad: "",
        descripcion_mascota: "",
        esterilizado: "",
        raza: "",
    };


    const [newPet, setNewPet] = useState()
    const [getPet, setGetPet] = useState(InitialPetState)



    useEffect(() => {
        dispatch(get_saci_pets_action())
        setPetData(mascotas)
        console.log(petData)
    }, [])

    useEffect(() => {
        for (let i of mascotas) {
            mascotas.map((item) => {
                setContent(item.nombre_mascota);
                return item
            })
        }
    }, [mascotas])

    useEffect(() => {
        if (mascotas) {
            console.log(petData);
        }
    }, [mascotas])

    useEffect(() => {
        if (petIndex >= 0) {
            setGetPet(mascotas[petIndex])
            console.log(petIndex)
        }
    }, [petIndex])

    useEffect(() => {
        console.log(getPet)
    }, [getPet])


    const handleClickOpen = (value) => {
        setNewPet("" + value)
        console.log(value)
        setOpen(true)
        // setNewPet()
    }

    // useEffect(() => {
    //     console.log(newPet)
    // }, [newPet])

    useEffect(() => {
        let petInfo = mascotas.findIndex(function (item) {
            return item.id_mascota === newPet;
        });
        setPetIndex(petInfo)
        console.log(petIndex)
    }, [newPet])

    const handleClickClose = () => {

        setOpen(false)
    }

    // const handleChange = (event) => {
    //     const { name, value } = event.target
    //     setNewPet({ ...newPet, [name]: value })
    // }



    return (
        <>
            {Object.keys(mascotas).length > 0 ?
                mascotas.map((item) => {
                    return (
                            <Button key={item.mascota}>
                                <MenuItem key={item.mascota} onClick={(e) => handleClickOpen(e.target.value)} value={item.id_mascota}>{item.nombre_mascota}</MenuItem>
                            </Button>
                    )
                })
                :
                <Typography>Cargando...</Typography>
            }

            <Dialog maxWidth="lg" open={open} onClose={handleClickClose}>
                <Box style={{ 'padding': '20px' }}>
                    <Typography variant="h3" >ID: {getPet.id_mascota}</Typography>
                    <Typography variant="h3" >Nombre Mascota: {getPet.nombre_mascota}</Typography>
                    <Typography variant="h3" >Edad: {getPet.edad_mascota}</Typography>
                    <Typography variant="h3" >Raza: {getPet.raza}</Typography>
                    <Typography variant="h3" >Observaciones: {getPet.descripcion_mascota}</Typography>
                </Box>
            </Dialog>
        </>
    )


}