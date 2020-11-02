import React from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {useSpring, animated } from 'react-spring'
import Typist from 'react-typist';
import img from '../../Image/Fahim.jpg';
import pdf from '../../File/Fahim Hasan(Resume).pdf'

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
    background: (props) =>
        props.color === 'red'
            ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
            : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: (props) =>
        props.color === 'red'
            ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
            : '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: 8,
});

const useStyles = makeStyles((theme) => ({
    textDecoration: {
        '&:hover': {
            textDecoration: 'none',
        }
    },
    circle: {
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        border: '1px solid black'
    }
}));

function Home  () {
    const classes = useStyles();
    const props = useSpring({
        to: [{opacity: 1, color: '#ffaaee'}, {opacity: 1, color: 'rgb(14,26,19)'}],
        from: {opacity: .5, color: 'red'}
    })
    return (

        <React.Fragment >
            <div>
                <Typography variant="h4" component="h2" gutterBottom>
                <img className={classes.circle} src={img} alt="myImage" />
                    <animated.h3 style={props}>Welcome Fahim Hasan's World</animated.h3>
                </Typography>
                <Typography variant="h6" color="textSecondary" component="p" gutterBottom>
                    <Typist>
                        JavaScript Developer | Researcher  | Posative Thinker | BG: O+(ve)
                    </Typist> 
                </Typography>
                <Link className={classes.textDecoration} href={pdf} target="_blank" download="Fahim Hasan(Resume).pdf">
                    <MyButton color="blue">Download Resume</MyButton>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Home;