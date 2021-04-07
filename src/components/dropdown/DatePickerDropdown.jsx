import React from "react";
import PropTypes from 'prop-types';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerDropdown = ({
    onChange,
    onBlur,
    value,
    errorMessage }) => {

    return (
        <div className="field--standard">
            <ReactDatePicker
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                maxDate={new Date()}
                placeholderText="mm/dd/yyyy"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
            />
            <span className="error">
                {errorMessage}
            </span>
        </div>
    )
};

DatePickerDropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    errorMessage: PropTypes.string
};

export default DatePickerDropdown;
