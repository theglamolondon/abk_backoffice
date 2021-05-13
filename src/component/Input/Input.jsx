import { ErrorMessage, useFormikContext } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'

function InputFile({name, placeholder}){
    
    const {setFieldValue} = useFormikContext()

    return (
        <React.Fragment>
            <fieldset className="form-group position-relative mb-2">
                <input 
                    type="file" 
                    className="form-control form-control-lg" 
                    name={name} 
                    placeholder={placeholder} 
                    onChange={(event) => {
                        setFieldValue(name, event.target.files[0])
                    }} 
                />
            </fieldset>
            <ErrorMessage name={name} component="div" />
        </React.Fragment>
    )
}

InputFile.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default InputFile