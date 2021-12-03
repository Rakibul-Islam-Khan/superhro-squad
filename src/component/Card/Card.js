import React from 'react';
import "./Card.css"
const Card = (props) => {
    const { name, age, img, profession, citizenship, salary } = props.men;
    return (
        <div className="container my-3 program-card">
            <div className="shadow card h-100 border-dark">
                <img src={img} className="card-img-top" height="250px" width="250px" alt="..."/>
                <div className="card-body">
                    <h6 className="card-title">Name: {name}</h6>
                    <h6 className="card-title">Age: {age}</h6>
                    <h6 className="card-title">Profession: {profession}</h6>
                    <h6 className="card-title">Country: {citizenship}</h6>
                    <h6 className="card-title">Salary: {salary}</h6>
                    <button className="mt-3 btn btn-danger" onClick={() =>  props.handleAddToPerson(props.men)}><i className="bi bi-bag-plus-fill"></i> Add to programmer</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
