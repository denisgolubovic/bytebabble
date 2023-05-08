import React from 'react';

const Analytics: React.FC = () => {
    const views = 0;
    const interactions = 0;


    return (
        <div className="analytics bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">My Blog Post Analytics</h2>
            <p className="mb-2">Total views: {views}</p>
            <p>Interactions (likes/dislikes): {interactions}</p>
        </div>
    );
};

export default Analytics;
