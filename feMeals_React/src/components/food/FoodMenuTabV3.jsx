import React from 'react';
import SingleFoodMenuTabV3 from './SingleFoodMenuTabV3';

const FoodMenuTabV3 = ({ list }) => {
    return (
        <>
            <div className="info">
                <ul className="meal-type">
                    <li>Half</li>
                    <li>Full</li>
                </ul>
                <ul className="meal-items">
                    {list.tabData.map(data =>
                        <SingleFoodMenuTabV3 data={data} key={data.id} />
                    )}
                </ul>
            </div>
        </>
    );
};

export default FoodMenuTabV3;