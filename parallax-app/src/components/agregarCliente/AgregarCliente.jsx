import React from "react";
import './AgregarCliente.css'

const AgregarCliente = () => {
    return (
        <main className='addClient'>
            <form className='form'>

                <div className='display'>
                    <div className='form-container'>
                        <h3>Informacion del cliente</h3>

                        <div className='input-box'>
                            <input type='text' />
                            <label htmlFor=''>Cliente</label>
                        </div>
                        <div className='input-box'>
                            <input type='text' />
                            <label htmlFor=''>Nombre</label>
                        </div>
                        <div className='input-box'>
                            <input />
                            <label htmlFor=''>Categoria</label>
                        </div>
                        <div className='input-box'>
                            <input type='text' />
                            <label htmlFor=''>Familia</label>
                        </div>
                        <div>
                            <input type='date' />
                            <label>Fecha de inicio</label>
                        </div>
                    </div>

                    <div className='form-container'>
                        <h3>Informacion sobre el servicio</h3>

                        <div className='input-box'>
                            <input type='text' />
                            <label htmlFor=''>Nombre de contrato</label>
                        </div>
                        <div className='input-box'>
                            <input type='text' />
                            <label htmlFor=''>Articulo</label>
                        </div>
                        <div className='input-box'>
                            <input type='text' />
                            <label htmlFor=''>Cantidad</label>
                        </div>
                        <div className='input-box'>
                            <input type='text' />
                            <label htmlFor=''>Precio</label>
                        </div>
                        <div className='input-box'>
                            <input type='text' />
                            <label htmlFor=''>Descuento</label>
                        </div>
                    </div>
                </div>

                <div className='display'>
                    <div className='form-container'>
                        <h3>Tipo de moneda</h3>
                        <div>
                            <input type='radio' name='moneda' id='$' />
                            <label for="$">$</label>
                        </div>
                        <div>
                            <input type='radio' name='moneda' id='USD' />
                            <label for="USD">USD</label>
                        </div>
                    </div>

                    <div className='form-textarea'>
                        <textarea></textarea>
                        <label>observaciones</label>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default AgregarCliente
