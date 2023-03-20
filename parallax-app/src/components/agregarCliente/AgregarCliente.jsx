import React from 'react'
import './AgregarCliente.css'

const AgregarCliente = () => {
    return (
        <main className='addClient'>
            <form>
                <fieldset>
                    <legend>Informacion del cliente</legend>

                    <div>
                    <input />
                    <label>Cliente</label>
                </div>
                <div>
                    <input />
                    <label>Nombre</label>
                </div>
                <div>
                    <input />
                    <label>Categoria</label>
                </div>
                <div>
                    <input />
                    <label>Fecha de inicio</label>
                </div>
                <div>
                    <input />
                    <label>Familia</label>
                </div>
                </fieldset>

                <fieldset>
                    <legend>Informacion sobre el servicio</legend>

                    <div>
                    <input />
                    <label>Nombre de contrato</label>
                </div>
                <div>
                    <input />
                    <label>Articulo</label>
                </div>
                <div>
                    <input />
                    <label>Cantidad</label>
                </div>
                <div>
                    <input type='number'/>
                    <label>Precio</label>
                </div>
                <div>
                    <input />
                    <label>Descuento</label>
                </div>
                </fieldset>

                <fieldset>
                    <legend>Tipo de moneda</legend>
                    <div>
                        <input type='radio' name='moneda' id='$'/>
                        <label for="$">$</label>
                    </div>
                    <div>
                        <input type='radio' name='moneda' id='USD'/>
                        <label for="USD">USD</label>
                    </div>
                </fieldset>

                <div>
                    <textarea></textarea>
                    <label>observaciones</label>
                </div>
            </form>
        </main>
    )
}

export default AgregarCliente
