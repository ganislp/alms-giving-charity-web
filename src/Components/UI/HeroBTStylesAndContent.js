import {makeStyles} from '@material-ui/core/styles';

export const heroBtStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
  },
  paper: {
    height: "45em",
    width: "100%",
    backgroundColor:"rgba(0, 0, 0, 0.6)",
    [theme.breakpoints.down("sm")]: {
      height: "53em",
      width:"100%"
    },
    // [theme.breakpoints.only("md")]: {
    //   height: "55em",
    //   width:"100%"
    // },
  },

  background: {
    backgroundImage: `url(${HeroBottemTwoConst.backRoundimageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "45em",
    width: "100%",
    //marginBottom:"1em",
    [theme.breakpoints.down("sm")]: {
      height: "53em",
      width:"100%"
    },
    // [theme.breakpoints.only("md")]: {
    //   height: "45em",
    //   width:"100%"
    // },
  },

  
  imgContainer: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
     verticalalign: "baseline" ,
    height:"24em",
    marginTop:"5em",
    marginLeft:"2em",
   
    [theme.breakpoints.down("sm")]: {
      height: "25em",
      width:"25em",
      marginTop:"2em",
    //  marginLeft:"1em",
  //  marginRight:"20em",
   
    },
    // [theme.breakpoints.only("md")]: {
    //   height: "30em",
    //   width:"100%"
    // },
  },
  columnContaner:{
   marginTop:"1em",

  },

  h1Contaner:{
    ...theme.typography.h1,
    fontSize:"3rem",
   marginBottom:"1.5em",
   marginTop:"1.5em",
   [theme.breakpoints.down("sm")]: {
    fontSize:"2.5rem",
    textAlign:"center",
    marginBottom:"1em",
    marginTop:"0em",
  },
  [theme.breakpoints.only("md")]: {
    marginTop:"1em",
    textAlign:"center",
    marginBottom:"0.5em",
   },
  },

  bodyContaner:{
    maxWidth:"47em",
    fontSize:"1rem",
    color:"#b7b7b7",
    lineHeight: 2,
    marginBottom:"1.5em",
    [theme.breakpoints.down("sm")]: {
      maxWidth:"30em",
      textAlign:"center"
      
    },

    [theme.breakpoints.only("md")]: {
      marginBottom:"3em",
      maxWidth:"30em",
      textAlign:"center"
     },
  },


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




