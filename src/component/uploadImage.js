import React, { useState } from "react";
import './component.css';

function Upload() {
    const src = localStorage.getItem('src')
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(src)

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

        localStorage.setItem('src', file.secure_url)
    }

    return (
        <div data-testid="upload">
            <div>
                <img data-testid={'image'} className="upload-image" src={image} />
            </div>
            <div className="inputTag">
                <label htmlFor="inputTag">
                    upload img
                    <input
                        id="inputTag"
                        type="file"
                        name="file"
                        onChange={uploadImage}
                    />
                </label>
            </div>
            {
                loading && <p>loading...</p>
            }
        </div>
    )
}

export default Upload;