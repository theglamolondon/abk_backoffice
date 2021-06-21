import React, { useState } from 'react';
import PropsType from 'prop-types'
import { Multiselect } from 'multiselect-react-dropdown';
import { useFormikContext } from 'formik';


function SelectMultiple({name, data, selected, display}){
    const [items, setItems]  = useState([])
    const {setFieldValue} = useFormikContext()
    const onSelect = (selectedList, selectedItem) => {
        items.push(selectedItem)
        setItems(items)
        setFieldValue(name, items)
    }
    
    const onRemove = (selectedList, removedItem) => {
        let key = null
        items.forEach((item, index) => {
            if(item.id === removedItem.id){
                key = index
            }
        })

        if(key !== null){
            items.splice(key, 1)
        }
        setFieldValue(name, items)
    }

    return (
        <Multiselect
            name={name}
            options={data} // Options to display in the dropdown
            selectedValues={selected} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={onRemove} // Function will trigger on remove event
            displayValue={display} // Property name to display in the dropdown options
            />
    )
}

SelectMultiple.propsType = {
    data: PropsType.array.isRequired,
    selected: PropsType.array,
    name: PropsType.string.isRequired,
    display: PropsType.string.isRequired,
}

SelectMultiple.defaultValue = {
    selected: []
}

export default SelectMultiple
