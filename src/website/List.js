import React, { Component } from 'react';
import Employee from './Employee';

class List extends Component {

    render() {
        const { list1 } = this.props;
        
    return (  
        
    <div>
 
        <ol>
            {
             list1.map((p) => {
                return (
                    
     <li>{p.name}-{p.post}</li> 
        
                )}
             )}
      </ol>
      </div>)
    }

}

export default Employee(List);