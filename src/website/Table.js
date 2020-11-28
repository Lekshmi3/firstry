import React, { Component } from 'react';
import Employee from './Employee';

class Table extends Component {

    render() {
        const { list1} = this.props;
    return (
        <div>
            {
            <table className="table">
        <thead>
            <tr>
                
                <th>Name</th>
                <th>Post</th>
                
            </tr>
        </thead>
        <tbody>
                                {
                                    list1.map((p, i) => {
                                        return (
                                            <tr key={p.id}>
                                                
                                                <td>{p.name}</td>
                                                <td>{p.post}</td>
                                                
                                            </tr>
                                        )
                                    })
                                }
                                 </tbody>
                        </table>
                    
                }
        </div>
    )
    }

}

export default Employee(Table);