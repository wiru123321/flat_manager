import { Grid, TextField } from '@material-ui/core';
import { TextValidator } from 'react-material-ui-form-validator';

import React from 'react';

const InputData = ({
    onChangeHandler,
    value,
    label,
    whatIs,
}) => {
    return (
        <div style={{ marginBottom: "3vh" }}>
            <TextValidator id="outlined-basic" label={label} variant="outlined" onChange={onChangeHandler} value={value} validators={['required', { whatIs }]} errorMessages={['this field is required', 'email is not valid']} />
        </div>

    );
};

export default InputData;