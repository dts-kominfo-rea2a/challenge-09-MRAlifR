// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import "./Contact.css"

const Contact = ({data}) => {
    return (
        <div class="Contact">
            <img class="Contact-photo" src={data.photo} alt="contact"></img>
            <div class="Contact-detail">
                <h6>{data.name}</h6>
                <p>{data.email}</p>
                <p>{data.phone}</p>
            </div>

        </div>
    )
}

export default Contact;