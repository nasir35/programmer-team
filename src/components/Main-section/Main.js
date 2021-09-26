import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../person-card/Person';
import './Main.css'

const Main = () => {
    // the first useState was declared to store data found from JSON file 
    const [persons, setPersons] = useState([]);
    // and the second one declared for storing data who are added in team 
    const [team, setTeam]= useState([]);

    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res=> res.json())
        .then(data => {setPersons(data)})
    }, []);

    const handleAddToTeam = data =>{
        if(!team.includes(data)){
            const newTeam = [...team, data]
            setTeam(newTeam);
        }
        else{
            alert('programmer already added!');
        }        
    }
    return (
        <div className="container main-layout">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    persons.map(person=><Person data={person} key={person.name} handleAddToTeam={handleAddToTeam} team={team}></Person>)
                }
            </div>
            <div className="cart">
                {/* passing team as props where team is the data about added persons  */}
                <Cart team={team}></Cart>
            </div>
        </div>
    );
};

export default Main;