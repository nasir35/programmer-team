import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Person.css'

const Person = (props) => {
    const{name, img, age, profession, skill, salary} = props.data;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img" alt="..."/>
                <div className="card-body">
                    <p><b>Name</b> : {name}</p>
                    <p><b>Age</b> : {age} years</p>
                    <p><b>Role</b> : {profession}</p>
                    <p><b>Expert on</b> : <small>{skill}</small></p>
                    <p><b>Salary</b> : ${salary}</p>
                    {/* below i am changing the button text based on it was clicked or not */}
                    <button className="btn btn-success btn-color d-block px-5 mx-auto" 
                    onClick={()=>props.handleAddToTeam(props.data)}>
                        <FontAwesomeIcon icon={faUserPlus} />
                        {props.team.find(member=>member.name==name)? 'Already Added' : 'Add To Team'}
                        </button>
                </div>
            </div>
        </div>    
    );
};

export default Person;