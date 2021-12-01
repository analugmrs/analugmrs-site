import React from 'react';
import {Container} from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import './Bar.scss';

const Bar = () => {

    return (
        <Container className="align-items-center justify-content-center text-center myt-5 mb-3 py-5">
            <h1>
                <Typewriter
                options={{
                    strings: ['{ analu }', 'front-end dev'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </h1>
        </Container>
    )
    
};

export default Bar;

