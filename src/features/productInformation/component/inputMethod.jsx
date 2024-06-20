import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputMethod = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '300px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          inputProps={{
            style: {
              fontFamily: 'Popins, sans-serif',
              color: '#20A003',
              fontSize: 'large',
              fontWeight: '500',
            },
          }}
          label="Your Email"
          type="text"
          id="email"
        />
      </div>
    </Box>
  );
};

export default InputMethod;
