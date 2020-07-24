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
  marginTop:"5em"
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
}

}));

export const FooterBackround = {
imageUrl:require('../../assets/Images/Footer/foot-bg.jpg'),
  imgName:'footerbackround',
}