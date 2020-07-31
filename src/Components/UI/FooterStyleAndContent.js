import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({

  background: {
    backgroundImage: `url(${FooterBackround.imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
   // height: "35em",
    width: "100%",
    marginTop:"5em",
    [theme.breakpoints.down("lg")]: {
      marginTop:"3em",
  
     },
  },
  root: {
    flexGrow: 1
  },
  paper: {
    width: "100%",
    //height: "35em",
    backgroundColor:"rgba(0,0,0, 0.85)"
  },

rowContaner:{
  paddingLeft:"15em",
  paddingRight:"15em",
  paddingTop:"5em",
  paddingBottom:"5em",
  [theme.breakpoints.down("md")]: {
    paddingLeft:"1em",
    paddingRight:"1em",
    paddingTop:"3em",
    paddingBottom:"2em",
  },
 
},
h3ContainerMain:{
...theme.typography.h3,
fontSize:"1.5rem",
fontWeight:600,
paddingBottom:"2em",
color: theme.palette.common.white,
[theme.breakpoints.down("xs")]: {
  fontSize:"1rem",
 // paddingBottom:"1em"
  },

},
bodyContainer:{
  ...theme.typography.footerTextColor,
  fontSize:"1rem",
  lineHeight:"2em",
  fontWeight:300,
  [theme.breakpoints.down("xs")]: {
    lineHeight:"1.5em",

    },
},
h3Container:{
  ...theme.typography.h3,
  paddingBottom:"2em",
  fontSize:"1.5rem",
  fontWeight:600,
  color: theme.palette.common.white,
  [theme.breakpoints.down("xs")]: {
   paddingTop:"2em",
    paddingBottom:"1em",
    },
  },
  
  subtitle1Contaner:{
    ...theme.typography.footerTextColor,
    textAlign:"left",
    fontSize:"1rem",
  },
  subtitle2Contaner:{
    color:theme.palette.common.white,
    textAlign:"left",
    fontWeight:600,
  },
iconContainer:{
  color:"white",
  marginRight:"0.5em"
},
gridItemSpcing:{
  marginBottom:"2em",
  [theme.breakpoints.down("xs")]: {
    marginBottom:"1em",
    },
},
usefullMargin:{
  marginRight:"10em",
  [theme.breakpoints.down("xs")]: {
    marginRight:"3em",
   },
},
leastNewsMargin:{
  marginRight:"8em",
  [theme.breakpoints.down("xs")]: {
    marginRight:"4em",
   },
}

}));

export const FooterBackround = {
imageUrl:require('../../assets/Images/Footer/foot-bg.jpg'),
  imgName:'footerbackround',
}

export const MainFooterHeading = {
  Heading:'Alms-Giving Global Charity',
  Heading2:'Useful Links',
  Heading3:'Latest News',
  Heading4:'Contact',
  boby:"Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris temp us vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolo."

}

export const FooterUseFullLinks = {
  Heading:'Useful Links',links :
  [
    {linkName:"Privacy Polticy"},
    {linkName:"Become a Volunteer"},
    {linkName:"Donate"},
    {linkName:"Testimonials"},
    {linkName:"Causes"},
    {linkName:"Portfolio"},
    {linkName:"News"}
  ]

}

export const FooterLatestNewsLinks = {
  Heading:'Latest News',links :
  [
    {title:"A new cause to help",subTitle:"MArch 12, 2018"},
    {title:"We love to help people",subTitle:"MArch 12, 2018"},
    {title:"The new ideas for helping",subTitle:"MArch 12, 2018"},
  ]
}

export const FooterContact = {
  Heading:'Contact',phoneNo:'+45 677 8993000 223',email:"office@template.com",address:"Main Str. no 45-46, b3, 56832,Los Angeles, CA"
}