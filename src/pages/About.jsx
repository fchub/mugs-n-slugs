import './PagesStyle.scss'
import './style/AboutStyle.scss'
import React from 'react'

const About = () => {
    return (
        <div className='mainContentContainer'>
            <div className='aboutContentContainer'>
                <div className='titleContainer'>
                    <h1>Welcome to MugsNSlugs!</h1>
                    <h2>We make packing lists for camping easy!</h2>
                </div>
                <div className='cardContainer'>
                    <div className='cardRow'>
                        <div className='card'>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <h1>Info</h1>
                                </div>
                                <div className='card-back'>
                                    <p>We are a few campers that</p>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <h1>How it works</h1>
                                </div>
                                <div className='card-back'>
                                    <ul className='howListItems'>
                                        <li>Answer questions to produce template packing list</li>
                                        <li>Check template packing list produced from parameters</li>
                                        <li>Edit packing list</li>
                                        <li>Share with collaborators</li>
                                        <li>Save and come back to this packing list</li>
                                    </ul>                                
                                </div>
                            </div>
                        </div>   
                    </div> 
                    <div className='cardRow'>
                        <div className='card'>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <h1>What it looks like</h1>
                                </div>
                                <div className='card-back'>
                                    <h1>Click&nbsp;
                                        <a href='/build'>here</a> to start building
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-inner'>
                                <div className='card-front'>
                                    <h1>Profile</h1>
                                </div>
                                <div className='card-back'>
                                    <p>Making a profile allows you to:</p>
                                    <br />
                                    <ul>
                                        <li>Save multiple packing lists</li>
                                        <li>Collaborate with fellow users</li>
                                        <li>Create your own templates</li>
                                    </ul>
                                    <br />
                                    <h2>Click&nbsp;
                                        <a href='/account'>here</a> to make a new account to sign-in
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About