import React from "react";
import "./Contact.css";
import Map from "./Map";

function Contact() {
    return (
        <div className="contact-page">
            <div className="contact-card">
                <h3>Pčelarsko gazdinstvo Marjanović</h3>
                <p><strong>Ime:</strong> Sreten Marjanović</p>
                <p><strong>Broj telefona:</strong> +381 64 879 4657</p>
                <p><strong>Adresa:</strong> Ulica kneza Miloša 40/a, 15300 Loznica, Serbia</p>
            </div>
            <div className="map-container">
                <Map />
            </div>
        </div>
    );
}

export default Contact;
