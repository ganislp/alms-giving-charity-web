import React,{Component} from 'react'
import { Grid,Dialog,DialogContent,TextField,Typography,Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import {withStyles,withTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import axios from 'axios';



const useStyles = ((theme) => ({
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
  test:{
    backgroundColor:"red"
  }
}));


class HeroMainSettings extends Component{
state={
  open : false,
  heading:'',
  subHeading:'',
  body:''
}

   handleClickOpen = () => {
    this.setState({
      open:true
    })
  };

   handleClose = () => {
    this.setState({
      open:false
    })
  };

  onchangeHandler = (event) => {
    this.setState({
      heading:event.target.value,
      subHeading:event.target.value,
      body:event.target.value,
    })
  }
  render(){
    const { classes } = this.props;
    
 
    return(
      <React.Fragment>
      <Fab color="secondary" aria-label="edit"  onClick={this.handleClickOpen} >
          <SettingsIcon fontSize="small" />
        </Fab>
    
        <Dialog open={this.state.open} 
        onClose={this.handleClose}  
      >
        <DialogContent >
        <Grid container  direction="column"  >
              <Grid item style={{ marginTop: "1em" }} >
                <Typography variant="h2" 
                align="center" style={{fontFamily: "Raleway",
          fontWeight: 700,
          fontSize: "2rem",
          color: "#333",
          lineHeight: 1.5}}>
                 Add Hero Top Contatent
                </Typography>
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }} className={classes.test}>
                  <TextField
                    label="Header"
                    id="header"
                    color="secondary"
                    fullWidth
                    value={this.state.heading}
                    onChange={event => this.onchangeHandler(event)}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em", }} >
                  <TextField
                    label="Sub Heading"
                    id="subheading"
                    color="secondary"
                    fullWidth
                    value={this.subHeading}
                    onChange={event => this.onchangeHandler(event)}
                  />
                </Grid>
                <Grid item >
       <TextField
       fullWidth
       InputProps={{disableUnderline:true}}
        rows={4} 
         multiline 
         value={this.body} 
         id="Body" 
         color="secondary" 
         onChange={(event) =>{
          this.onchangeHandler(event)
           } } 
           className={classes.messageContaner} />
       </Grid>
       <Button variant="contained" onClick={this.onConfirm}>Submit
           </Button>
           </Grid>
              </DialogContent>
           
            </Dialog>
        </React.Fragment>
    )
  }
}
export default   withTheme(withStyles(useStyles) (HeroMainSettings));

// withTheme(withStyles(useStyles)(LoginComponent ))


