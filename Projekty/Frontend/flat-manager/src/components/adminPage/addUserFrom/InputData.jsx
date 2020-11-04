import { Grid,TextField } from '@material-ui/core';
import React from 'react';

const InputData = ({
    onChangeHandler,
    value,
    label,
}) => {
    return (
            <div style={{marginBottom:"3vh"}}>
                <TextField id="outlined-basic" label={label} variant="outlined"  onChange={onChangeHandler} value={value} />
            </div>
        
    );
};

export default InputData;