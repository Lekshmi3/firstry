import React, { Component } from 'react';

const Employee = (WrappedComponent) => {
    class Employee extends Component {
        constructor() {
            super();
           
            this.state = {
                list1:[
                    { name: 'Kavya Meenu',post:"developer" },
                    { name: 'Anu Prakash', post:"Tester"},
                    { name: 'Kiran Nath', post: "Developer"}
               ]
              
            }
        }

        
        render(){
            return (<WrappedComponent 
                list1={this.state.list1}
                 {...this.props} />)
        }
    }
    return Employee;
}

export default Employee;