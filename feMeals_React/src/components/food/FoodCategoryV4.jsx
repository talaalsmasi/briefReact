import React, { useEffect } from 'react';
import FoodCartV4Data from '@/assets/jsonData/food/FoodCartV4Data.json'
import SingleFoodCategoryV4 from './SingleFoodCategoryV4';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FoodCategoryV4 = () => {

    useEffect(() => {
        const animateUpDown = document.querySelector(".upDownScrol");

        if (animateUpDown) {
            gsap.set(animateUpDown, {
                yPercent: 105
            });

            gsap.to(animateUpDown, {
                yPercent: -105,
                ease: "none",
                scrollTrigger: {
                    trigger: animateUpDown,
                    end: "bottom center",
                    scrub: 1
                },
            });
        }

        // Cleanup function in case the component unmounts
        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);
    return (
        <>
            <div className="food-menu-style-four-area overflow-hidden default-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Food Menu</h4>
                                <h2 className="title">Our Specials Menu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="food-menu-style-four-items">
                        <div className="upDownScrol animate-up-down"><img src="/assets/img/illustration/18.png" alt="Image Not Found" /></div>
                        <div className="row">
                            <div className="col-lg-12 text-center">

                                <div className="nav nav-tabs food-menu-nav style-three four" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                        <img src="/assets/img/icon/20.png" alt="Image Not Found" />
                                        Main Dishes
                                    </button>
                                    <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                        <img src="/assets/img/icon/17.png" alt="Image Not Found" />
                                        Desserts
                                    </button>
                                    <button className="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                                        <img src="/assets/img/icon/18.png" alt="Image Not Found" />
                                        Sea Food
                                    </button>
                                    <button className="nav-link" id="nav-id-4" data-bs-toggle="tab" data-bs-target="#tab4" type="button" role="tab" aria-controls="tab4" aria-selected="false">
                                        <img src="/assets/img/icon/19.png" alt="Image Not Found" />
                                        Beverage
                                    </button>
                                </div>

                            </div>
                            <div className="col-lg-12">
                                <div className="tab-content food-style-four-content" id="nav-tabContent">

                                    {FoodCartV4Data.map(food =>
                                        <div className={`tab-pane fade ${food.tabClass}`} id={`${food.tabId}`} role="tabpanel" key={food.id}>
                                            <div className="row">
                                                {food.tabContent.map(list =>
                                                    <div className="col-xl-6" key={list.id}>
                                                        <div className="food-menus-item">
                                                            <ul className="meal-items">
                                                                {list.tabData.map(data =>
                                                                    <SingleFoodCategoryV4 data={data} key={data.id} />
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
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

export default FoodCategoryV4;