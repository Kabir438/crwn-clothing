import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, icon, changeType, type, ...otherProps }) => (
  <div className='group' style={{whiteSpace: 'nowrap'}}>
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
        style={{marginTop: icon ? '27px' : null}}
      >
        {label}
      </label>
    ) : null}
    <input className='form-input' onChange={handleChange} type={type} {...otherProps} style={{display: icon ? 'inline-block' : 'block'}}/>
    
  {icon ? (
      <FontAwesomeIcon icon={faEye} onClick={changeType} style={{marginLeft: '-30px', cursor: 'pointer'}}/>
    ) : null}
  </div>
);

export default FormInput;
