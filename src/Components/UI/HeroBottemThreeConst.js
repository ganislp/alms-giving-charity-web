import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  mainRowContainer: {
     paddingRight:"15em",
    paddingLeft:"15em",
    marginRight: "auto",
   marginLeft: "auto",
  paddingBottom:"5em",
     [theme.breakpoints.down("md")]: {
      padding:"1em",
      paddingBottom:"5em",
     },
   
  },
}));

export const useStylesUpcomingEvents = makeStyles(theme => ({

mainContainer:{
  paddingBottom:"2em",
  [theme.breakpoints.down("md")]: {
    paddingBottom:"2em",
  } 
},

h2MainContainer:{
  fontSize:'3rem',
  fontWeight:400
  ,color:theme.palette.common.blue,
  marginBottom:"1em",
  marginTop:"2em",
  [theme.breakpoints.down("md")]: {
    fontSize:'2rem',
  } 
},
h3container:{
  ...theme.typography.h3,
  color:"#333"    
},

subtitleContainer:{
  fontSize: "0.8rem",  
},
bodycontainer:{
  fontSize: "1rem",
  color: "#929191",
  fontWeight: 50,
 lineHeight:"1.5em",
 paddingBottom:"1em",  
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
,imagePath:require('../../assets/Images/HeroBottem-3/event-1.jpg'),
imageName:"Fundraiser"},

  {
    heading:"Upcoming Events",
  subHeading:"Bring water to the childrens",
  subTitle:"Aug 25, 2018 | Ball Room New York",
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris."
  ,imagePath:require('../../assets/Images/HeroBottem-3/event-2.jpg'),
  imageName:"Bring water"
},
{
  heading:"Upcoming Events",
subHeading:"Bring water to the childrens",
subTitle:"Aug 25, 2018 | Ball Room New York",
body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris."
,imagePath:require('../../assets/Images/HeroBottem-3/event-3.jpg'),
imageName:"Bring water"
},
];

export const FeaturedData = 
{ 
  heading:"Featured Cause",
  subHeading:"Fundraiser for Kids",
  subTitle:"Aug 25, 2018 | Ball Room New York",
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur."
,imagePath:require('../../assets/Images/HeroBottem-3/featured-causes.jpg'),
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
    paddingTop:"2em",
   paddingLeft:"2em",
   paddingRight:"2em",
   [theme.breakpoints.down("md")]: {
    paddingTop:"1em",
    paddingLeft:"0em",
    paddingRight:"0em",
   },
   

  },

  imgContaner:{
   [theme.breakpoints.down("md")]: {
    paddingBottom:"1em",
    },
  },
  bodycontainer:{
    fontSize: "1rem",
    color: "#929191",
    fontWeight: 50,
   lineHeight:"1.5em",
 paddingBottom:"8em",
   [theme.breakpoints.down("md")]: {
    paddingBottom:"2em",
    paddingLeft:"1em",
    paddingRight:"1em",
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom:"3em",
    paddingLeft:"0em",
    paddingRight:"0em",
  },
  [theme.breakpoints.down("xs")]: {
    paddingBottom:"0.5em",
    paddingLeft:"1em",
    paddingRight:"1em",
   },
  },
 
}));