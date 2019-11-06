import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    //throw error for test ErrorBoundry script
    // if(true){
    //     throw new Error('Nooooo')
    // }
    return (
        <div>
            {
                robots.map((users, i) => 
                {
                return ( 
                    <Card 
                    key={i} 
                    id= {robots[i].id} 
                    name = {robots[i].name} 
                    username = {robots[i].username} 
                    email = {robots[i].email}
                    />
                )}
             
                )
            }
        </div>
            

    ); 
}
export default CardList;