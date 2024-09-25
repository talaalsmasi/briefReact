import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

const PopupVideo = ({ videoClass, children, videoId }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />

            <Link className={`${videoClass}`} onClick={() => setOpen(true)} href="#">
                {children}
            </Link>
        </>
    );
};

export default PopupVideo;