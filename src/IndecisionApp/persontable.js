import Button from './Button';
const PersonTable =(props)=>{
return(
<table className="table">
<thead>
<tr>
    <th>Sr No</th>
    <th>Name</th>
    <th>Age</th>
    <th>Action</th>
</tr>
</thead>
<tbody>
  
{

  props.datas.map((user,i)=>
   <tr key={i}>
       <td>{i+1}</td>
       <td>{user.name}</td>
        <td>{user.age}</td>
        <td>
        <Button btnType="button" 
        handlerEvent ={()=>props.fEdit(i)}
        btnName="Edit"/> &nbsp;
        <Button btnType="button" 
         handlerEvent ={()=>props.fRemove(i)}
        btnName="Delete"/>
          </td>
         </tr>
  )
    }
        
   </tbody>
    </table>
)
}
export default PersonTable;