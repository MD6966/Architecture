import React, { useState } from 'react';
import {
  Box,
  Button,
  styled,
  Typography,
  TextField,
} from '@mui/material';

const StyledRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 2),
}));

const ArcData = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [boxes, setBoxes] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleAddSpecs = () => {
    setBoxes([...boxes, {}]);
  };

  const handleImageUpload = (index) => (event) => {
    const file = event.target.files[0];
    setBoxes((prevBoxes) => {
      const newBoxes = [...prevBoxes];
      newBoxes[index].selectedImage = file;
      return newBoxes;
    });
  };

  return (
    <StyledRoot>
      <Typography variant="h6" textAlign="center" fontWeight="bold">
        Add Arch Data
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
          style={{ width: '100%', height: '200px', marginTop: '10px' }}
        />
      )}

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        className="bg-[#414ECF]"
        onClick={handleAddSpecs}
      >
        Add Specs
      </Button>

      {boxes.map((box, index) => (
        <Box key={index} sx={{ border: '1px solid #000', mt: 2, p: 1 }}>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '40%', pr: 1 }}>
              <label htmlFor={`image-input-${index}`}>
                <Button variant="outlined" fullWidth component="span">
                  Upload Image
                </Button>
              </label>
              <input
                type="file"
                id={`image-input-${index}`}
                style={{ display: 'none' }}
                onChange={handleImageUpload(index)}
              />
              {box.selectedImage && (
                <img
                  src={URL.createObjectURL(box.selectedImage)}
                  alt={`Selected Image ${index + 1}`}
                  style={{ width: '100%', marginTop: '10px', height:'300px', objectFit:'cover' }}
                />
              )}
            </Box>
            <Box sx={{ width: '60%' }}>
              <TextField label="Title" fullWidth margin="normal" />
            </Box>
          </Box>
        </Box>
      ))}
      <Button fullWidth variant='contained' className='bg-[#414ecf]' sx={{mt:2}}>
        Submit
      </Button>
    </StyledRoot>
  );
};

export default ArcData;
