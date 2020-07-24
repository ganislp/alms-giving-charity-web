import {makeStyles} from '@material-ui/core/styles';

export const  useStyles = makeStyles(theme => ({
  root:{
    padding:0
  },
  // mainContainer:{
  //   //marginLeft:  "15%",
    
  //   [theme.breakpoints.down("md")]: {
  //     marginLeft:  "0em",
  //     marginRight:"0em"
  //   }
     
  //    },
  cardContainer:{
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "4rem",
    color: theme.typography.white,
    lineHeight: 1,
    backgroundColor:theme.palette.common.blue,
    borderRadius:"20px",
   //  marginRight:"5%",
    
    //  [theme.breakpoints.down("md")]: {
    //   marginBottom:"5%",
    //   marginRight:"0%",
    //  }
    // paddingTop:"0.5em",
    // paddingLeft:"0.5em",
    // paddingRight:"0.5em",
    //height:"4em",
    //marginRight:"0.5em",
   
  //  [theme.breakpoints.down("xs")]: {
  //   margin:"0.1em",
  //   height:"3em",
  //    paddingLeft:"0em",
  //    paddingRight:"0em",
  //    marginRight:"0em",
  // },

  // [theme.breakpoints.only("md")]: {
  //   margin:"0.2em",
  //   padding:"0.2em",
  // },
  //  "&:hover": {
  //   backgroundColor: "theme.palette.common.blue"
  // },
  },
  media: {
    height: "0.5em",
    width: "0.5em",
   // margin: 'auto',
    // [theme.breakpoints.down("xs")]: {
    //   height: "0.5em",
    //   width: "0.5em",
    // },
  
   
 },
h1Contaner:{
  fontSize:"1rem",
//marginTop:"0.3em",
  // marginBottom:"1em",
  // textAlign:"center" 
},

bodyContaner:{
 fontSize:"1rem",
 color:theme.palette.common.white,
 maxWidth:"15em",
 fontWeight:300
 
// textAlign:"center" ,
// [theme.breakpoints.down("xs")]: {
//   maxWidth:"26em",
// },
// [theme.breakpoints.only("md")]: {
//   maxWidth:"15.5em",
//  },
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