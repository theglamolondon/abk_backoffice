import { ErrorMessage, useFormikContext } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'

function InputFile({name, placeholder}){
    
    const {setFieldValue} = useFormikContext()

    return (
        <React.Fragment>
            <fieldset className="form-group mb-2">
                <label>{placeholder}</label>
                <div className="custom-file">
                    <input 
                        type="file" 
                        className="custom-file-input" 
                        name={name}
                        onChange={(event) => {
                            setFieldValue(name, event.target.files[0])
                        }} 
                    />
                    <label className="custom-file-label">{placeholder}</label>
                </div>
            </fieldset>
            <ErrorMessage name={name} component="div" className="text-danger"/>
        </React.Fragment>
    )
}

InputFile.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default InputFile