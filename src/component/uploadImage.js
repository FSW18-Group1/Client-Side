import React, { useState } from "react";
import anonim from '../assets/anonim.jpg'
import './component.css';

function Upload() {

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(anonim)

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
        data.append('upload_preset', 'letitimages')
        setLoading(true)

        const res = await fetch("https://api.cloudinary.com/v1_1/alternate-cloud/image/upload",
        {
            method:"POST",
            body:data
        })

        const file = await res.json()
        console.log(file)
        setImage(file.secure_url)
        setLoading(false)
    }

    return (
        <div data-testid="upload">
            <div>
                <img className="upload-image" src={image} />
            </div>
            <input
                type="file"
                name="file"
                placeholder="upload file..."
                onChange={uploadImage}
            />
            {/* {
                loading?(
                    <h3>loading...</h3>
                ):(
                    <img src={image} style={{width:'300px'}}/>
                )
            } */}
        </div>
    )
}

export default Upload;