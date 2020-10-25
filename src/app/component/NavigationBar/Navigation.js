import React,{useState,} from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '10%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const [textBox1, setTextBox1] = useState();
  const [textBox2, setTextBox2] = useState();

const textboxset1 = (e)=>{
    console.log(e.target.value)
    setTextBox1(e.target.value)

}

const textboxset2 = (e)=>{
    console.log(e.target.value)
    setTextBox2(e.target.value)

}

const setUrl = ()=>{
    props.set1(textBox1);
    props.set2(textBox2)
}

const logOut =()=>{
    history.push('/')

}
  return (
    <div className={classes.root}>
      <AppBar position="static">

        <Toolbar>
  <Typography style={{textTransform:"capitalize"}}>{localStorage.getItem("userName")}</Typography>

        <Grid container spacing={2} style={{marginLeft:"10%"}}>
        
        <Grid item xs={3}   >
        <InputBase
        style={{backgroundColor:"#ffffff47"}}
              placeholder="TextBox1"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>{textboxset1(e)}}

            />
            </Grid>
        {/* <Grid item xs={2} >
            </Grid> */}

            <Grid item xs={3}  >
        <InputBase
            style={{backgroundColor:"#ffffff47"}}
            placeholder="TextBox1"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e)=>{textboxset2(e)}}

            />
            </Grid>

        </Grid>
        <div style={{backgroundColor:"white",color:"#673ab7",borderRadius:8,width:80,height:20,paddingLeft:10,cursor:"pointer"}} onClick={setUrl}>Submit</div>
        <div style={{backgroundColor:"white",color:"#673ab7",borderRadius:8,width:80,height:20,paddingLeft:10,cursor:"pointer",marginLeft:10}} onClick={logOut}>Logout</div>

        </Toolbar>
      </AppBar>
    </div>
  );
}