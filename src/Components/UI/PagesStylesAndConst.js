import {makeStyles} from '@material-ui/core/styles';
// --------------------------------Start About us-----------------------------------------------
export const mainContainer = makeStyles(theme => ({
  root: {
    marginRight:"15em",
    marginLeft:"15em",
    marginTop:"3em",
     [theme.breakpoints.down("lg")]: {
     marginRight:"1em",
      marginLeft:"1em",
      marginTop:"3em",
  
     },
    },
    paper: {
      backgroundColor:"rgba(0, 0, 0, 0.8)", 
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
       height:"15em",
       width:"100%",
       [theme.breakpoints.down("md")]: {
        height:"8em",
       },
      },
      mainHeader:{
        marginRight:"15em",
        marginLeft:"15em",
        [theme.breakpoints.down("lg")]: {
          padding:"1em",
          marginRight:"0em",
          marginLeft:"0em",
          marginTop:"0em",
         },
      },
}));

export const aboutUsUseStyles  = makeStyles(theme => ({
 
 

  background: {
    backgroundImage: `url(${aboutUsBg.imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width:"100%",
    height:"15em",
    [theme.breakpoints.down("md")]: {
      height:"8em",
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
     // paddingBottom:"1em",
    //  width: theme.spacing(5),
   // height: theme.spacing(5),
    },
  },
  avatarItem:{
    marginBottom:"1em",
    marginRight:"1em"
  },

  avatarNameContaner:{
    ...theme.typography.avatarName,

    [theme.breakpoints.down("md")]: {
      padding:"0em"
    },
  },

  itemContainer:{
    marginRight:"15em",
    marginLeft:"15em",
     [theme.breakpoints.down("md")]: {
      marginRight:"1em",
      marginLeft:"1em",
      marginTop:"3em",
  
  }
},
helpush1:{
  ...theme.typography.h2,
  color:theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    fontSize:"2rem",
    marginBottom:"0em"
   } ,
  [theme.breakpoints.down("xs")]: {
  fontSize:"2rem",
  marginBottom:"2em"
 } ,
},
learnButton: {
  ...theme.typography.learnButton,
  color:theme.palette.common.white,
  backgroundColor:theme.palette.common.grey,
    borderWidth: 1,
    border:"soild",
   fontSize: "1.2rem",
   padding: "1em",
   marginRight:"1em",
   "&:hover": {
    backgroundColor:theme.palette.common.grey,
   },
   [theme.breakpoints.down("md")]: {
    padding: "0.5em",
 } ,
  },

  learnButtonSpan:{
    marginRight: 40, 
    marginLeft: 40,

    [theme.breakpoints.down("md")]: {
      marginRight: 20, 
      marginLeft: 20,
   } ,
 
    [theme.breakpoints.down("xs")]: {
      marginRight: 20, 
      marginLeft: 20,
   } ,
 
   },
}))

export const aboutUsBg =  {
  heading:"About Us",
  imageUrl:require('../../assets/Images/AboutUs/about-bg.jpg'),
imageName:"about-bg",
subHeading:"Help us so we can help others"
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
// --------------------------------Start Contact us-----------------------------------------------
export const contactUsUseStyles  = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
   //height: "29em",
    width: "100%",
    backgroundColor:theme.palette.common.bgColour,   
  },
  background: {
    backgroundImage: `url(${contactUsContent.imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width:"100%",
    height:"15em",
    [theme.breakpoints.down("md")]: {
      height:"8em",
     },
  },
  iconContainer:{
    marginRight:"0.5em"
  },
  subtitle1Contaner:{
    marginBottom:"1em",
  },
  itemContainer:{
    marginBottom:"1em",
  },
  messageContaner:{
    border:`1px solid ${theme.palette.common.grey}`,
    marginTop:"2em",
    marginBottom:"1em",
    borderRadius:5,
    [theme.breakpoints.down("md")]: {
      marginTop:"1em",
    marginBottom:"1em",
     },
  },
  itemTextField:{
    marginBottom:"1em",
    [theme.breakpoints.down("md")]: {
      marginBottom:"0.5em",

     },
  },

  textFieldContaner:{
    // height: "29em",
    width: "100%",
    backgroundColor:theme.palette.common.bgColour, 
    paddingLeft:"3em",
    paddingRight:"3em",
    paddingTop:"1em",
    [theme.breakpoints.down("md")]: {
      paddingLeft:"1em",
    paddingRight:"1em",
    paddingTop:"1em",
     },
  },

  btn:{

  },
  addressContainer:{
   // marginBottom:"1em",
    [theme.breakpoints.down("md")]: {
      marginBottom:"1em",

     },
  },

}))

export const contactUsContent =  {
  heading:"Contact",
  subHeading:"Get In touch with us",
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, conse ctetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Integer accu msan sodales odio, id tempus velit ullamc.",
  imageUrl:require('../../assets/Images/ContactUs/contact-bg.jpg'),
imageName:"contact-bg"
}

// --------------------------------Start Gallery-----------------------------------------------
export const galleryUseStyles  = makeStyles(theme => ({
  
  background: {
    backgroundImage: `url(${galleryContent.imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width:"100%",
    height:"15em",
    [theme.breakpoints.down("md")]: {
      height:"8em",
     },
  },

}))

export const galleryContent =  {
  heading:"Portfolio",
  imageUrl:require('../../assets/Images/Portfolio/portfolio-bg.jpg'),
imageName:"portfolio-bg"
}


export const galleryImages = [
  {
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    thumbnailCaption: "Flower Interior Macro"
},
{
  src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
  thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 213,
  caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  thumbnailCaption: "Flower Interior Macro"
},
{
  src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
  thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 213,
  caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  thumbnailCaption: "Flower Interior Macro"
},
{
  src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
  thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 213,
  caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  thumbnailCaption: "Flower Interior Macro"
},
{
  src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
  thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 213,
  caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  thumbnailCaption: "Flower Interior Macro"
},
{
  src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
  thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 213,
  caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  thumbnailCaption: "Flower Interior Macro"
},
{
  src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
  thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 213,
  caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  thumbnailCaption: "Flower Interior Macro"
},
{
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    thumbnailCaption: "Flower Interior Macro"
}
]