import {makeStyles} from '@material-ui/core/styles';

export const heroBtStyles = makeStyles(theme => ({
  paper: {
    backgroundColor:"rgba(0, 0, 0, 0.7)", 
     paddingRight:"15em",
    paddingLeft:"15em",
     marginRight: "auto",
    marginLeft: "auto",
    paddingTop:"6em",
   paddingBottom:"3em",
     [theme.breakpoints.down("md")]: {
      padding:"1em",
     },
  },

  background: {
    backgroundImage: `url(${HeroBottemTwoConst.backRoundimageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

  img: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width:"100%",
    verticalalign: "baseline" , 
  },

  h1Contaner:{
    ...theme.typography.h1,
      fontSize:"3rem",
      fontWeight: 700,
    paddingBottom:"2em",
      [theme.breakpoints.down("md")]: {
        paddingBottom:"1em",
        fontSize:"2rem",
        paddingTop:"1em",
      }, 
 },
  bodyContaner:{
  maxWidth:"45em",
    fontSize:"1rem",
   color:"#b7b7b7",
    lineHeight: 2,
    paddingBottom:"5em",
    paddingRight:"2em",
    [theme.breakpoints.down("md")]: {
      paddingBottom:"1em",
       },  
},



}));

export const HeroBottemTwoConst =  {
heading:"Wellcome to our Charity",
subTitle:"",
body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu libero consequat tempus. Quisque molestie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum.",
imageUrl:require('../../assets/Images/HeroBottem-2/welcome.jpg'),
imageName:"hands"
,backRoundimageUrl:require('../../assets/Images/HeroBottem-2/welcome-bg.jpg'),
imageNameback:"backround",
buttonLable:"Read More"};




