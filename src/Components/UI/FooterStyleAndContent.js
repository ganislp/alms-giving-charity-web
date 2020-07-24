import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${FooterBackround.imageUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "35em",
    width: "100%",
  },
  root: {
    flexGrow: 1
  },
  paper: {
    width: "100%",
    height: "35em",
    backgroundColor:"rgba(0,0,0, 0.85)"
  },

rowContaner:{
  marginTop:"5em",
 
},
h3ContainerMain:{
...theme.typography.h3,
marginBottom:"2em",
fontSize:"2rem",
fontWeight:600,
color: theme.palette.common.white,

},
h3Container:{
  ...theme.typography.h3,
  marginBottom:"3.2em",
  fontSize:"1.5rem",
  fontWeight:600,
  color: theme.palette.common.white,
  },
  bodyContainer:{
    ...theme.typography.footerTextColor,
    maxWidth:"15em",
    textAlign:"left",
    fontSize:"1rem",
    lineHeight:"2em",
    fontWeight:300
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
  marginBottom:"2em"
},
usefullMargin:{
  marginRight:"10em",
  [theme.breakpoints.down("md")]: {
    marginRight:"3em",
   },
},
leastNewsMargin:{
  marginRight:"8em",
  [theme.breakpoints.down("md")]: {
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