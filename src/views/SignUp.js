import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import { Alert, Snackbar, useTheme } from "@mui/material";
import { RiGoogleFill } from 'react-icons/ri';
import { LiaFacebookF } from 'react-icons/lia';
import { TiSocialLinkedin } from 'react-icons/ti';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { UserSignUp } from '../store/actions/adminActions';
import { useState } from 'react';

const steps = [
  '', '', '' // Update step labels
];
const initialValues = {
  name: '',
  email: '',
  password: '',
  verificationCode:''
}

export default function HorizontalLinearAlternativeLabelStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = React.useState(initialValues)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [disableButtons, setDisableButtons] = useState(false);
  // const [emailError, setEmailError] = useState('')
  // const [passwordError, setPasswordError] = useState('')
  const [showVerificationCode, setShowVerificationCode] = React.useState(false); 
  // const [verificationCodeError, setVerificationCodeError] = useState('');

  const theme = useTheme();
  const navigate = useNavigate();
  const handleChange = (e) =>{
    const{name, value} = e.target;
    setFormValues({...formValues,[name]:value})
  }
  const handleSignupSuccess = ()=>{
    setSnackbarMessage("You are Registered")
setSnackbarOpen(true)
  }
const handleClose = ()=> {
setSnackbarOpen(false)
}
  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  const handleParagraphClick = () => {
    setDisableButtons(true); // Disable buttons when the paragraph is clicked
  }
 const handleNext = () => {  
      setShowVerificationCode(true);
      setActiveStep((prevStep) => prevStep + 1);
    
  }
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);

  };

  
  const handleVerificationCodeSubmit = () => {
  
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleLoginButtonClick = () => {
  
    navigate('/login');
  };
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setShowVerificationCode('')
    // if (!/^[0-9]{6}$/.test(formValues.verificationCode)) {
    //   setVerificationCodeError('Verification code must be a 6-digit number');
    //   return;
    
  
    try {
      const res = await dispatch(UserSignUp(formValues));

      
      if (res.status === 200) {
       
        handleSignupSuccess()
        console.log(res, 'sb ok ha');
      } else {
        console.log('Response status is not 200');
      }
    } catch (error) {
      console.log(error);
    }
  }
  


  return (

    <>

      {/* {activeStep === 2 && (
        <Login />
      )} */}

      <div className="min-h-screen flex flex-col items-center justify-center ">

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 shadow-lg p-8 rounded-lg">
          <Box>
            <Stepper className='flex justify-center items-center'
              sx={{
                backgroundColor: 'white',
              }} alternativeLabel activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={index}
                  onClick={() => handleStepClick(index)}>
                  <StepLabel completed={index < activeStep ? 'true' : 'false'}
                    sx={{
                      '&.MuiStepLabel-active': {
                        color: theme.palette.secondary.main, // Replace with your active color
                      },
                    }}
                  >{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div onClick={handleParagraphClick}>
          <p>{console.log(steps[activeStep])}</p>
        </div>
            <Box>
              {/* Add Back button logic here */}
            </Box>
          </Box>
          <div className='flex justify-between pt-6'>
            <h4 className="mb-4 text-xl ">Sign Up</h4>
            <Link to='/login' className="mb-4 text-xl underline">Login</Link>
          </div>

          {/* Conditionally render form fields based on the step */}
          {activeStep === 0 && (
            <div className="w-72 flex flex-col gap-2">
              <label htmlFor="email">Name</label>
              <input type="text" name="name" value={formValues.name} onChange={handleChange} className="border rounded-md w-full h-8" />
            </div>
          )}

          {activeStep === 0 && (
            <div className="w-72 flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className="border rounded-md w-full h-8" />
              {/* {emailError && <span className="text-red-500">{emailError}</span>} */}
            </div>
          )}

          {activeStep === 0 && (
            <div className="w-72 flex flex-col gap-2">
              <label htmlFor="email">Password</label>
              <input type="password" name="password" value={formValues.password} onChange={handleChange} className="border rounded-md w-full h-8" />
              <div className='flex justify-center items-center text-sm text-gray-700' >
                Must be 8 or More characters and contain at least 1 number and 1 special character
              </div>
              {/* {passwordError && <span className="text-red-500">{passwordError}</span>} */}
            </div>
          )}

{showVerificationCode && activeStep === 1 && (
    <div className="w-72 flex flex-col gap-2">
      <label htmlFor="verificationCode">Verification Code</label>
      <input type="text" id="verificationCode" name="verificationCode" value={formValues.verificationCode} onChange={handleChange} className="border rounded-md w-full h-8" />
      {/* {verificationCodeError && <span className="text-red-500">{verificationCodeError}</span>} */}
    </div>
  )}

  <Button
    variant="contained"
    className="bg-pink-600"
    type='submit'
    onClick={
      activeStep === steps.length - 1
      ? () => {
navigate('/login')
      }
      : activeStep === 1
        ? handleLoginButtonClick
        : showVerificationCode
          ? handleVerificationCodeSubmit
          : handleNext
  }
  disabled={disableButtons}
          
  >
    Next
  </Button>
          <Box>
            
            {activeStep > 0 && (
              <Link
                className='text-red-600 underline flex justify-center items-center'
                onClick={handleBack}
              >
                Back
              </Link>
            )}
          </Box>

          {/* Forget Password */}
          <div className="flex justify-end text-gray-500">
            <h4>Forget Password</h4>
          </div>

          {/* OR Separator */}
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-60 h-px my-5 bg-gray-200 border-0 dark:bg-gray-400" />
            <span className="absolute px-3 font-medium text-black -translate-x-1/2 border-2 border-gray-400 bg-white left-1/2 dark:text-black rounded-md dark:bg-white">OR</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-11 ">
            <RiGoogleFill className="h-8 w-8 border-2 border-pink-600 rounded-full p-1 text-pink-600 bg-white" />
            <LiaFacebookF className="h-8 w-8 border-2 border-blue-600 rounded-full p-1 text-blue-600 bg-white" />
            <TiSocialLinkedin className="h-8 w-8 border-2 border-blue-600 rounded-full p-1 text-blue-600 bg-white" />
          </div>

          {/* Already a user */}
          <div className="flex justify-center items-center">
            Already a user? &nbsp; <Link color="customColors1" className="underline" to='/login'>LOGIN</Link>
          </div>

        </form>

      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
{snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}