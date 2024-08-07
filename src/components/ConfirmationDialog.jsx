import React from 'react';
import { useState } from 'react';

function ConfirmationDialog( {onClose, onResponse}) {


const handleResponse = (answer) => {
  
    onResponse(answer);
    console.log(answer);
 
}

  return (
    <div className='confirmationDialog' onClick={onClose}>
      <div className='confirmationDialog__container'>
        <h3 className='confirmationDialog__title'>¿Deseas eliminar este producto de tu carrito?</h3>
        <div className='confirmationDialog__buttonsBox'>
        <button className='button button_type_accept' onClick={ () => handleResponse(true)}>
          <h3 className='button__text'>Aceptar</h3>
        </button>
        <button className='button button_type_cancel' onClick={ ()=>handleResponse(false)}> 
           <h3 className='button__text'>Cancelar </h3>
        </button>
        </div>
       
      </div>
    </div>
  );
}

export default ConfirmationDialog;
