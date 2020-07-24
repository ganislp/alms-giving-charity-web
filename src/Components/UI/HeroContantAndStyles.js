import React from 'react';
import {makeStyles} from '@material-ui/core/styles';


export const HeroslideImages = [
  {imageUrl:require('../../assets/Images/HeroTopImg/hero.jpg'),ImageName:'Hero1'},
  {imageUrl:require('../../assets/Images/HeroTopImg/hero.jpg'),ImageName:'Hero2'},
  {imageUrl:require('../../assets/Images/HeroTopImg/hero.jpg'),ImageName:'Hero3'}
];

export const HeroTopHeaderContatent = 
  {heading:'Donate',subHeading:'4 a better world',body1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus ullamcorper'}


export const  HeroTopButtonText = [
  {lable:"Donate Now"},
  {lable:"Read More"},
];

export const heroTopStyles = makeStyles(theme => ({

  mainContainer:{
    marginLeft:  "15%",
    [theme.breakpoints.down("md")]: {
      marginLeft:  "0em",
    }
     
     },

  imageContaner:{
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height:"20em",
   } ,
   [theme.breakpoints.only("md")]: {
    height:"25em",
 } 
  },
  imageOverlayContaner:{
    backgroundColor:"rgba(0, 0, 0, 0.4)"
  },
  learnButton: {
    ...theme.typography.learnButton,
     fontSize: "1.2rem",
     padding: "0.5em",
     marginRight:"1em",
     "&:hover": {
       backgroundColor: theme.palette.common.blue
     }
     
   },
   learnButtonSpan:{
    marginRight: 40, 
    marginLeft: 40,
    [theme.breakpoints.down("sm")]: {
      marginRight: 20, 
      marginLeft: 20,
   } ,
   [theme.breakpoints.down("md")]: {
    marginRight: 20, 
    marginLeft: 20,
 } 
   },


   gridTextContaner:{
     marginLeft:"25em",
    [theme.breakpoints.down("md")]: {
      textAlign:"center",
      marginLeft:"0em",
   } 
   },

   h1Contaner:{
    [theme.breakpoints.down("md")]: {
      fontSize:"2.5rem",
      marginTop:"1em"
   } ,
  
   },
   h4Contaner:{
    marginBottom:"0.5em",
    [theme.breakpoints.down("md")]: {
      fontSize:"2rem",

    },
    [theme.breakpoints.down("sm")]: {
     marginBottom:"2em"
   } 
   } ,
   
   bodyContainer:{
    maxWidth:"40em",
    marginBottom:"2em",
    fontSize:"1rem",
    [theme.breakpoints.down("md")]: {
      maxWidth:"25em",
      paddingLeft:"1em",
      paddingRight:"1em",
      textAlign:"center"
    }
   },

    rightIconContainer: {
      padding: "1em",
    backgroundColor: theme.palette.common.blue,
    color:theme.palette.common.white,
      marginLeft:"-10em",
      [theme.breakpoints.down("md")]: {
        padding: "0.5em",
        marginLeft:"-3em",
      }
    },
  
   leftIconContainer: {
      padding: "1em",
      backgroundColor: theme.palette.common.blue,
      color:theme.palette.common.white,
      marginRight:"-10em",
      [theme.breakpoints.down("md")]: {
        padding: "0.5em",
        marginRight:"-3em",
      }
    },
    slideItemContainer:{
      width:"100%"
     },
     root: {
      flexGrow: 1
    },
    paper: {
      width: "100%",
      backgroundColor:"rgba(0,0,0, 0.5)"
    },

  }));

    export const heroSlidingProperties = {
      
      duration: 5000,
      autoplay: false,
      indicators: false,
      transitionDuration: 500,
      infinite: true,
      prevArrow: 
      <div style={{width: "80px", marginRight: "-80px",}}>
        <svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="#fff" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
						</svg></div>,
      nextArrow: <div style={{width: "80px", marginLeft: "-100px",}}>
       <svg className="svg-icon" viewBox="0 0 20 20" fill="#fff">
							<path fill="#fff" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
						</svg></div>
    };
      