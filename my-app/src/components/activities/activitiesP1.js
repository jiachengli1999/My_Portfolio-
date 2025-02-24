import React, { Component } from 'react'
import { useEffect } from 'react';
import '../../styles/activities/activities.css'
import Box from './box.js'
import data from './data'
import Nav from './activitiesNav.js'
import Contact from '../Contacts.js'
import Fade from 'react-reveal/Fade';

class activitiesP1 extends Component{
    render(){
        return(
            <main className='container-flex-activitiesP1'>
                <Nav />
                <div className='boxes'>  
                {
                    data.map((obj, index)=>(
                        <Fade>
                            <Box data={obj} key={index}/>
                        </Fade>
                    ))
                }
                </div>
                <Contact/>
            </main>
        )
    }
}

export default activitiesP1;