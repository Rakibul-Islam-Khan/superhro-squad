// club component
import React from 'react';
const Club = (props) => {
    console.log(props.person);
    const {person} = props;
    let totalSalary = 0;
    let name = "";
    for (const total of person) {
        totalSalary += total.salary;
        name += total.name;
        
    }
    return (
        // club card
        <div>
            <div className="card-body">
                <h5 className="mb-4 text-center card-title fs-4 fw-bold">Programmer Club</h5>
                <p className="card-text fw-bold"><i className="bi bi-person-circle"></i> Programmer Add: <span>{props.person.length}</span></p>
                <p className="card-text fw-bold">Total Cost: <span>${totalSalary}</span></p>
                <p className="card-text fw-bold">Name: {name}</p>
            </div>
        </div>
    );
}

export default Club;
