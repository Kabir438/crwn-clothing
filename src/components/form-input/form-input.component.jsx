import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import './form-input.styles.scss';

class FormInput extends React.Component {
  render() {
    const { handleChange, label, icon, changeType, type, value, ...otherProps } = this.props
    console.log(value, 'value', '.')
    return (
    <div className='group' style={{whiteSpace: 'nowrap'}}>
      {label ? (
        <label
        className={`${
          value.length ? 'shrink' : ''
        } form-input-label`}
          style={{marginTop: icon ? '14px' : null}}
        >
          {label}
        </label>
      ) : null}
      <input className='form-input' onChange={handleChange} type={type} {...otherProps} style={{display: icon ? 'inline-block' : 'block'}}/>
      
    {icon ? (
        <FontAwesomeIcon icon={faEye} onClick={changeType} style={{marginLeft: '-30px', cursor: 'pointer'}}/>
      ) : null}
    </div>
    )
  }
};

export default FormInput;
