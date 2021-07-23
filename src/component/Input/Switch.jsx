import {useFormikContext } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import { Form } from 'react-bootstrap'

function SwitchInput(props){
    
  const {setFieldValue} = useFormikContext()
  const {name, label, value} = props;
  const [checked, setChecked] = React.useState(value);

  return (
    <React.Fragment>
      <Form.Check 
        type="switch"
        id={name}
        label={label}
        name={name}
        defaultChecked={checked}
        onChange={(event) => {
          setChecked(!checked)
          setFieldValue(name, !checked ? 1 : 0 )
        }} 
      />
    </React.Fragment>
  )
}

SwitchInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default SwitchInput