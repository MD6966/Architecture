import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThreeDots } from 'react-loader-spinner';
import { PostNews } from '../../../../store/actions/userActions';
const AddNews = (props) => {
    const initialValues = {
        title: "",
        description: "",
        author: '',
        // banner_image: '',
        // images: [],



    };
    const [formValues, setFormValues] = useState(initialValues)
    const dispatch = useDispatch()
    const [loading, setloading] = useState(false);
    const [selectedImage, setSelectedImage] = useState([]);
    const [chips, setChips] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [category, setCategory] = React.useState('');
    const [blockCategory, setBlockCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(''); // State to hold selected category

    const handleChange1 = (event) => {
        setSelectedCategory(event.target.value);
    };
    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    // const handleImageChange = (e) => {
    //     const filesArray = Array.from(e.target.files);
    //     setSelectedImage(filesArray);
    //     setFormValues({ ...formValues, banner_image: filesArray });
    // };
    const handleImages = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const handleSubmit = (e) => {
        setloading(true);
        e.preventDefault();
        const formData = new FormData();

        formData.append('title', formValues.title);
        formData.append('description', formValues.description);
        formData.append('author', formValues.author);

        formData.append('banner_image', selectedImage);
        formData.append('images', selectedImage);


        dispatch(PostNews(formData))
            .then((result) => {
                setloading(false);

                setFormValues(initialValues);
                props.close();
                props.createSuccess()
                enqueueSnackbar(result.data.message, {
                    variant: 'success',
                });
            })
            .catch((err) => {
                console.log(err);
                setloading(false);

            });

    };

    // const getBlockCategory = () => {
    //     dispatch(getCategory())
    //         .then((result) => {

    //             setBlockCategory(result.data.payload);
    //         })
    //         .catch((err) => {
    //             console.log('Error fetching categories:', err);
    //         });
    // };

    // useEffect(() => {
    //     getBlockCategory();
    // }, []);

    const handleEdit = (categoryId) => {

        console.log(`Editing category with ID: ${categoryId}`);

    };

    // const handleDelete = (id) => {
    //     // setDelLoading(true)
    //     confirmAlert({
    //         title: 'Delete?',
    //         message: 'Are you sure to want to delete this event ?',
    //         buttons: [
    //             {
    //                 label: 'Yes',
    //                 onClick: () => {
    //                     dispatch(deleteCategory(id)).then((result) => {
    //                         // setDelLoading(false)
    //                         enqueueSnackbar(result.data.message, {
    //                             variant: 'success'
    //                         })

    //                     }).catch((err) => {
    //                         // setDelLoading(false)
    //                         console.log(err)
    //                     });
    //                 }
    //             },
    //             {
    //                 label: 'No',
    //             }

    //         ]
    //     })
    // }
    return (
        <>
            <Box >
                <Dialog open={props.open} onClose={props.close} sx={{ padding: '30px' }} fullWidth>
                    <DialogTitle>Add News</DialogTitle>


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
                        <DialogActions>
                            <Button onClick={props.close} variant='outlined'>Close</Button>

                            <Button type="submit" variant={loading ? 'disabled' : "contained"} className='bg-[#3e50ce]'>
                                {loading ?
                                    <ThreeDots
                                        height="30"
                                        width="30"
                                        radius="9"
                                        color="#fff"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClassName=""
                                        visible={true}
                                    />
                                    :
                                    'Create Blocks'
                                }
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>

            </Box ></>
    )
}

export default AddNews