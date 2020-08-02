import React,{useState} from 'react'
import { Grid,TextField,Button } from '@material-ui/core';
import { useTheme } from "@material-ui/core/styles";
import axios from 'axios';
import * as contactUsStylesAndContent from '../UI/PagesStylesAndConst';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

export default function SendMessage(props){
  const classes = contactUsStylesAndContent.contactUsUseStyles();
  const theme = useTheme();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [emailHelper,setEmailHelper] = useState('');
  const [phone,setPhone] = useState('');
  const [phoneHelper,setPhoneHelper] = useState('');
  const [message,setMessage] = useState('');
  const [loading,setLoading] = useState(false);
  const [alert,setAlert] = useState({
    open:false,message:"",backgroundColor:""
  });


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
const onConfirm = () => {
  setLoading(true);
  axios.get("https://us-central1-alms-giving-global-charity.cloudfunctions.net/sendMail",{params:{
    name:name,
    email:email,
    phone:phone,
    message:message
  }})
  .then(res => {
    setLoading(false);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setAlert({open:true,message:"Message sent successfully!",backgroundColor:"#4BB543"})
  }).catch(error => {
    setLoading(false);
    setAlert({open:true,message:"Something went wrong,please try again!",backgroundColor:"#FF3232"})

  })
}

const buttonContents = (
  <React.Fragment>
     Contact us
  </React.Fragment>
);
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
  onClick={onConfirm}
  disabled={name.length === 0
     || message.length === 0 ||
      phoneHelper.length !== 0 || 
      emailHelper.length !== 0}
       style={{...theme.typography.learnButton,fontSize:"1.3em",marginBottom:"0.5em"}}>
         {loading ? <CircularProgress size={30}/> : buttonContents}
       
       </Button>
   </Grid>
   <Snackbar 
   open={alert.open} 
   message={alert.message}
   ContentProps={{style:{backgroundColor:alert.backgroundColor}}}
   anchorOrigin={{vertical:"top",horizontal:"right"}}
   onClose={() => setAlert({...alert,open:false})} autoHideDuration={4000}
   />
     
  
  </Grid>
  )
}