import {makeStyles} from '@material-ui/core/styles';

export const heroBtStyles = makeStyles(theme => ({
 
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "100%",
    width: "100%",
    backgroundColor:"rgba(0, 0, 0, 0.7)", 
    paddingLeft:"15em",
    paddingRight:"15em",
    paddingTop:"0em",
    marginBottom:"5em",
    [theme.breakpoints.down("md")]: {
      paddingLeft:"1em",
      paddingRight:"1em", 
      marginBottom:"0em",
      height: "55em", 
     },
  },

  background: {
    backgroundImage: `url(${HeroBottemTwoConst.backRoundimageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "40em",
    width: "100%",
   [theme.breakpoints.down("md")]: {
    height: "55em", 
   },
  },

  img: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    verticalalign: "baseline" ,
 resizeMode: 'cover',

  },

  h1Contaner:{
    ...theme.typography.h1,
      fontSize:"2rem",
      fontWeight: 700,
      [theme.breakpoints.down("md")]: {
       marginTop:"2em",
        marginBottom:"1em"
      }, 
 },
  bodyContaner:{
  maxWidth:"35em",
    fontSize:"1rem",
   color:"#b7b7b7",
    lineHeight: 2,
    [theme.breakpoints.down("md")]: {
     marginBottom:"0.5em"
     },
},




  // mianContaner:{
    
  //   [theme.breakpoints.up("md")]: {
  //     paddingLeft:"15em",
  //     paddingRight:"15em",
  //     paddingTop:"4em",
     
  //   },
 
  //   [theme.breakpoints.down("md")]: {
  //     paddingLeft:"0em",
  //     paddingRight:"0em",
  //     paddingTop:"4em",
  //   },

  //    [theme.breakpoints.down("xs")]: {
  //    paddingLeft:"0em",
  //   paddingRight:"0em",
  //     paddingTop:"2em",

  //   },
  //  },


  

 

  // h1Contaner:{
  //   ...theme.typography.h1,
  //   fontSize:"3rem",
    
  //  //marginBottom:"1.5em",
  //  [theme.breakpoints.down("md")]: {
  // //marginTop:"2em",
  //   fontSize:"1.5rem",
   
  //  },
  
  //  [theme.breakpoints.down("sm")]: {
  //   fontSize:"3rem",
  //   marginBottom:"1em",
    
  // },

  //  [theme.breakpoints.down("xs")]: {
  //   fontSize:"2rem",
  //   marginTop:"1em",
  // },
  // // [theme.breakpoints.only("md")]: {
  // //   marginTop:"1em",
  // //   textAlign:"center",
  // //   marginBottom:"0.5em",
  // //  },
 
  // },

  // bodyContaner:{
  //   maxWidth:"40em",
  //   fontSize:"1rem",
  //   color:"#b7b7b7",
  //   lineHeight: 2,
  //  // marginBottom:"2em",
  //   // [theme.breakpoints.down("md")]: {
  //   //   maxWidth:"30em",
  //   //  }

  //   [theme.breakpoints.down("sm")]: {
  //     maxWidth:"40em",
  //     marginBottom:"1em",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     maxWidth:"40em",
  //     marginBottom:"1em",
  //   },
   

  //   // [theme.breakpoints.only("md")]: {
  //   //   marginBottom:"3em",
  //   //   maxWidth:"30em",
  //   //   textAlign:"center"
  //   //  },
  // },


}));

export const HeroBottemTwoConst =  {
heading:"Wellcome to our Charity",
subTitle:"",
body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu libero consequat tempus. Quisque molestie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.",
imageUrl:require('../../assets/Images/HeroBottem-2/i.jpg'),
imageName:"hands"
,backRoundimageUrl:require('../../assets/Images/HeroBottem-2/welcome-bg.jpg'),
imageNameback:"backround",
buttonLable:"Read More"};




