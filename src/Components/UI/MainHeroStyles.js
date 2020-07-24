import {makeStyles} from '@material-ui/core/styles';

export const  useMainStyles = makeStyles(theme => ({
  mainContainer:{
    marginLeft:  "15%",
    [theme.breakpoints.down("md")]: {
      marginLeft:  "0em",
    }
     
     },
}));