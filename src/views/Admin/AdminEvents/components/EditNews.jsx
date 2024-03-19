import { Box, Button, Chip, DialogContent, DialogTitle, Divider, TextField, Typography } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editBlocks, editNews } from '../../../../store/actions/userActions';
import { useLocation, useNavigate } from 'react-router';

const EditNews = () => {
    const { state } = useLocation()
    React.useEffect(() => {
        setFormValues({
            ...formValues,

            title: state.title || "",
            description: state.description || "",
            author: state.author || "",
            banner_image: state.banner_image || "",
            images: state.images || [],
        })
    }, [state])

    const initialValues = {
        title: "",
        description: "",
        images: [],
        author: '',
        banner_image: '',


    };
    const [formValues, setFormValues] = useState(initialValues)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setloading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [chips, setChips] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleImages = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };



    const handleSubmit = (e) => {
        // setLoading(true)
        e.preventDefault()
        dispatch(editNews(formValues, state.id)).then((result) => {
            // setLoading(false)
            enqueueSnackbar(result.data.message, {
                variant: 'success'
            })
            navigate('/admin/news')
        }).catch((err) => {
            // setLoading(false)
            console.log(err)
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <div>

                        <label htmlFor="image">Upload images:</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                        />

                    </div>
                    <TextField
                        label="Title"
                        fullWidth
                        sx={{ mt: 2 }}
                        name="title"
                        required
                        value={formValues.title}
                        onChange={handlechange}
                    />
                    <TextField
                        label="Description"
                        fullWidth
                        sx={{ mt: 2 }}
                        name="description"
                        required
                        value={formValues.description}
                        onChange={handlechange}
                    />

                    <TextField
                        label="author"
                        fullWidth
                        sx={{ mt: 2 }}
                        name="author"
                        required
                        value={formValues.author}
                        onChange={handlechange}
                    />
                    <div>

                        <label htmlFor="image">Upload images:</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            multiple
                            onChange={handleImages}
                        />

                    </div>


                </DialogContent>
                <Button variant={loading ? 'disabled' : 'contained'}
                    type='submit'
                    sx={{ mt: 3, float: 'right' }} className='bg-[#3e50ce]'>
                    {
                        loading ?
                            'Please Wait....' :
                            'Update'
                    }
                </Button>
            </form>
        </>
    )
}

export default EditNews