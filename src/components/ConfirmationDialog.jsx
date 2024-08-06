import React from 'react';

function ConfirmationDialog() {
  return (
    <div className='confirmationDialog'>
      <div className='confirmationDialog__container'>
        <h3 className='confirmationDialog__title'>¿Deseas eliminar este producto de tu carrito?</h3>
        <div className='confirmationDialog__buttonsBox'>
        <button className='button button_type_accept'>
          <h3 className='button__text'>Aceptar</h3>
        </button>
        <button className='button button_type_cancel'> 
           <h3 className='button__text'>Cancelar </h3>
        </button>
        </div>
       
      </div>
    </div>
  );
}

export default ConfirmationDialog;
