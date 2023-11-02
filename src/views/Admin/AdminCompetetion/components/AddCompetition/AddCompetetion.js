import { Box, Grid, TextField, Typography, styled } from '@mui/material'
import React, {useState} from 'react'
import Page from '../../../../../components/page'
const StyledRoot = styled(Box)(({theme})=>({
    minHeight:'100vh',
    padding:theme.spacing(4),
    marginTop: theme.spacing(4)
}))
const initialValues = {
    title:'',
    description:'',
    pdf:'',
    total_prize:'',
    first_prize:'',
    second_price:'',
    third_price:'',
    date:[],
    date_description:[],
    fees:[],
    fees_description:[],
    image:[],
    image_description:[],
    member_image:[],
    member_name:[],
    member_designation:[],
    member_country:[],

}
const AddCompetetion = () => {
    const [formValues, setFormValues] = useState(initialValues)
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    
    const [imageDescription, setImageDescription] = useState('');
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
    const handleImageUpload2 = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setSelectedImage2(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      };
      const [selectedPDF, setSelectedPDF] = useState(null);

const handlePDFUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    setSelectedPDF(file.name);
  }
};
  return (
    <Page title="Add Competition">
        <StyledRoot>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <TextField fullWidth label="Title"/>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <TextField fullWidth label="Description" multiline rows={4}/>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant='h5' sx={{mb:1}}>Upload File</Typography>
    <label htmlFor="pdfFileInput">
        <Box
            border={1}
            borderColor="black"
            borderStyle="dashed"
            borderRadius={1}
            p={2}
            textAlign="center"
            style={{ cursor: 'pointer' }}
        >
            {selectedPDF ? selectedPDF : 'Click to Upload PDF File'}
        </Box>
    </label>
    <input
        type="file"
        id="pdfFileInput"
        accept=".pdf"
        style={{ display: 'none' }}
        onChange={(e) => handlePDFUpload(e)}
    />
</Grid>

                <Grid item xs={6} md={3} lg={3}>
                    <TextField fullWidth label="Total Prize"/>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <TextField fullWidth label="1st Prize"/>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <TextField fullWidth label="2nd Prize"/>
                </Grid>
                <Grid item xs={6} md={3} lg={3}>
                    <TextField fullWidth label="3rd Prize"/>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <TextField fullWidth type="date"/>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <TextField fullWidth label="Date Description"/>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <TextField fullWidth type="date"/>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <TextField fullWidth label="Date Description"/>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <TextField fullWidth label="Fees"/>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <TextField fullWidth label="Fees Description"/>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <TextField fullWidth label="Fees"/>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <TextField fullWidth label="Fees Description"/>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
        <Box
            border={1}
            borderColor="primary.main"
            borderRadius={1}
            p={2}
            textAlign="center"
            onClick={() => {
                document.getElementById(`fileInput1`).click();
            }}
            style={{ cursor: 'pointer' }}
        >
            {selectedImage ? (
                <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />
            ) : (
                'Click to Select Image'
            )}
        </Box>
        <input
            type="file"
            id={`fileInput1`}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
        />
        <TextField
        sx={{mt:1}}
            fullWidth
            label="Image Description"
            multiline
            rows={4}
            value={imageDescription}
            onChange={(e) => setImageDescription(e.target.value)}
        />
    </Grid>
    <Grid item xs={12} md={6} lg={6}>
        <Box
            border={1}
            borderColor="primary.main"
            borderRadius={1}
            p={2}
            textAlign="center"
            onClick={() => {
                document.getElementById(`fileInput2`).click();
            }}
            style={{ cursor: 'pointer' }}
        >
            {selectedImage2 ? (
                <img src={selectedImage2} alt="Selected" style={{ width: '100%' }} />
            ) : (
                'Click to Select Image'
            )}
        </Box>
        <input
            type="file"
            id={`fileInput2`}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload2}
        />
        <TextField
        sx={{mt:1}}
            fullWidth
            label="Image Description"
            multiline
            rows={4}
            value={imageDescription}
            onChange={(e) => setImageDescription(e.target.value)}
        />
    </Grid>
    <Grid item xs={6} md={4} lg={4}>
                    <TextField fullWidth label="Member name"/>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <TextField fullWidth label="Member Designation"/>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                    <TextField fullWidth label="Member Country"/>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant='h5' sx={{mb:2}}>Member Image</Typography>
        <Box
            border={1}
            borderColor="primary.main"
            borderRadius={1}
            p={2}
            textAlign="center"
            onClick={() => {
                document.getElementById(`fileInput2`).click();
            }}
            style={{ cursor: 'pointer' }}
        >
            {selectedImage2 ? (
                <img src={selectedImage2} alt="Selected" style={{ width: '100%' }} />
            ) : (
                'Click to Select Image'
            )}
        </Box>
        <input
            type="file"
            id={`fileInput2`}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload2}
        />
    </Grid>
            </Grid>
        </StyledRoot>
    </Page>
  )
}

export default AddCompetetion
