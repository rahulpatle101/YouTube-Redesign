import React from 'react';

const UploadedVideo = () => {
    return (
        <div className="video-card">
                            <div className="thumbnail">
                                <div className="video-duration">5:59</div>
                            </div>
                            <div className="details">
                                <div className="top-deck">
                                    <div className="top">
                                        <div className="video-title">How to set up Google's Advanced Protection Program</div>
                                        <div className="channel-name">Google</div>
                                    </div>
                                    <div className="bottom">
                                        <div className="video-views">79K</div>
                                        <div className="uploaded-date">3 months ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className="play-overlay">
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style={{ width:
'100%', height: '100%' }} fill='#fff' pointerEvents='none' display='block'>
    <path d='M 7 5 L 7 19 L 19 12 Z' id='surface1' />
</svg>
                            </div>
                        </div>
    )
}

export default UploadedVideo
