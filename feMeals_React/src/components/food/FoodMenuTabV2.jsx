import React from 'react';
import SingleFoodMenuTabV2 from './SingleFoodMenuTabV2';

const FoodMenuTabV2 = ({ list }) => {
    return (
        <>
            <div className="info">
                <ul className="meal-type">
                    <li>Half</li>
                    <li>Full</li>
                </ul>
                <ul className="meal-items">
                    {list.tabData.map(data =>
                        <SingleFoodMenuTabV2 data={data} key={data.id} />
                    )}
                </ul>
            </div>
        </>
    );
};

export default FoodMenuTabV2;