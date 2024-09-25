import React from 'react';

const SingleChefList = ({ list }) => {
    const { listTitle, memberInfo } = list;

    return (
        <>
            <div className="chef-list-item">
                <h4>{[listTitle]}</h4>
                <ul>
                    {memberInfo.map(info =>
                        <li key={info.id}>
                            <h5>{[info.title]}</h5>
                            <span>{[info.info]}</span>
                            <p>{[info.timeSpan]}</p>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default SingleChefList;