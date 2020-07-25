import {makeStyles} from '@material-ui/core/styles';

export const  useMainStyles = makeStyles(theme => ({
 bottemTwomainContainer:{
    marginLeft:  "15%",
    marginTop:  "5%",
    
      [theme.breakpoints.down("md")]: {
       marginLeft:  "0em",
       marginRight:  "0em",
           
     },    
     },
}));