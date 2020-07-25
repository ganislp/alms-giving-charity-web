import {makeStyles} from '@material-ui/core/styles';

export const  useStyles = makeStyles(theme => ({

  cardItemContaner:{
    marginRight:"2%",
    [theme.breakpoints.down("md")]: {
      marginRight:"1%",
        },
    
    [theme.breakpoints.down("sm")]: {
      marginBottom:"1em",
      marginRight:"2%",
        },
 [theme.breakpoints.down("xs")]: {
  marginBottom:"1em",
  marginRight:"1em",
  marginLeft:"1em",
    },

  },

  cardContainer:{
    
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "4rem",
    color: theme.typography.white,
    lineHeight: 1,
    backgroundColor:theme.palette.common.blue,
    borderRadius:"20px",
    paddingTop:"0.5em",
  paddingLeft:"0.5em",
   paddingRight:"0.5em",

   [theme.breakpoints.down("md")]: {
    paddingLeft:"0em",
   paddingRight:"0em",
   paddingTop:"0.5em",
      },
  
   [theme.breakpoints.down("xs")]: {
    paddingLeft:"0.1em",
   paddingRight:"0.1em",
   paddingTop:"0.5em",
      },
      
 
  },
  media: {
    height: "1em",
    width: "1em",
    marginBottom:"0.5em",
    [theme.breakpoints.down("sm")]: {
      marginBottom:"0.1em",
        }
   
 },
h1Contaner:{
  fontSize:"1.5rem",
 marginBottom:"1em",
},

bodyContaner:{
 fontSize:"1rem",
 color:theme.palette.common.white,
 maxWidth:"20em",
 fontWeight:300,
 marginBottom:"1em",
 [theme.breakpoints.down("md")]: {
  maxWidth:"18em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom:"0.5em",
        }
}

}))

export const HeroBottemOneConst = [
  {heading:"Become a Volunteer",
  subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam."
,imageUrl:require('../../assets/Images/HeroBottem-1/hands-white.png'),
imageName:"hands"},
  {heading:"Dance & Music",
  subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam."
  ,imageUrl:require('../../assets/Images/HeroBottem-1/donation-white.png'),
  imageName:"donation"
},
  {heading:"Online Conference",
  subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam."
  ,imageUrl:require('../../assets/Images/HeroBottem-1/charity-white.png'),
  imageName:"charity"
}
];