import React from 'react';
import { useParams } from 'react-router-dom';
import OneProject from './OneProject';

function Projects() {
    const   params = useParams(),
            current = params.id;

    if (current) {
        return (
            <div>
                <OneProject />
            </div>
        );
    } else {
        return (
            <div>
                <h1>Projects</h1>
            </div>
        );
    };
}

export default Projects;