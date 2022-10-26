import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesCard = () => {
    const courseCard = useLoaderData();
    console.log(courseCard);
    return (
        <div>
            <h3> course card: {courseCard.length}</h3>
        </div>
    );
};

export default CoursesCard;