import React, { useState } from 'react'

function FormComentarios() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos a tu servidor o hacer cualquier acción que desees con los datos del formulario.
        alert(`Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  return (
        <form onSubmit={handleSubmit} className='col-md-10 col-sm-12 lh-sm'>
            <div className='pt-2'>
                <label htmlFor="message" className='form-label ps-1'>Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='form-control'
                    style={{minHeight:"100px"}}
                    required
                />
            </div>
            <div>
                <label htmlFor="name" className='form-label ps-1'>Nombre:</label>
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
            <div className='pt-2'>
                <label htmlFor="email" className='form-label ps-1'>Correo electrónico:</label>
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
            <button type="submit">Enviar</button>
        </form>
  )
}

export default FormComentarios