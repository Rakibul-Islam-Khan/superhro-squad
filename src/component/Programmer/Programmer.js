// programer component
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Club from '../Club/Club';
import "./Programmer.css"
const Programmer = () => {
    const [programer, setProgrammer] = useState([]);
    const [person, setPerson] = useState([]);
    useEffect(() => {
        fetch("./fakeData.JSON")
            .then(res => res.json())
            .then(data => setProgrammer(data));
    }, []);
    const handleAddToPerson = (men) => {
        const newPerson = [...person, men];
        setPerson(newPerson);
    }
    return (
        // main container
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                    {
                        programer.map(men => <Card men={men} key={men.id} handleAddToPerson={handleAddToPerson}></Card>)
                    }
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="shadow card w-100 border-dark">
                        <Club person={person}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programmer;
                                                                                               