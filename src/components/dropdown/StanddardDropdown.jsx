import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import nationalityOptions from './NationalityOptions';

const titleOptions = [
    {
        key: 'Mr.',
        text: 'Mr.',
        value: 'Mr.'
    },
    {
        key: 'Mrs.',
        text: 'Mrs.',
        value: 'Mrs.'
    },
    {
        key: 'Miss',
        text: 'Miss',
        value: 'Miss'
    }
];

const StanddardDropdown = ({
    onChange,
    value,
    errorMessage,
    name }) => {

    let options;
    let placeholder;
    switch (name) {
        case 'title':
            options = titleOptions;
            break;
        case 'nationality':
            options = nationalityOptions;
            placeholder = '-- Please Selected --';
            break;
        default:
            break;
    }

    return (
        <div className="field--standard">
            <Dropdown
                placeholder={placeholder}
                fluid
                search
                selection
                options={options}
                value={value}
                onChange={(e) => onChange(e.target.innerText)}
            />
            <span className="error">
                {errorMessage}
            </span>
        </div>
    )
};

StanddardDropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    name: PropTypes.string.isRequired
};

export default StanddardDropdown;
