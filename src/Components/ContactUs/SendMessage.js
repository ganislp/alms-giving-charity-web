import React,{useState} from 'react'
import { Grid,TextField,Button } from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";
import * as contactUsStylesAndContent from '../UI/PagesStylesAndConst';

export default function SendMessage(props){
  const classes = contactUsStylesAndContent.contactUsUseStyles();
  const theme = useTheme();
  const [name,setName] = useState('');


  const [email,setEmail] = useState('');
  const [emailHelper,setEmailHelper] = useState('');

  const [phone,setPhone] = useState('');
  const [phoneHelper,setPhoneHelper] = useState('');

  const [message,setMessage] = useState('');

   const onChange = event => {
     let valid;
    switch (event.target.id) {
      case 'email' :
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
       if(!valid){
        setEmailHelper("Invalid email")
       }
       else{
        setEmailHelper("")
       }
       break

       case 'phone' :
        setPhone(event.target.value)
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
       if(!valid){
        setPhoneHelper("Invalid phone")
       }
       else{
        setPhoneHelper("")
       }
       break

        default: break
    }
   }

  return (
  
      <Grid item className={classes.textFieldContaner} 
      container direction={ "column"} 
     >
     
      <Grid item   className={classes.itemTextField}>
       <TextField 
       fullWidth
       label ="Name" 
       id="name" 
       color="secondary"
        value={name} 
        onChange={(event) =>{
          setName(event.target.value)
          } }/>
      </Grid>

      <Grid item  className={classes.itemTextField}>
      <TextField 
      
      label ="Email" 
      id="email"
      error={emailHelper.length !== 0}
      helperText={emailHelper}
       color="secondary" 
       value={email} 
       fullWidth
       onChange={onChange}/>
        </Grid>

        <Grid item className={classes.itemTextField}>
        <TextField 
         fullWidth
        label ="Phone" 
        id="phone" 
        error={phoneHelper.length !== 0}
        helperText={phoneHelper}
        color="secondary" 
        value={phone} 
        onChange={onChange}/>
        </Grid>

        <Grid item >
   <TextField
   fullWidth
   InputProps={{disableUnderline:true}}
    rows={4} 
     multiline value={message} 
     id="message" 
     color="secondary" 
     onChange={(event) =>{
         setMessage(event.target.value)
       } }  className={classes.messageContaner}/>
   </Grid>
<Grid item container justify="center" >
  <Button variant="contained" 
  
  disabled={name.length === 0
     || message.length === 0 ||
      phoneHelper.length !== 0 || 
      emailHelper.length !== 0} style={{...theme.typography.learnButton,fontSize:"1.3em",marginBottom:"0.5em"}}>Contact us</Button>
   </Grid>

  </Grid>
  )
}