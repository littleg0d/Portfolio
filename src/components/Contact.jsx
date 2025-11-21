import { useState } from 'react';

const Contact = () => {
  const FORM_ENDPOINT = "https://getform.io/f/awnyljnb";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Limpia el estado de éxito/error cuando el usuario empieza a escribir de nuevo
    if (status.success || status.error) {
        setStatus({ submitting: false, success: false, error: false });
    }
  };

  // Maneja el envío del formulario de forma asíncrona
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Asegúrate de que el ID del formulario no sea el placeholder
    if (FORM_ENDPOINT.includes("your-form-id")) {
        alert("¡Recuerda cambiar 'your-form-id' por tu ID real de Getform.io!");
        return;
    }

    setStatus({ submitting: true, success: false, error: false });

    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // El API de Getform requiere que los datos sean enviados como JSON
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus({ submitting: false, success: true, error: false });
            setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
        } else {
            // Manejar errores de respuesta del servidor (código 4xx o 5xx)
            setStatus({ submitting: false, success: false, error: true });
        }
    } catch (error) {
        // Manejar errores de red o cualquier otra excepción
        console.error("Error al enviar el formulario:", error);
        setStatus({ submitting: false, success: false, error: true });
    }
  };


  return (
    <div name='contact' className='w-full py-20 flex justify-center items-center'>
        {/* Cambiamos el action y agregamos el onSubmit */}
        <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full px-8'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-slate-100 inline'>Contacto</p>
                <div className='h-1 w-20 bg-cyan-400 rounded-full mt-2'></div>
                <p className='text-slate-400 py-4'>Comunicate conmigo</p>
            </div>

            {/* Inputs vinculados al estado 'formData' */}
            <div className='flex flex-col gap-4'>
              <input
                className='bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors'
                type="text"
                placeholder='Nombre'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className='bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors'
                type="email"
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                className='bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors'
                name="message"
                rows="6"
                placeholder='Mensaje'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Botón de envío con estado dinámico */}
            <button
                type="submit"
                disabled={status.submitting}
                className='text-slate-900 bg-cyan-400 hover:bg-cyan-300 font-bold px-8 py-4 my-8 mx-auto flex items-center rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {/* Mensajes de feedback */}
            {status.success && (
                <p className='text-green-500 text-center font-semibold mt-4'>
                    ¡Mensaje enviado con éxito!
                </p>
            )}
            {status.error && (
                <p className='text-red-500 text-center font-semibold mt-4'>
                    Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </p>
            )}

        </form>
    </div>
  );
};

export default Contact;
