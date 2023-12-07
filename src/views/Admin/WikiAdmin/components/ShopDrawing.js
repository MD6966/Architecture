import React, { useState } from 'react';
import { Box, Typography, styled, Button, TextField } from '@mui/material';

const StyledRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 2),
}));

const ShopDrawing = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <StyledRoot>
      <Typography variant="h6" textAlign="center" fontWeight="bold">
        Add Shop Drawing
      </Typography>
      <TextField label="Title" fullWidth margin="normal" />
      <input
        type="file"
        id="file-input"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="file-input">
        <Button variant="outlined" component="span" fullWidth>
          Upload PDF
        </Button>
      </label>
      {selectedFile && (
        <iframe
          title="Selected PDF"
          src={URL.createObjectURL(selectedFile)}
          style={{ width: '100%', height: '500px', marginTop: '10px' }}
        />
      )}
      <Button variant='contained' sx={{mt:3}} className='bg-[#414ECF]'>
        Upload
      </Button>
    </StyledRoot>
  );
};

export default ShopDrawing;
