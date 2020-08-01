
import {createMuiTheme } from '@material-ui/core/styles';

const appWhite="#ffff";
const appBlue= "#0B72B9";
 const arcGrey = "#333";
 const footerTextColour="#929191";
 const lightGrey="#b7b7b7";
 const darkGrey = "#595858";
 const bgColour = '#edf3f5'
//'Montserrat', sans-serif;
export default  createMuiTheme({
  
palette:{
  common : {
    white : appWhite,
    blue:appBlue,
    grey : arcGrey,
    lightGrey: lightGrey,
    bgColour:bgColour
  },
  primary: {
    main : appWhite,
  },
  secondary :{
  main : appBlue
  } 
},
typography:{
  tab : {
    fontFamily: "Raleway",
    textTransform: "none",
    fontWeight: 700,
    color: "#333",
    fontSize: "1rem"
  },
  h1:{
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "7rem",
    color: appWhite,
    lineHeight: 1,
  
  },

  h2:{
    fontFamily: "Raleway",
    fontWeight: 600,
    fontSize: "1.5rem",
    color: arcGrey,
    lineHeight: 1,
  
  },

  h3:{
    fontFamily: "Raleway",
    fontWeight: 600,
    fontSize: "1.2rem",
    color: arcGrey,
    lineHeight: 1,
  
  },

  h4: {
    fontFamily: "Raleway",
    fontSize: "2.5rem",
    fontWeight: 600,
    color: appWhite,
  },
 subtitle1Contaner: {
    fontFamily: "Raleway",
    fontSize: "2rem",
    fontWeight: 600,
    color: arcGrey,
   
  },
  avatarName:{
    fontFamily: "Raleway",
    fontSize: "1rem",
    color: darkGrey,
    fontWeight: 600,
 
  },
  body1: {
    fontSize: "1.25rem",
    color: appWhite,
    fontWeight: 300
  },
  body2: {
    fontSize: "1rem",
    color: lightGrey,
    lineHeight: 2,
  },
  cardbody1: {
    fontSize: "1rem",
    color: "#929191",
    fontWeight: 300
  },
  learnButton: {
    // borderColor: appWhite,
    border:"none",
    borderWidth: 0,
    textTransform: "none",
    color: appWhite,
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    backgroundColor: appBlue,
    "&:hover": {
      backgroundColor: appBlue,
      color: appWhite,
    },
  
  },
  donateButton: {
    fontFamily: "Roboto",
    fontSize: "1rem",
    border:"none",
    borderWidth: 0,
    textTransform: "none",
    color: appWhite,
    backgroundColor: arcGrey,
    "&:hover": {
      backgroundColor: arcGrey,
      color: appWhite,
    },
 
  },

 footerTextColor:{
  color: footerTextColour,
 },


},
overrides: {    
   MuiAppBar: {
    root: {paddingRight: 0, }

   },
   MuiInputLabel:{
     root:{
      color:arcGrey,
      fontSize:"1rem",
      fontWeight:300
     }
    
   },
   MuiInput:{
     root:{
      color:arcGrey,
      fontWeight:300,
     },
    underline:{
      "&:before":{
        borderBottem:`2px solid ${arcGrey}`
      },
      "&:hover:not($disabled):not($focused):not($error):before":{
        borderBottem:`2px solid ${arcGrey}`
      }
    }
   }

} 
});