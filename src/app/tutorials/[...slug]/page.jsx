import React from 'react';

const TutorialsPage = async({params}) => {
    const {slug} = await params;
    const [technology, topic , page_no, subject] = slug;
    
    
    return (
        <div>
            <h1>{technology}</h1>
            <h1>{page_no}</h1>
            <h1>{topic}</h1>
            <h1>{subject}</h1>
        </div>
    );
};

export default TutorialsPage;