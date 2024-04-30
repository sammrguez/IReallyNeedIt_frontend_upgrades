import React from 'react';

function InfoTooltip({ header, messagge, shouldBeInfoOpen, onClose }) {
  return (
    <div className={`popup ${shouldBeInfoOpen ? 'popup_opened' : ''}`}>
      <div className='overlay' onClick={onClose}></div>

      <div className='infoTool'>
        <h2 className='infoTool__header'>{header}</h2>

        <p className='infoTool__text'>{messagge}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
