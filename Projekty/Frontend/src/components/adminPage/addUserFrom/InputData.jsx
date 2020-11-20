import { Grid, TextField } from '@material-ui/core';
import { TextValidator } from 'react-material-ui-form-validator';

import React from 'react';

const InputData = ({
    onChangeHandler,
    value,
    label,
    whatIs,
    name
}) => {
    return (
        <div style={{ marginBottom: "3vh" }}>
            <TextField id="outlined-basic" label={label} variant="outlined" onChange={onChangeHandler} value={value} name={name} />
        </div>

    );
};

export default InputData;