import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate';
import '../../assets/css/pagination.css'
import { page_saci_pets_action } from '../../redux/actions/saciPets';

export default function Pagination() {

    const dispatch = useDispatch(); //Redux hook
    const { mascotas } = useSelector(state => state.saciPets); // get pet Data from Local Storage
    const [offset, setOffset] = useState(0); // set the offset of the pages
    const [perPage] = useState(20); // set the items showed in each page
    const [pageCount, setPageCount] = useState(0); // set the count to the pagination component
    const [allowPagination, setAllowPagination] = useState(true); // if true display the pagination
    const sliceStart = offset * perPage - perPage; // set the start of array slice
    const sliceEnd = offset * perPage; // set the end of array slice

    // to the start display de first elements in array less than mascotas length
    useEffect(() => {
        const slicePets = mascotas?.slice(0, perPage)
        setPageCount(Math.ceil(mascotas?.length / perPage))
        dispatch(page_saci_pets_action(slicePets));
        if (mascotas.length <= perPage) {
            console.log(false)
            setAllowPagination(false)
        }
        if (mascotas.length > perPage) {
            console.log(true)
            setAllowPagination(true)
        }
    }, [mascotas])

    //async function to dispatch by offset slice elements
    const getPageMascotas = async () => {
        const slicePets = mascotas.slice(sliceStart, sliceEnd)
        dispatch(page_saci_pets_action(slicePets));
    }

    // handleClick event of the pagination
    const handlePageClick = (e) => {
        const selectedPage = e.selected
        setOffset(selectedPage + 1)
        console.log(offset)
    };

    // execute the async function by the onClick event
    useEffect(() => {
        if (offset !== 0) {
            getPageMascotas()
        }
    }, [offset])

    return (
        <>
            { allowPagination ?
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
                :
                null
            }

        </>
    );

}
