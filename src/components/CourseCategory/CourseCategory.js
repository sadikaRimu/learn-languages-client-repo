import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseCategory = () => {
    const courseCategory = useLoaderData();
    return (
        <div>
            <h2>course category page: {courseCategory.length}</h2>
        </div>
    );
};

export default CourseCategory;