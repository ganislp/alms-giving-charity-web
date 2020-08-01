import React,{useState} from "react";
import {Dialog,DialogContent} from '@material-ui/core';


export default function Login(props){
  const [open,setOpen] = useState(false);

  return(
    <Dialog open={props.open} onClose={setOpen}>
      <DialogContent>
      test
      </DialogContent>
    </Dialog>
  )
 
  
}