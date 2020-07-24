import {makeStyles} from '@material-ui/core/styles';

export const useStylesUpcomingEvents = makeStyles(theme => ({
h2MainContainer:{
  fontSize:'3rem',
  fontWeight:400
  ,color:theme.palette.common.blue,
  marginBottom:"1em",
  marginTop:"2em",
  [theme.breakpoints.down("sm")]: {
    marginTop:"1em",
    marginBottom:"0.5em",
  
     },
},
h3container:{
  ...theme.typography.h3,
},
bodycontainer:{
  fontSize: "1rem",
  color: "#929191",
  fontWeight: 50,
  maxWidth:"20em",
 lineHeight:"1.5em",
 marginBottom:"0.2em",
 [theme.breakpoints.down("sm")]: {
  maxWidth:"17em",

   },
},
imgContaner:{
  marginRight:"2em",
  marginBottom:"2em",
  height:"10em",
  [theme.breakpoints.down("sm")]: {
    marginRight:"1em",

  
     },
},
subtitleContainer:{
  fontSize: "0.8rem",
},
learnButton: {
  ...theme.typography.learnButton
},
}));

export const HeroBottemThreeConst = [
  {
    
  heading:"Upcoming Events",
  subHeading:"Fundraiser for Kids",
  subTitle:"Aug 25, 2018 | Ball Room New York",
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris."
,imagePath:require('../../assets/Images/HeroBottem-3/u-1.jpg'),
imageName:"Fundraiser"},

  {
    heading:"Upcoming Events",
  subHeading:"Bring water to the childrens",
  subTitle:"Aug 25, 2018 | Ball Room New York",
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris."
  ,imagePath:require('../../assets/Images/HeroBottem-3/u-2.jpg'),
  imageName:"Bring water"
},
{
  heading:"Upcoming Events",
subHeading:"Bring water to the childrens",
subTitle:"Aug 25, 2018 | Ball Room New York",
body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris."
,imagePath:require('../../assets/Images/HeroBottem-3/u-3.jpg'),
imageName:"Bring water"
},
];

export const FeaturedData = 
{ 
  heading:"Featured Cause",
  subHeading:"Fundraiser for Kids",
  subTitle:"Aug 25, 2018 | Ball Room New York",
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur."
,imagePath:require('../../assets/Images/HeroBottem-3/d.jpg'),
imageName:"FeaturedCause",buttonLable:"Donate Now"}

export const useStylesFeaturedCause = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "35em",
    width: "100%",
    backgroundColor:"#edf3f5",   
  },

  rowContaner:{
    // height: "35em",
    paddingTop:"2em",
   // paddingLeft:"1em",
   [theme.breakpoints.down("md")]: {
    // height: "36em",
     paddingTop:"1em",
     paddingLeft:"1.5em",
    // paddingRight:"1.5em",
   
   },
   [theme.breakpoints.down("sm")]: {
    // height: "36em",
     paddingTop:"1em",
     paddingLeft:"1em",
    paddingRight:"1em",
   
   },

  },
  imgContaner:{
    height:"18em",
  //  marginRight:"2em",
    [theme.breakpoints.down("md")]: {
      marginBottom:"1em",
      marginRight:"0em",
     },
     [theme.breakpoints.down("sm")]: {
      // height: "36em",
       paddingTop:"0.2em",
     //  paddingLeft:"4em",
     // paddingRight:"4em",
      marginRight:"0em",
     },
  },
  bodycontainer:{
    fontSize: "1rem",
    color: "#929191",
    fontWeight: 50,
    maxWidth:"15em",
   lineHeight:"1.5em",
   marginBottom:"2em",
   marginTop:"2em",
   [theme.breakpoints.down("md")]: {
  
    maxWidth:"20em",
    marginBottom:"1em",
    marginTop:"0.5em",
  },
  [theme.breakpoints.down("sm")]: {
    // height: "36em",
    maxWidth:"25em",
    marginBottom:"1em",
    marginTop:"0.5em",
   },
  },
 
}));