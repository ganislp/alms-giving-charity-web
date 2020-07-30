import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({

  mainContainer:{
   paddingRight:"15em",
   paddingLeft:"15em",
    marginRight: "auto",
   marginLeft: "auto",
   paddingTop:"5em",
   paddingBottom:"5em",
   [theme.breakpoints.down("md")]: {
    paddingRight:"1em",
    paddingLeft:"1em",
    paddingTop:"1em",
   paddingBottom:"1em",
   },
  },

  itemContainer:{
   paddingTop:"2em"
  },
  h3Contaner:{
    ...theme.typography.h3,
    fontSize:"2.5em",
    lineHeight:"1.6em",
    paddingBottom:"1em",
    [theme.breakpoints.down("md")]: {
     fontSize:"1.5em",
   paddingBottom:"1em",
     },
  },
  bodyContaner:{
    ...theme.typography.cardbody1,
   fontSize:"1em",
  },
  subTitleContaner:{
    fontSize:"3em",
 paddingTop:"0.5em",
 paddingBottom:"1em",
 fontWeight:400,
 [theme.breakpoints.down("md")]: {
  fontSize:"2em",
  paddingTop:"0em",
  paddingBottom:"0em",
  },
  },
 

}));

export const HeroBottemFiveLeft = {
  Heading:'We love to help all the children that have problems in the world. After 15 years we have many goals achieved.',
  boby:"Dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet."

}

export const HeroBottemFiveRight = [
{ imageUrl:require('../../assets/Images/HeroBottem-5/teamwork.png'),
imgName:'teamwork',
subtitle:'Children helped',totalHelped:"120k"},
{ imageUrl:require('../../assets/Images/HeroBottem-5/donation.png'),
imgName:'donation',
subtitle:'Water wells',totalHelped:"79"},
{ imageUrl:require('../../assets/Images/HeroBottem-5/dove.png'),
imgName:'dove',
subtitle:'Volunteeres',totalHelped:"253"}
]
 