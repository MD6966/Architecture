import { Box, Button, Chip, DialogContent, DialogTitle, Divider, TextField, Typography } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editBlocks } from '../../../../store/actions/userActions';
import { useLocation, useNavigate } from 'react-router';

const EditBlocks = () => {
    const { state } = useLocation()
    React.useEffect(() => {
        setFormValues({
            ...formValues,
            block_category_id: state.block_category_id || "",
            title: state.title || "",
            description: state.description || "",
            tags: Array.isArray(state.tags) ? state.tags : [], // Ensure state.tags is an array
            imgs: state.imgs || [],
        })
    }, [state])

    const initialValues = {
        title: "",
        description: "",
        tags: [],
        imgs: [],
        block_category_id: ""

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
    const handleImageChange = (e) => {
        const filesArray = Array.from(e.target.files);
        setSelectedImage(filesArray);
        setFormValues({ ...formValues, imgs: filesArray });
    };


    const handleDeleteChip = (chipToDelete) => () => {
        setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
    };

    const handleAddChip = () => {
        if (inputValue.trim() !== '' && !formValues.tags.includes(inputValue)) {
            setFormValues((prevValues) => ({
                ...prevValues,
                tags: [...prevValues.tags, inputValue],
            }));
            setInputValue('');
        }
    };

    const handleSubmit = (e) => {
        // setLoading(true)
        e.preventDefault()
        dispatch(editBlocks(formValues, state.id)).then((result) => {
            // setLoading(false)
            enqueueSnackbar(result.data.message, {
                variant: 'success'
            })
            navigate('/admin/blocks')
        }).catch((err) => {
            // setLoading(false)
            console.log(err)
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Typography>Update Block</Typography>
                <Divider />


                <div>
                    <label htmlFor="image">Upload images:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange} on image selection
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
                    label="Add Chip"
                    fullWidth
                    // value={inputValue}
                    style={{ marginTop: '20px' }}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddChip();
                        }
                    }}
                    onBlur={handleAddChip}
                />
                <Box sx={{ marginTop: 2 }}>
                    {formValues.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            onDelete={handleDeleteChip(tag)}
                            onClick={() => {
                                console.log(`Clicked on: ${tag}`);
                            }}
                            sx={{ marginRight: 1, marginBottom: 1 }}
                            clickable
                            deleteIcon={<span>&times;</span>}
                        />
                    ))}
                </Box>


                <Button variant={loading ? 'disabled' : 'contained'}
                    type='submit'
                    sx={{ mt: 3, float: 'right' }} className='bg-[#3e50ce]'>
                    {
                        loading ?
                            'Please Wait....' :
                            'Update'
                    }
                </Button>
            </form >
        </>
    )
}

export default EditBlocks