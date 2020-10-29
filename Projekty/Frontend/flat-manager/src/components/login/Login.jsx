import React, { useState } from "react";
import { Container } from "../../styles/styles.style";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  InputAdornment,
  Paper,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { login, selectAll } from "../../features/authentication/authSlice";
import { Redirect } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles({
  paper: {
    padding: "10px",
  },
  textField: {
    minWidth: "30ch",
  },
  title: {
    fontSize: "2rem",
    color: "white",
  },
});

const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { redirectTo, shouldRedirect, failed, errorMessage } = useSelector(
    selectAll
  );

  const dispatch = useDispatch();

  const handlesubmit = (event) => {
    event.preventDefault();
    const user = { login: username, password: password };
    dispatch(login(user));
  };

  if (shouldRedirect === true) {
    return <Redirect to={redirectTo} />;
  } else {
    return (
      <form onSubmit={handlesubmit}>
        <Grid>
          <Container width="40vw" height="40vh" bgr="#5d5d5a" col round>
            <Typography className={classes.title}>Zaloguj się do swojego konta</Typography>
           <Paper className={classes.paper}>
              <TextField
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                variant="outlined"
                error={failed}
                className={classes.textField}
                placeholder="Zaloguj"
                label={failed ? errorMessage : "Zaloguj"}
                type="text"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Paper>
            <Paper className={classes.paper}>
              <TextField
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                variant="outlined"
                error={failed}
                className={classes.textField}
                placeholder="Hasło"
                label={failed ? errorMessage : "Hasło"}
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpenIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Paper>
            <Button
              variant="contained"
              type="submit"
              startIcon={<ExitToAppIcon />}
            >
              Zaloguj
            </Button>
          </Container>
        </Grid>
      </form>
    );
  }
};

export default Login;