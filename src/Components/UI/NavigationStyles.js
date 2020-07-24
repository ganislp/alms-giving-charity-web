import {makeStyles} from '@material-ui/core/styles';



//Top bar Before App Bar
export const TOP_HADER_INFO={
  mail:"ganislp@gmail.com",
  phone:"+27 727935093"
}
export const useStyles = makeStyles(theme => ({
  paper: {
   // padding: theme.spacing(1),
    backgroundColor :theme.palette.common.blue,
    margin:"0",
    width:"100%",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0),
      margin:"0",
    },
    
  },
  textStyle:{
  color:theme.palette.common.white
  },

  donateButton:{
    ...theme.typography.donateButton,
  }
}))




// AppBar styles
export const useStylesAppBar = makeStyles(theme => ({
  
  toolbarMargin: {
    ...theme.mixins.toolbar,
    
    marginBottom: "5em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0em"
    }
  },
  appGridContainer:{
backgroundColor: theme.palette.common.white,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: theme.palette.common.white,
    padding:0,
    marginTop:0,
   
    [theme.breakpoints.down("md")]: {
    marginTop:0,
    padding:0,
    backgroundColor:theme.palette.common.white
    },
  },
  topMainContaner: {
    backgroundColor: theme.palette.common.blue
  },
  logoContaner: {
    marginTop:"0.5em",
    marginBottom:"0.5em"
  },
}));

// Drawer styles
export const drawerUseStyles = makeStyles(theme => ({
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon:{
    // height:"30px",
    // width:"30px",
  },
  drawerItem: {
    ...theme.typography.tab,
  },

 

  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
      // color: theme.palette.common.blue,
      
    },
  },
   
  toolbarMargin : {
    ...theme.mixins.toolbar,
    marginBottom: "2.5em",
    
  },
  
}));

