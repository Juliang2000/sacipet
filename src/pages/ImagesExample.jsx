import React, { useState } from 'react'




const PetImages = () => {

    const [selectedImages, setSelectedImages] = useState([])

    const imageHandleChange = (e) => {
        // console.log(e.target.files)
        if (e.target.files) {
            const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
            console.log(fileArray)

            setSelectedImages((prevImages) => prevImages.concat(fileArray))
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            )
        }
    }

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <img src={photo} key={photo} alt={photo} />
        })
    }

    return (
        <div>
            <div className="heading">
                React Multiple Images Preview
            </div>
            <div>
                <input type="file" id="file" multiple onChange={imageHandleChange} />
                <div className="label-holder">
                    <label htmlFor="file" className="label">
                        <i className="material-icons">add_a_photo</i>
                    </label>
                </div>
                <div className="result">
                    {renderPhotos(selectedImages)}
                </div>
            </div>
        </div>
    )
}

export default PetImages