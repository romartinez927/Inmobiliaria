import React from 'react'
import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos a tu servidor o hacer cualquier acción que desees con los datos del formulario.
        alert(`Nombre: ${formData.name}\nEmail: ${formData.email}\nAsunto: ${formData.subject}\nMensaje: ${formData.message}`);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    return (
        <form onSubmit={handleSubmit} className='col-5'>
            <div>
                <label htmlFor="name" className='form-label'>Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className='form-control'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="email" className='form-label'>Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className='form-control'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="subject" className='form-label'>Asunto:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    className='form-control'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="message" className='form-label'>Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default ContactForm