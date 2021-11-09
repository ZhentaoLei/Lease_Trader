import React, { useEffect } from "react";
import icon from "./images/car.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles";
import { getPosts } from "./actions/posts";
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static">
        <Typography class="header" align="center">
          Lease Trader
        </Typography>
        <img
          className={classes.image}
          src={icon}
          alt="icon_image"
          height="100"
          width="auto"
        ></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={8}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <div className={classes.footer}>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/jongrak" title="Jongrak">
          Jongrak
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </Container>
  );
};

export default App;
