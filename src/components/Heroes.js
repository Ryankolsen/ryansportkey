import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor } from '@fortawesome/free-solid-svg-icons';

export default function Heroes({ hero, toggleHeroes }) {    
    function handleHeroClick(){
        toggleHeroes(hero.id)
    }
    return (
        <div>
            <ul className="list-group mb-3" > 
                <div className="alignLeft"><input type="checkbox" checked={hero.complete} onChange={handleHeroClick} /> Delete Hero</div>
                <li className="heroNameDisplay list-group-item d-flex justify-content-between align-items-center mb-3" key={hero.id}> {hero.name}                     
               <span className="heroStrengthDisplay badge badge-primary badge-pill" > Power Level <FontAwesomeIcon  icon={faMeteor} style={{ color: 'red' }} /> {hero.strength} </span>                       
                </li>                             
            </ul>       
              
        </div>
    )
}
