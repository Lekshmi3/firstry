import React,{Component} from 'react';
import './IndecisionApp.css';
import  Button from './Button';
import PersonTable from './persontable';


class IndecisionApp extends Component
{
    constructor(){
        super();
        this.state={
          title: 'CRUD Application',
          act: 0,
          index: '',
          isupdate:false,
          items: []
        };
        this.fSubmit=this.fSubmit.bind(this);
        this.fEdit =this.fEdit.bind(this);
        this.fRemove=this.fRemove.bind(this);
        this.fDeleteAll=this.fDeleteAll.bind(this);
      } 
    
       fSubmit = (e) =>{
        e.preventDefault();
        console.log('try');
    
        let datas = this.state.items;
        let name = this.refs.name.value;
        let age = this.refs.age.value;
    
        if(this.state.act === 0){   //new
          let user = {
            name, age
          }
          if(user.name !==''&& user.age !=='')
          datas.push(user);
        }else{                      //update
          let index = this.state.index;
          datas[index].name = name;
          datas[index].age = age;
        }    
    
        this.setState({
          items: datas,
          act: 0,
          isupdate:false
        });
    
        this.refs.myForm.reset();
        
      }
    
      fRemove = (i) => {
        let datas = this.state.items;
        let user = this.state.items[i];
        this.refs.name.value = user.name;
        if(window.confirm('Do you want to delete '+user.name+ ' user'))
        {
        //let datas = this.state.items;
        datas.splice(i,1);
        this.setState({
          items: datas
        });
        }
        this.refs.myForm.reset();
       
      }
    
      fDeleteAll ()
      {
        if(window.confirm('Do you want to delete all the users'))
        {
        this.setState((prevState)=>{
            return{
                ...prevState,
          items:[]
            }
        });   
    }
      }

      fEdit = (i) => {
        let user = this.state.items[i];
        this.refs.name.value = user.name;
        this.refs.age.value = user.age;
    
        this.setState({
          act: 1,
          isupdate :true,
          index: i
        });
        
        
      }  
    
      render() {
        let datas = this.state.items;
        return (
          <div className="App">
            <h2>{this.state.title}</h2>
            <form ref="myForm" className="myForm" onSubmit={this.fSubmit}>
              <input type="text" ref="name" placeholder="Name" className="formField" /> &nbsp;
              <input type="text" ref="age" placeholder="Age" className="formField" />
              <br></br><br></br>
              <Button btnType="button" 
                btnName={this.state.isupdate ? 'Update' : 'Add'}/> &nbsp;
                <Button btnType="button" 
                btnName="DeleteAll" handlerEvent ={this.fDeleteAll}/>
            </form>
            {
               this.state.items.length > 0 ?
                (<p>{this.state.items.length} Person is available</p>)
                    : (<p>No person is available</p>)

            }
            {
            this.state.items.length > 0 &&(
         <PersonTable datas={this.state.items} fEdit ={this.fEdit} fRemove={this.fRemove}></PersonTable>
            // <table className="table">
            // <thead>
            // <tr>
            //     <th>Sr No</th>
            //     <th>Name</th>
            //     <th>Age</th>
            //     <th>Action</th>
            // </tr>
            // </thead>
            // <tbody>
              
            // {
            
            //   datas.map((user,i)=>
            //    <tr key={i}>
            //        <td>{i+1}</td>
            //        <td>{user.name}</td>
            //         <td>{user.age}</td>
            //         <td>
            //         <Button btnType="button" 
            //         handlerEvent ={()=>this.fEdit(i)}
            //         btnName="Edit"/> &nbsp;
            //         <Button btnType="button" 
            //          handlerEvent ={()=>this.fRemove(i)}
            //         btnName="Delete"/>
            //           </td>
            //          </tr>
            //   )
            //     }
                    
            //    </tbody>
            //     </table>
            )
            }
          </div>
        );
      }
}

export default IndecisionApp;