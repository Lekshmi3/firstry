import React, { Component } from 'react';

class Contact extends Component{

    render(){
        return (
            <div>
                <h3  align="center">Contact</h3>
               <div align="center">
                <form className="form-inline" >
    
      
      <input type="text" class="form-control" placeholder=" Enter your Name" 
      aria-label="Username" aria-describedby="basic-addon1"/>
      <input type="text" class="form-control" placeholder=" Enter your E-mail id" 
      aria-label="Username" aria-describedby="basic-addon1"/>
      <input type="text" class="form-control" placeholder=" Enter your Contct Number" 
      aria-label="Username" aria-describedby="basic-addon1"/>
      <input type="text" class="form-control" placeholder=" Enter your Message" 
      aria-label="Username" aria-describedby="basic-addon1"/>
    
  </form>

        </div>           
                    </div>    
            
        )
    }
}

export default Contact;