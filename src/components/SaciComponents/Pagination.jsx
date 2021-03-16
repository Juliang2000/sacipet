import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Grid } from '@material-ui/core';
import useStyles from '../../assets/css/js/styles';
import ReactPaginate from 'react-paginate';
import '../../assets/css/pagination.css'
import { page_saci_pets_action } from '../../redux/actions/saciPets';

export default function Pagination() {

    const dispatch = useDispatch();
    const classes = useStyles();
    const { mascotas } = useSelector(state => state.saciPets);
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(20);
    const [pageCount, setPageCount] = useState(0)


    useEffect(() => {
            const slicePets = mascotas.slice(offset, offset + perPage)
            console.log(slicePets)
            setPageCount(Math.ceil(mascotas.length / perPage))
            dispatch(page_saci_pets_action(slicePets));
    }, [mascotas, offset])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };


    return (
        <>
            <ReactPaginate
                previousLabel={"Atrás"}
                nextLabel={"Siguiente"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </>
    );

}
