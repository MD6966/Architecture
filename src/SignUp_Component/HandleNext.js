import { Box, Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserSignUp } from '../store/actions/adminActions';
import { setId } from '../store/actions/authActions';
// import { UserSignUp} from './';

const initialValue = {
  name: '',
  email: '',
  password: '',
};
let isValid = true;
const HandleNext = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // console.log(props)
  // const dispatch = useDispatch()
  const [formValues, setFormValues] = useState(initialValue);
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };
  const isFormValid = () => {
    return (
      formValues.name.trim() !== '' &&
      formValues.email.trim() !== '' &&
      formValues.password.trim() !== ''
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNameError('');
    setEmailError('');
    setPasswordError('');


  
    if (!isFormValid()) {
      setIsSubmitting(false);
      if (formValues.name.trim() === '') {
        setNameError('Name is required');
      }
      if (formValues.email.trim() === '') {
        setEmailError('Email is required');
      }
      if (formValues.password.trim() === '') {
        setPasswordError('Password is required');
      }
      return;
    }

    try {
      const res = await dispatch(UserSignUp(formValues));
      dispatch(setId(res.data.payload.id))


      if (res.status === 200) {
        console.log(res, 'Signup was successful');
      } else {
        console.log('Response status is not 200');
      }
    } catch (error) {
      console.log(error);
    }
    setIsSubmitting(false);
    props.createSuccess()
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-72 flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="border rounded-md w-full h-8"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}
        </div>

        <div className="w-72 flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="border rounded-md w-full h-8"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}
        </div>

        <div className="w-72 flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            className="border rounded-md w-full h-8"
          />
          {passwordError && <span className="text-red-500">{passwordError}</span>}
        </div>
        <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }}>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button
            variant="contained"
            className="bg-pink-600"
            type="submit"
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? (
              <CircularProgress
                size={24}
                sx={{ color: 'black'}}
              />
            ) : (
              'Next'
            )}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default HandleNext;
