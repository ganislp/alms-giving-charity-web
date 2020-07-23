import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import companyLogo from '../../../../assets/Images/Logo/output-onlinepngtools.png';

 const useStyles = makeStyles(theme => ({
  logoContainer:{
    height: "6em"
  },
  // [theme.breakpoints.down("md")]: {
  //   height: "2em"
  // },
  // [theme.breakpoints.down("sm")]: {
  //   height: "1em"
  // }
 }))

export default function Logo(props){
  const classes = useStyles();
  return(
    <img src={companyLogo} alt="companyLogo" className={classes.logoContainer}></img>
  )
}