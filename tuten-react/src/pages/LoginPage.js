import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import { useStyles } from '../styles/loginStyles';
import { validationSchema } from '../components/validationSchema';
import { login } from '../services/apiServices';
import { AuthContext } from '../context/AuthContext';
import { types } from '../context/types';


export const LoginPage = () => {
    const classes = useStyles();
    const {dispatch} = useContext(AuthContext)
    const formik = useFormik({
        initialValues: {
          email: 'testapis@tuten.cl',
          password: '1234',
          app : 'APP_BCK'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            login(values)
                .then(tkn =>{
                    localStorage.setItem('state',
                    JSON.stringify({logged:true,tkn}));
                    dispatch({
                        type: types.login,
                        payload: tkn
                    })
                })
                .catch(console.log)            
        },
    });
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="off"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="app"
                        label="app"
                        name="app"
                        autoComplete="off"
                        value={formik.values.app}
                        onChange={formik.handleChange}
                        error={formik.touched.app && Boolean(formik.errors.app)}
                        helperText={formik.touched.app && formik.errors.app}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    )
}
