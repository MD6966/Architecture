import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, Input, Grid, Skeleton } from '@mui/material';

const CreatePinPage = () => {
  const [pinTitle, setPinTitle] = useState('');
  const [pinDescription, setPinDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePinTitleChange = (event) => {
    setPinTitle(event.target.value);
  };

  const handlePinDescriptionChange = (event) => {
    setPinDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    // Handle image selection
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleCreatePin = () => {
    // Handle pin creation logic here (e.g., send data to a server)
    console.log('Pin Title:', pinTitle);
    console.log('Pin Description:', pinDescription);
    console.log('Selected Image:', selectedImage);
    // Reset the form fields
    setPinTitle('');
    setPinDescription('');
    setSelectedImage(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create Pin
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {selectedImage ? (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  style={{ maxWidth: '100%' }}
                />
              ) : (
                <Skeleton
                variant="regular"
               style={{maxWidth: '100%', height: '80%'}}
              />
              )}
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ marginTop: '16px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                value={pinTitle}
                onChange={handlePinTitleChange}
                margin="normal"
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={pinDescription}
                onChange={handlePinDescriptionChange}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreatePin}
                style={{ marginTop: '16px', backgroundColor:'black' }}
              >
                Create Pin
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CreatePinPage;
