import React from 'react';
import PropTypes from 'prop-types';

const InlineField = ({
    label,
    name,
    placeholder,
    register,
    errorMessage,
    required
}) => {

    return (
        <React.Fragment>
            <label className="width--fit">
                {label}
                {
                    required &&
                    <span className="required">*</span>
                }
            </label>
            <div className="field--standard">
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    {...register}
                />
                <span className="error">
                    {errorMessage}
                </span>
            </div>
        </React.Fragment>
    )
};

InlineField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    register: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    errorMessage: PropTypes.string,
    required: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

export default InlineField;
