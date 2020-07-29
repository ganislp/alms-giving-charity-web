import {makeStyles} from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({

  slideItemContainer:{
    paddingRight:"15em",
    paddingLeft:"15em",
    marginRight: "auto",
   marginLeft: "auto",
   [theme.breakpoints.down("md")]: {
    paddingRight:"0em",
    paddingLeft:"0em",
  //  marginRight: "auto",
   //marginLeft: "auto"
   },
  },


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
    height: "47em",
    width: "100%",
  },
  rightIconContainer: {
    padding: "1em",
    backgroundColor:theme.palette.common.blue,
    marginLeft:"5em",
    color:theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
      color:  theme.palette.common.white,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft:"-3em",
      padding: "0.5em",
     },
  },

 leftIconContainer: {
    padding: "1em",
    backgroundColor:theme.palette.common.blue,
    marginRight:"5em",
    color:theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
      color:  theme.palette.common.white,
    },
    [theme.breakpoints.down("md")]: {
      marginRight:"-3em",
      padding: "0.5em",
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
   // maxWidth:"20em",
   marginBottom:"1em",
     },
  },

mainh3:{
  fontSize:"2.5em",
  marginBottom:"1em",
  fontWeight:600,
  paddingBottom:'1em',
  [theme.breakpoints.down("md")]: {
    marginBottom:"0.5em",
    paddingLeft:"0.5em"
   },
},

spenH1TextUnderLine:{
  display:"inline-block",
  borderBottom:"5px solid #0B72B9",
  borderColor:theme.palette.common.blue,
  paddingBottom:"0.4em"
},
learnButton: {
  ...theme.typography.learnButton
},

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

