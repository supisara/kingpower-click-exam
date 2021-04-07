
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const InlineRadio = ({
    name,
    value,
    setGender }) => {

    return (
        <React.Fragment>
            <Form.Radio
                name={name}
                label='Male'
                value='Male'
                checked={value === 'Male'}
                onChange={(e, { value }) => setGender(name, value)}
            />
            <Form.Radio
                name={name}
                label='Female'
                value='Female'
                checked={value === 'Female'}
                onChange={(e, { value }) => setGender(name, value)}
            />
            <Form.Radio
                name={name}
                label='Unisex'
                value='Unisex'
                checked={value === 'Unisex'}
                onChange={(e, { value }) => setGender(name, value)}
            />
        </React.Fragment>
    )
};

InlineRadio.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setGender: PropTypes.func.isRequired
};

export default InlineRadio;
