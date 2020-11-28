import React from 'react';
import List from './List';
import Table from './Table';

const Hoc = () => {
    return (
        <div className="container mt-5">
            <List/>
            <hr/>
            <Table/>
        </div>
    )
}

export default Hoc;
