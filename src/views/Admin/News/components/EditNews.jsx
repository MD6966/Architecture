import React from "react";
import { useLocation, useNavigate } from "react-router";
import Page from "../../../../components/page";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { editNews } from "../../../../store/actions/userActions";
import { useSnackbar } from "notistack";
const StyledRoot = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(4),
}));
const EditNews = () => {
  React.useEffect(() => {
    setFormValues({
      ...formValues,
      title: state.title,
      description: state.description,
      author: state.author,
      banner_image: state.banner_image,
      images: state.images,
    });
    // setSelectedImage()
  }, []);
  const initialValues = {
    title: "",
    description: "",
    author: "",
    banner_image: {},
    images: [],
  };
  const { state } = useLocation();
  //   console.log("state=========", state);
  const [formValues, setFormValues] = React.useState(initialValues);
  const [bannerImage, setBannerImage] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = React.useState(false);
  console.log("formValues=========", formValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBannerImageChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormValues({ ...formValues, [name]: file });
    setBannerImage(file);
  };

  const removeBannerImage = () => {
    console.log("in removeBanner");
    setFormValues({ ...formValues, banner_image: "" });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    dispatch(editNews(formValues, state.id))
      .then((result) => {
        setLoading(false);
        enqueueSnackbar(result.data.message, {
          variant: "success",
        });
        navigate("/admin/news");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <Page title="Edit New">
      <StyledRoot>
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Update News
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              height: "40vh",
              border: "1px dashed grey",
              position: "relative",
              marginTop: 2,
            }}
          >
            {formValues.banner_image && (
              <>
                <IconButton
                  onClick={removeBannerImage}
                  sx={{
                    width: "auto",
                    position: "absolute",
                    top: -10,
                    zIndex: 20,
                    right: -10,
                    padding: "5px",
                    borderRadius: "50%",
                    height: "auto",
                    "&.MuiIconButton-root": {
                      backgroundColor: "#ff0000",
                    },
                  }}
                >
                  <CloseIcon
                    sx={{
                      fontSize: 18,
                      color: "#fff",
                    }}
                  />
                </IconButton>
                <div
                  style={{
                    backgroundImage: bannerImage
                      ? `url(${URL.createObjectURL(bannerImage)}`
                      : `url(${process.env.REACT_APP_URL}${formValues.banner_image}`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                  }}
                ></div>
              </>
            )}
          </Box>
          <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
            <input
              type="file"
              name="banner_image"
              accept="image/*"
              id="image-upload"
              style={{ display: "none" }}
              onChange={handleBannerImageChange}
            />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button variant="outlined" component="span">
                Update Banner Image
              </Button>
            </Box>
          </label>

          <TextField
            label="Author"
            type="text"
            sx={{ mt: 2 }}
            fullWidth
            name="author"
            placeholder={"New's Author"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            value={formValues.author}
            onChange={handleChange}
            required
          />
          <TextField
            label="Title"
            fullWidth
            sx={{ mt: 2 }}
            name="title"
            placeholder={"New's Title"}
            value={formValues.title}
            onChange={handleChange}
            required
          />

          <TextField
            label="Description"
            fullWidth
            multiline
            rows={4}
            sx={{ mt: 2 }}
            name="description"
            placeholder={"New's Description"}
            value={formValues.description}
            onChange={handleChange}
            required
          />

          <Button
            variant={loading ? "disabled" : "contained"}
            type="submit"
            sx={{ mt: 3, float: "right" }}
            className="bg-[#3e50ce]"
          >
            {loading ? "Please Wait...." : "Update"}
          </Button>
        </form>
      </StyledRoot>
    </Page>
  );
};

export default EditNews;
