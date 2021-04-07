/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types';

const CitizenIdInput = ({
    name,
    value,
    onChange,
    errorsMessage }) => {

    const initCitizenId = {
        firstField: '',
        secondField: '',
        thirdField: '',
        fourthField: '',
        fifthField: ''
    };
    const [citizenId, setCitizenId] = useState(initCitizenId);

    const firstInput = useRef(null);
    const secondInput = useRef(null);
    const thirdInput = useRef(null);
    const fourthInput = useRef(null);
    const fifthInput = useRef(null);

    useEffect(() => {
        if (value) {
            setCitizenId({
                firstField: value.slice(0, 1),
                secondField: value.slice(1, 5),
                thirdField: value.slice(5, 10),
                fourthField: value.slice(10, 12),
                fifthField: value.slice(12, 13)
            });
        } else {
            setCitizenId(initCitizenId);
        }
    }, [value]);

    useEffect(() => {
        const citizenIdNumber = Object.values(citizenId).join("");
        onChange(name, citizenIdNumber);
    }, [citizenId]);

    const preventNonNumericalInput = (e) => {
        const key = e.key || e.nativeEvent.key;
        const numberRegex = /^[0-9]+$/;

        if (!key.match(numberRegex)) {
            e.preventDefault();
        }
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        const firstLength = firstInput.current.value.length;
        const secondLength = secondInput.current.value.length;
        const thirdLength = thirdInput.current.value.length;
        const fourthLength = fourthInput.current.value.length;
        const fifthLength = fifthInput.current.value.length;

        switch (name) {
            case "firstField":
                if (firstLength === 1) {
                    secondInput.current.focus();
                }
                break;
            case "secondField":
                if (secondLength === 4) {
                    thirdInput.current.focus();
                } else if (secondLength === 0) {
                    firstInput.current.focus();
                }
                break;
            case "thirdField":
                if (thirdLength === 5) {
                    fourthInput.current.focus();
                } else if (thirdLength === 0) {
                    secondInput.current.focus();
                }
                break;
            case "fourthField":
                if (fourthLength === 2) {
                    fifthInput.current.focus();
                } else if (fourthLength === 0) {
                    thirdInput.current.focus();
                }
                break;
            case "fifthField":
                if (fifthLength === 0) {
                    fourthInput.current.focus();
                }
                break;
            default:
                break;
        }

        setCitizenId((citizenId) => ({ ...citizenId, [name]: value }));
    }

    return (
        <div>
            <div className="input--inline">
                <input
                    className={`custom character--one ${errorsMessage && 'error'}`}
                    ref={firstInput}
                    name="firstField"
                    type="text"
                    maxLength="1"
                    value={citizenId.firstField}
                    onChange={handleOnChange}
                    onKeyPress={preventNonNumericalInput}
                />
                <span className="mg--horizontal">-</span>
                <input
                    className={`custom character--four ${errorsMessage && 'error'}`}
                    ref={secondInput}
                    name="secondField"
                    type="text"
                    maxLength="4"
                    value={citizenId.secondField}
                    onChange={handleOnChange}
                    onKeyPress={preventNonNumericalInput}
                />
                <span className="mg--horizontal">-</span>
                <input
                    className={`custom character--five ${errorsMessage && 'error'}`}
                    ref={thirdInput}
                    name="thirdField"
                    type="text"
                    maxLength="5"
                    value={citizenId.thirdField}
                    onChange={handleOnChange}
                    onKeyPress={preventNonNumericalInput}
                />
                <span className="mg--horizontal">-</span>
                <input
                    className={`custom character--two ${errorsMessage && 'error'}`}
                    ref={fourthInput}
                    name="fourthField"
                    type="text"
                    maxLength="2"
                    value={citizenId.fourthField}
                    onChange={handleOnChange}
                    onKeyPress={preventNonNumericalInput}
                />
                <span className="mg--horizontal">-</span>
                <input
                    className={`custom character--one ${errorsMessage && 'error'}`}
                    ref={fifthInput}
                    name="fifthField"
                    type="text"
                    maxLength="1"
                    value={citizenId.fifthField}
                    onChange={handleOnChange}
                    onKeyPress={preventNonNumericalInput}
                />
            </div>

            <span className="error">
                {errorsMessage}
            </span>
        </div>
    )
};

CitizenIdInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errorsMessage: PropTypes.string.isRequired
};

export default CitizenIdInput;
