// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import Button from '@mui/material/Button';
// import { Alert, Snackbar, StepButton, useTheme } from "@mui/material";
// import { RiGoogleFill } from 'react-icons/ri';
// import { LiaFacebookF } from 'react-icons/lia';
// import { TiSocialLinkedin } from 'react-icons/ti';
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';

// import { useState } from 'react';
// import { makeStyles } from '@mui/styles';
// import { UserSignUp, verificationCode } from './store/actions/adminActions';
// const useStyles = makeStyles((theme) => ({
//   customLine: {
//     position: 'relative',
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       width: '100%',
//       height: '2px', // Adjust as needed
//       background: '#1976D2', // Replace with your desired line color
//       zIndex: -1,
//     },
//   },
// }));

// const steps = [
//   '', '', '' // Update step labels
// ];
// const initialValues = {
//   name: '',
//   email: '',
//   password: '',
//   otp: ''
// }

// export default function HorizontalLinearAlternativeLabelStepper() {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [formValues, setFormValues] = React.useState(initialValues)
//   const [snackbarMessage, setSnackbarMessage] = useState('')
//   const [snackbarOpen, setSnackbarOpen] = useState(false)
//   const [disableButtons, setDisableButtons] = useState(false);
//   // const [emailError, setEmailError] = useState('')
//   const [user_id, setUserId] = useState('');

//   // const [passwordError, setPasswordError] = useState('')
//   const [showVerificationCode, setShowVerificationCode] = React.useState(false);
//   // const [verificationCodeError, setVerificationCodeError] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [verificat, SetverificationCode] = useState('');
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value })
//   }
//   const handleSignupSuccess = () => {
//     setSnackbarMessage("You are Registered")
//     setSnackbarOpen(true)
//   }
//   const handleClose = () => {
//     setSnackbarOpen(false)
//   }
//   const handleStepClick = (step) => {
//     setActiveStep(step);
//   };
//   const handleParagraphClick = () => {
//     setDisableButtons(true); // Disable buttons when the paragraph is clicked
//   }
//   const dispatch = useDispatch()
//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);

//   };


//   const handleVerificationCodeSubmit = async (e) => {
//     console.log(formValues.otp, "FUNC")
//     e.preventDefault()
//     let isValid = true
//     if (formValues.verificationCode === '') {
//       SetverificationCode('Password is required');
//       isValid = false;
//     }

//     if (!isValid) {
//       return;
//     }
//     try {
//       const res = await dispatch(verificationCode(formValues.otp, user_id));

//       if (res.status === 200) {
//         handleSignupSuccess();
//         console.log(res, 'Signup was');
//         setShowVerificationCode(true);
//         navigate('/login')
//         console.log(res)
//       } else {
//         console.log('Response status is not 200');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleLoginButtonClick = () => {

//     navigate('/login');
//   };

//   const handleNext = async (e) => {
//     e.preventDefault();
//     setNameError('');
//     setEmailError('');
//     setPasswordError('');

//     let isValid = true;

//     if (formValues.name === '') {
//       setNameError('Name is required');
//       isValid = false;
//     }

//     if (formValues.email === '') {
//       setEmailError('Email is required');
//       isValid = false;
//     }

//     if (formValues.password === '') {
//       setPasswordError('Password is required');
//       isValid = false;
//     }

//     if (!isValid) {
//       return;
//     }

//     try {
//       const res = await dispatch(UserSignUp(formValues));
//       console.log(res.data.payload.id)
//       setUserId(res.data.payload.id)

//       if (res.status === 200) {
//         handleSignupSuccess();
//         console.log(res, 'Signup was successful');
//         setShowVerificationCode(true);
//         setActiveStep((prevStep) => prevStep + 1);
//       } else {
//         console.log('Response status is not 200');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   const classes = useStyles();

//   return (

//     <>

//       {/* {activeStep === 2 && (
//         <Login />
//       )} */}

//       <div className="min-h-screen flex flex-col items-center justify-center ">

//         {/* Form */}

//         <Box>
//        <Stepper
//   activeStep={activeStep}
//   sx={{ backgroundColor: 'white' }}
//   className="custom-stepper"
//   alternativeLabel
  
// >
//   {steps.map((label, index) => (
//     <Step key={index}>
//       <StepButton
//         disabled={index === 0 || index === 1 || index === 2}
//         onClick={() => handleStepClick(index)}
//         sx={{ borderBottom: 'none' }} /* Hide the bottom line of the step button */
       
    
//       >
//         {label}
//       </StepButton>
//       connector= {<div className={classes.customConnector} />}
//     </Step>
//   ))}
// </Stepper>

//           <div onClick={handleParagraphClick}>
//             <p>{(steps[activeStep])}</p>
//           </div>
//           <Box>
//             {/* Add Back button logic here */}
//           </Box>
//         </Box>
//         <div className='flex justify-between pt-6'>
//           <h4 className="mb-4 text-xl ">Sign Up</h4>
//           <Link to='/login' className="mb-4 text-xl underline">Login</Link>
//         </div>

//         {/* Conditionally render form fields based on the step */}
//         <form onSubmit={handleNext} className="flex flex-col gap-1.5 p-8 rounded-lg">
//           {activeStep === 0 && (
//             <div className="w-72 flex flex-col gap-2">
//               <label htmlFor="name">Name</label>
//               <input type="text" name="name" value={formValues.name} onChange={handleChange} className="border rounded-md w-full h-8" />
//               {nameError && <span className="text-red-500">{nameError}</span>}
//             </div>
//           )}

//           {activeStep === 0 && (
//             <div className="w-72 flex flex-col gap-2">
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} className="border rounded-md w-full h-8" />
//               {emailError && <span className="text-red-500">{emailError}</span>}
//             </div>
//           )}

//           {activeStep === 0 && (
//             <div className="w-72 flex flex-col gap-2">
//               <label htmlFor="password">Password</label>
//               <input type="password" name="password" value={formValues.password} onChange={handleChange} className="border rounded-md w-full h-8" />
//               {passwordError && <span className="text-red-500">{passwordError}</span>}

//               {/* {passwordError && <span className="text-red-500">{passwordError}</span>} */}
//             </div>

//           )}
//           {activeStep === 0 &&
//             <Button
//               variant="contained"
//               className="bg-pink-600"
//               type="submit"
//               disabled={disableButtons}
//             >
//               Next
//             </Button>
//           }

//         </form>
//         <form onSubmit={(e) => handleVerificationCodeSubmit(e, user_id)}>
//           {showVerificationCode && activeStep === 1 && (
//             <div className="w-72 flex flex-col gap-2">
//               <label htmlFor="verificationCode">Verification Code</label>
//               <input type="text" id="verificationCode" name="otp" value={formValues.otp} onChange={handleChange} className="border rounded-md w-full h-8" />
//               {/* {verificationCodeError && <span className="text-red-500">{verificationCodeError}</span>} */}
//             </div>
//           )}
//           {activeStep === 1 &&
//             <Button
//               variant="contained"
//               className="bg-pink-600"
//               type="submit"
//               disabled={disableButtons}
//             >
//               Next
//             </Button>
//           }

//         </form>




//         {activeStep > 0 && (
//           <Link
//             className='text-red-600 underline flex justify-center items-center'
//             onClick={handleBack}
//           >
//             Back
//           </Link>
//         )}


//         {/* Forget Password */}
//         <div className="flex justify-end text-gray-500">
//           <h4>Forget Password</h4>
//         </div>

//         {/* OR Separator */}
//         <div className="inline-flex items-center justify-center w-full">
//           <hr className="w-60 h-px my-5 bg-gray-200 border-0 dark:bg-gray-400" />
//           <span className="absolute px-3 font-medium text-black -translate-x-1/2 border-2 border-gray-400 bg-white left-1/2 dark:text-black rounded-md dark:bg-white">OR</span>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex justify-center gap-11 ">
//           <RiGoogleFill className="h-8 w-8 border-2 border-pink-600 rounded-full p-1 text-pink-600 bg-white" />
//           <LiaFacebookF className="h-8 w-8 border-2 border-blue-600 rounded-full p-1 text-blue-600 bg-white" />
//           <TiSocialLinkedin className="h-8 w-8 border-2 border-blue-600 rounded-full p-1 text-blue-600 bg-white" />
//         </div>

//         {/* Already a user */}
//         <div className="flex justify-center items-center">
//           Already a user? &nbsp; <Link color="customColors1" className="underline" to='/login'>LOGIN</Link>
//         </div>






//       </div >
//       <Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import HandleNext from './SignUp_Component/HandleNext';
import HandleVerification from './SignUp_Component/HandleVerification';
import { Link } from 'react-router-dom';
import { RiGoogleFill } from 'react-icons/ri';
import { LiaFacebookF } from 'react-icons/lia';
import { TiSocialLinkedin } from 'react-icons/ti';

const steps = ['', '', ''];

export default function HorizontalLinearStepper() {
  const [user_id, setUserId] = React.useState('');
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate('/login')
  }
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    // setFormValues({ ...formValues, ...newFormValues });
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
    <div style={{ width: '340px',borderRadius:'5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', padding: '25px'}}>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className='flex justify-between pt-6'>
          <h4 className="mb-4 text-xl">Sign Up</h4>
          <Link to='/login' className="mb-4 text-xl underline">Login</Link>
        </div>
        {activeStep === 0 && (
  <HandleNext createSuccess = {handleNext} setUserId={setUserId} />
)}

  
        {activeStep === 1 && (
          <HandleVerification createSuccess = {handleNext} user_id = {user_id}  />
        )}
  
        {activeStep === 2 && (
          handleNavigate()
        )}
  
        <React.Fragment>
        {activeStep > 0 && (
           <Link
             className='text-red-600 underline flex justify-center items-center'
             onClick={handleBack}
           >
             Back
           </Link>
         )}
        
          <div className="flex justify-end text-gray-500">
           <h4>Forget Password</h4>
         </div>

         <div className="inline-flex items-center justify-center w-full">
           <hr className="w-60 h-px my-5 bg-gray-200 border-0 dark:bg-gray-400" />
           <span className="absolute px-3 font-medium text-black -translate-x-1/2 border-2 border-gray-400 bg-white left-1/2 dark:text-black rounded-md dark:bg-white">OR</span>
         </div>

         <div className="flex justify-center gap-11 ">
           <RiGoogleFill className="h-8 w-8 border-2 border-pink-600 rounded-full p-1 text-pink-600 bg-white" />
           <LiaFacebookF className="h-8 w-8 border-2 border-blue-600 rounded-full p-1 text-blue-600 bg-white" />
           <TiSocialLinkedin className="h-8 w-8 border-2 border-blue-600 rounded-full p-1 text-blue-600 bg-white" />
         </div>
         <div className="flex justify-center items-center">
           Already a user? &nbsp; <Link color="customColors1" className="underline" to='/login'>LOGIN</Link>
         </div>
        </React.Fragment>
      </Box>
    </div>
  </div>
  
  );
}
