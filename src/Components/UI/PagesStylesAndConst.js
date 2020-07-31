import {makeStyles} from '@material-ui/core/styles';

export const mainContainer = makeStyles(theme => ({
  root: {
    marginRight:"15em",
    marginLeft:"15em",
    marginTop:"5em",
     [theme.breakpoints.down("lg")]: {
      marginRight:"1em",
      marginLeft:"1em",
      marginTop:"3em",
  
     },
    },
}));

export const aboutUsUseStyles  = makeStyles(theme => ({
  paper: {
    backgroundColor:"rgba(0, 0, 0, 0.5)", 
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
     height:"20em",
     width:"100%",
     [theme.breakpoints.down("md")]: {
      height:"8em",
     },
    },
  

  background: {
    backgroundImage: `url(${aboutUsBg.imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width:"100%",
    height:"20em",
    [theme.breakpoints.down("md")]: {
      height:"8em",
     },
  },

  mainHeader:{
    marginRight:"15em",
    marginLeft:"15em",
    [theme.breakpoints.down("lg")]: {
      padding:"0em",
      marginRight:"0em",
      marginLeft:"0em",
      marginTop:"0em",
     },
  },

  img: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width:"100%",
    verticalalign: "baseline" , 
    
  },

  subtitle1Container:{
    ...theme.typography.subtitle1Contaner,
    paddingBottom:"2em",
    [theme.breakpoints.down("md")]: {
      fontSize:"1rem",
      paddingBottom:"1em",
    }, 
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      paddingBottom:"1em"
    },
  },
  avatarNameContaner:{
    ...theme.typography.avatarName,
    padding:"1em",
    [theme.breakpoints.down("md")]: {
      padding:"1em"
    },
  }

}))

export const aboutUsBg =  {
  heading:"About Us",
  imageUrl:require('../../assets/Images/AboutUs/about-bg.jpg'),
imageName:"about-bg"
}

export const aboutUsVoluteers = [
  {
    voluteerName:"Ganesh Vadlamuri",
    userType:" Volunteer",
    quote:"We love to help all the children that have problems in the world. After 15 years we have many goals achieved.",
    imageUrl:require('../../assets/Images/VoluteersImages/testimonial-1.jpg'),
  imageName:"Voluteer"
  },
  {
    voluteerName:"Pavani Vadlamuri",
    userType:" Volunteer",
    quote:"We love to help all the children that have problems in the world. After 15 years we have many goals achieved.",
    imageUrl:require('../../assets/Images/VoluteersImages/testimonial-2.jpg'),
  imageName:"Voluteer"
  },
  {
    voluteerName:"Vinay Vadlamuri",
    userType:" Volunteer",
    quote:"We love to help all the children that have problems in the world. After 15 years we have many goals achieved.",
    imageUrl:require('../../assets/Images/VoluteersImages/testimonial-2.jpg'),
  imageName:"Voluteer"
  }
];

