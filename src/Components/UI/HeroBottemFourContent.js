import {makeStyles} from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    width: "100%",
    backgroundColor:"rgba(255,255,255, 0.8)"
  },
  background: {
    backgroundImage: `url(${HeroBottemFourHeader.backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "50em",
    width: "100%",
    marginBottom:"10em",
    
  },
  rightIconContainer: {
    padding: "1em",
    backgroundColor:theme.palette.common.blue,
    marginLeft:"10em",
    color:theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
      color:  theme.palette.common.white,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft:"2em",
      padding: "0.5em",
     },
  },

 leftIconContainer: {
    padding: "1em",
    backgroundColor:theme.palette.common.blue,
    marginRight:"10em",
    color:theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
      color:  theme.palette.common.white,
    },
    [theme.breakpoints.down("md")]: {
      marginRight:"2em",
      padding: "0.5em",
     
     },
  },

  slideItemContainer:{
    maxWidth:"70em",
    [theme.breakpoints.down("md")]: {
      maxWidth:"55em",
     
     },
     
  },

  cardMediaContainer:{
    paddingTop: '70.25%',
    [theme.breakpoints.down("md")]: {
      paddingTop: '56.25%',
     
     },
  },
  cardh3:{
marginTop:"1.5em",
marginBottom:"1.5em",

[theme.breakpoints.down("md")]: {
  textAlign:"center",
  padding:"0",
 fontSize:"0.9em"
 
 },
  },
  cardbody:{
    ...theme.typography.cardbody1,
    marginBottom:"1.5em",
    [theme.breakpoints.down("md")]: {
      textAlign:"center",
     maxWidth:"20em"
     },
  },

mainh3:{
  fontSize:"2.5em",
  marginBottom:"1em",
  fontWeight:600,
  paddingBottom:'1em'
},

spenH1TextUnderLine:{
  display:"inline-block",
  borderBottom:"5px solid #0B72B9",
  borderColor:theme.palette.common.blue,
  paddingBottom:"0.4em"
}

}));
export const HeroBottemFourHeader = {
  Heading:' <u>Our</u> Causes',backgroundImage:require('../../assets/Images/HeroBottem-4/cause-bg.jpg'),
  imageName:"Fundraiser"

}

export const heroBottemFourSlideCards = [
{
  id:1,
  heading:'Bring water to the childrens',
  body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam.',
  imageUrl:require('../../assets/Images/HeroBottem-4/cause-1.jpg'),
  imageName:"CaseOne"
},
{
  id:2,
  heading:'Education for all',
  body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam.',
  imageUrl:require('../../assets/Images/HeroBottem-4/cause-2.jpg'),
  imageName:"CaseTwo"
},
{
  id:3,
  heading:'Bring water to the childrens',
  body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam.',
  imageUrl:require('../../assets/Images/HeroBottem-4/cause-3.jpg'),
  imageName:"CaseThree"
},
{
  id:4,
  heading:'Bring water to the childrens',
  body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam.',
  imageUrl:require('../../assets/Images/HeroBottem-4/cause-1.jpg'),
  imageName:"CaseOne"
},
]

