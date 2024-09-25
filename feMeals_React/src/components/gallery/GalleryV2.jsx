import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import { Link } from 'react-router-dom';
import portfolio1 from "/assets/img/portfolio/1.jpg"
import portfolio2 from "/assets/img/portfolio/2.jpg"
import portfolio3 from "/assets/img/portfolio/3.jpg"
import portfolio5 from "/assets/img/portfolio/5.jpg"
import portfolio6 from "/assets/img/portfolio/6.jpg"
import { PhotoProvider, PhotoView } from 'react-photo-view';

const GalleryData = [
    {
        id: 1,
        thumb: portfolio1,
        thumbFull: portfolio1,
        subTitle: "Minion Drinks",
        title: "Cold Lemon Juice"
    },
    {
        id: 2,
        thumb: portfolio2,
        thumbFull: portfolio2,
        subTitle: "Grill Chicken",
        title: "Chicken Sandwich"
    },
    {
        id: 3,
        thumb: portfolio3,
        thumbFull: portfolio3,
        subTitle: "Cheesy Favorite",
        title: "Salmon Steak"
    },
    {
        id: 4,
        thumb: portfolio6,
        thumbFull: portfolio6,
        subTitle: "Cheesy Favorite",
        title: "Crispy Crust Pizzeria"
    },
    {
        id: 5,
        thumb: portfolio5,
        thumbFull: portfolio5,
        subTitle: "Grill Chicken",
        title: "Chicken Sandwich"
    }
]

const GalleryV2 = () => {

    const galleryRef = useRef(null);
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const totalImages = GalleryData.length;

    const handleImageLoad = () => {
        setLoadedImagesCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        if (loadedImagesCount === totalImages) {
            const iso = new Isotope(galleryRef.current, {
                itemSelector: '.gallery-item',
                layoutMode: 'masonry',
            });

            setTimeout(() => {
                iso.layout();
            }, 500);

            return () => {
                iso.destroy();
            };
        }
    }, [loadedImagesCount, totalImages]);

    return (
        <>
            <div className="gallery-style-two-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Food Item</h4>
                                <h2 className="title">Our Food Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="gallery-content-items">
                            <PhotoProvider
                                speed={() => 800}
                                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                            >
                                <div id="gallery-masonary" className="gallery-items gallery-style-two colums-3" ref={galleryRef}>
                                    {GalleryData.map(item =>

                                        <div className={`gallery-item ${item.activeClass}`} key={item.id}>
                                            <div className="gallery-style-one">
                                                <div className="item">
                                                    <PhotoView src={`${item.thumb}`} alt="Image Not Found">
                                                        <Link to="#" className="popup-gallery">
                                                            <img src={`${item.thumb}`} alt="Image Not Found" onLoad={handleImageLoad} />
                                                            <div className="overlay">
                                                                <span>{item.subTitle}</span>
                                                                <h4>{item.title}</h4>
                                                            </div>
                                                        </Link>
                                                    </PhotoView>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </PhotoProvider>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default GalleryV2;