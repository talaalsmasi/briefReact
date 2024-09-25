import React from 'react';
import SocialShareV3 from '../social/SocialShareV3';
import SingleChefList from './SingleChefList';
import SkillProgress from '../progress/SkillProgress';
import { HashLink as Link } from 'react-router-hash-link';

const ChefDetailsContent = ({ chefInfo }) => {
    const { thumb, name, email, memberData, skillProgress } = chefInfo

    return (
        <>
            <div className="chef-single-area bg-gray default-padding-top">
                <div className="container">
                    <div className="chef-content-top">
                        <div className="row align-center">
                            <div className="col-lg-5 left-info">
                                <div className="thumb">
                                    <img src={`/assets/img/team/${[thumb]}`} alt="Thumb" />
                                </div>
                            </div>
                            <div className="col-lg-7 right-info pl-80 pl-md-15 pl-xs-15">
                                <h2>{[name]}</h2>
                                <p>
                                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from.
                                </p>

                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>
                                            175 10h Street, Office 375 Berlin, De 21562
                                        </p>
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope"></i>
                                        <a href={`mailto:${email}`}> {email}</a>
                                    </li>
                                    <li>
                                        <i className="fas fa-phone-alt"></i>
                                        <a href="tel:123-456-7890">+44-20-7328-4499</a>
                                    </li>
                                </ul>
                                <div className="social">
                                    <Link className="btn circle btn-sm btn-theme animation" to="/contact#">Contact Me</Link>
                                    <div className="share-link">
                                        <i className="fas fa-share-alt"></i>
                                        <ul>
                                            <SocialShareV3 />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-info bg-light default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="chef-single-list">
                                    {memberData.map(list =>
                                        <SingleChefList list={list} key={list.id} />
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="skill-items">
                                    <h3>Personal Skills</h3>
                                    {skillProgress.map(skill =>
                                        <SkillProgress skill={skill} key={skill.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChefDetailsContent;