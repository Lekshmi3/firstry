import react, { Component } from "react";
import './StudentApp.css'
 class StudentApp extends Component
 {
     constructor(){
         super();
         this.state={
             title:'Student List',
             list:[
                 {id: 1, name: 'Kavya Meenu', phy:89,chem:78,maths:80},
                 {id: 2, name: 'Anu Prakash', phy:78,chem:56,maths:78},
                 {id: 3, name: 'Kiran Nath', phy:89,chem:88,maths:91}
            ],
            student:[],
            totalmarks:0,
            percentage:0
         };
         this.viewHandler=this.viewHandler.bind(this);
         this.backHandler=this.backHandler.bind(this);
      
        }
     
      //view Handler
      viewHandler(p)
      {
      const { id, name,phy,chem,maths } = p; // destructure
    
          const stlist = {
              id, name, phy, chem, maths,
               totmark:phy+chem+maths,percent:Math.round(((phy+chem+maths)/300)*100)
          }
          this.setState(prevState => {
              return {
                  
                  student: [stlist]
              }
          });
  
  }
  //back 
  
  backHandler() {
    if (window.confirm("Are you sure to go back")) {
        this.setState(prevState => {
            return {
                ...prevState,
                student: []
            }
        })
    }
}
   
     render()
     {
         const {student,list}=this.state;
       
        const stlist=this.state.student;
     
         return(
             <div>
                 <h3>{this.state.title}</h3>
                 <table className="table1">
                     <thead>
                         <tr>
                             <th>Sr No:</th>
                             <th>Name</th>
                             <th>Action</th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                             list.map((s,i)=>{
                                 return(
                                     <tr key={s.id} >
                                     <td>{i + 1}</td>
                                                <td>{s.name}</td>
                                                     <td>
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => this.viewHandler(s)}>View</button>
                                                </td>
                                     </tr>
                                 )
                             })
     }
                     </tbody>
                 </table>
                 <hr/>
                <p>{this.state.student.length === 0 &&'No student selected'}</p>
                 {this.state.student.length >0 &&(
                 <div className="justify-content-between align-items-center">
                     
                 <table className="table2"
                 onClick={() => this.viewHandler()}>
                     <thead className="table2">
                         <tr>
                             
                             <th>Name:</th>
                 {stlist.map((s)=>{
                                 return(<th>{s.name}</th>)})}
                                 
                             
                             </tr>
                             <tr>
                             <th>Physics</th>
                             <th>Chemistry</th>
                             <th>Maths</th>
                             <th>Total Marks</th>
                             <th>Percentage</th>
                             
                         </tr>
                     </thead>
                     <tbody className="table2">
                     
                         {
                             
                             stlist.map((s)=>{
                                 return(
                                     
                                     <tr key={s.id}>
                                          
                                                <td>{s.phy}</td>
                                                <td>{s.chem}</td>
                                                <td>{s.maths}</td>
                                                <td >{s.totmark}</td>
                                                <td >{s.percent}</td>
                                    </tr>
                                    
                                 )
                             })
     }
                     </tbody>
                 </table>
                 
                 </div>
 
                 )}
                 <div>
                 {
                            this.state.student.length > 0 && (<button type="button" 
                            className="btn btn-sm btn-danger" 
                            onClick={this.backHandler}>Back</button>)
                        }
                 </div>
                 <hr/> 
             </div>
             
             
         )
     }
 }
 export default StudentApp;