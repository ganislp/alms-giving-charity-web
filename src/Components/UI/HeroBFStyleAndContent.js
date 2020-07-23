import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  h3Contaner:{
    ...theme.typography.h3,
     maxWidth:"16em",
    fontSize:"2em",
    lineHeight:"1.5em",
    marginBottom:"1em",
   
    [theme.breakpoints.down("sm")]: {
      textAlign:"center",
      paddingLeft :"0.5em",
      paddingRight :"0.5em"
     },
  },
  bodyContaner:{
    ...theme.typography.cardbody1,
    maxWidth:"30em",
    [theme.breakpoints.down("sm")]: {
      textAlign:"center",
      paddingLeft :"1em",
      paddingRight :"1em",
      marginBottom:"2em",
     },
  },
  subTitleContaner:{
    fontSize:"3em",
 marginBottom:"0.5em",
 fontWeight:400,
  },
  subtitle2Contaner:{
 fontWeight:200,
  }

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
 