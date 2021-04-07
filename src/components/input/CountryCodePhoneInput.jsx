import React from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CountryCodePhoneInput = ({
    onChange,
    value,
    errorsMessage }) => {

    return (
        <div>
            <PhoneInput
                country={'th'}
                autoFormat={false}
                countryCodeEditable={false}
                enableSearch
                disableSearchIcon
                onChange={onChange}
                value={value}
                placeholder='-- Please Selected --'
            />
            <span className="error">
                {errorsMessage}
            </span>
        </div>
    )
};

CountryCodePhoneInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    errorsMessage: PropTypes.string
};

export default CountryCodePhoneInput;
