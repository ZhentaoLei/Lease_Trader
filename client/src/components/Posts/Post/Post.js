import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import moment from "moment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MessageIcon from "@mui/icons-material/Message";
import DeleteIcon from "@mui/icons-material/Delete";

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.img}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h5">{post.email}</Typography>
        <Typography variant="body2">
          {moment(post.postDate).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button size="small" onClick={() => {}}>
          <BookmarkIcon color="disabled" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>

      <CardContent>
        <Typography className={classes.info} variant="h6" gutterBottom>
          monthly payment:{post.monthlypayment}
        </Typography>
        <Typography className={classes.info} variant="h6" gutterBottom>
          city:{post.city}
        </Typography>
      </CardContent>
      <CardActions className={classes.icon}>
        <div>
          <Button size="small" color="primary" onClick={() => {}}>
            <MessageIcon fontSize="small" /> Send Message
          </Button>
          <Button size="small" color="primary" onClick={() => {}}>
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};
export default Post;
