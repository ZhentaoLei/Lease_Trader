import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Form = () => {
  const [postData, setPostData] = useState({
    email: "",
    title: "",
    city: "",
    monthlypayment: "",
    tags: "",
    img: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Post my car</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            noValidate
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <Typography variant="h5">Create a post</Typography>
            <TextField
              name="email"
              variant="outlined"
              label="email"
              fullWidth
              value={postData.email}
              onChange={(event) =>
                setPostData({ ...postData, email: event.target.value })
              }
            />
            <TextField
              name="title"
              variant="outlined"
              label="title"
              fullWidth
              value={postData.title}
              onChange={(event) =>
                setPostData({ ...postData, title: event.target.value })
              }
            />
            <TextField
              name="city"
              variant="outlined"
              label="city"
              fullWidth
              value={postData.city}
              onChange={(event) =>
                setPostData({ ...postData, city: event.target.value })
              }
            />
            <TextField
              name="monthlypayment"
              variant="outlined"
              label="monthlypayment"
              type="number"
              fullWidth
              value={postData.monthlypayment}
              onChange={(event) =>
                setPostData({ ...postData, monthlypayment: event.target.value })
              }
            />
            <TextField
              name="tags"
              variant="outlined"
              label="tags"
              fullWidth
              value={postData.tags}
              onChange={(event) =>
                setPostData({ ...postData, tags: event.target.value })
              }
            />
            <div className={classes.fileInput}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, img: base64 })
                }
              />
            </div>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Paper>
      </AccordionDetails>
    </Accordion>
  );
};
export default Form;
