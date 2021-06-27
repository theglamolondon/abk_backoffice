import React from 'react'
import PropTypes from 'prop-types';

function DateFormat({date}){
    return (
        <React.Fragment>
            {new Intl.DateTimeFormat("fr-FR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }).format(Date.parse(date))}
        </React.Fragment>
    )
}

DateFormat.propTypes = {
    date: PropTypes.string.isRequired
}

export default DateFormat