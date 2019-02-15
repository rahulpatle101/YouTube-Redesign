import React, { Component, div } from 'react';
import './style.css';

const DetailView = () => {
    return (
        <div className="main-container">
            <div className="video-list-container">
                <section className="recommended-section">
                    <div className="recommender-list">
                        <div className="video-player-container">
                            <iframe width="900" height="500" src="https://www.youtube.com/embed/SB-qEYVdvXA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="video-details">
                                <div className="left">
                                    <div className="video-title">
                                        So many cute kittens videos compilation 2018
                                                </div>
                                    <div className="video-view-counts">
                                        10,023,570 views
                                                </div>
                                </div>
                                <div className="right">
                                    <a className="like-cta">
                                        <svg viewBox='0 0 24 24' style={{ width: 30, height: 30 }} pointerEvents='none'
                                            display='block' fill='#727272'>
                                            <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'
                                            />
                                        </svg>
                                        1.7K
                                        </a>
                                    <a className="dislike-cta">
                                        <svg viewBox='0 0 24 24' style={{ width: 30, height: 30 }} pointerEvents='none'
                                            display='block' fill='#727272'>
                                            <path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z'
                                            />
                                        </svg>
                                        22
                                        </a>
                                    <a className="share-cta">
                                        <svg style={{ width: 30, height: 30 }} viewBox='0 0 24 24'>
                                            <path fill='#7d7d7d' d='M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z'
                                            />
                                        </svg>
                                    </a>
                                    <a className="more-cta">
                                        <svg style={{ width: 30, height: 30 }} viewBox='0 0 24 24'>
                                            <path fill='#7d7d7d' d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z'
                                            />
                                        </svg></a>
                                </div>
                            </div>
                            <div className="video-account-detail">
                                <div className="account-info">
                                    <img src="https://randomuser.me/api/portraits/women/8.jpg" />
                                    <div className="name-publish">
                                        <div className="account-name">Funny Animals</div>
                                        <div className="published-date">Published on Mar 18, 2018</div>
                                        <div className="account-description">Amazing playlist video on Funny Animals Channel</div>
                                    </div>
                                </div>
                                <div className="subscribe-btn"><a><svg style={{ width: 30, height: 30 }} viewBox='0 0 24 24'>
                                    <path fill='#7d7d7d' d='M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z'
                                    />
                                </svg></a><button className="confetti-button">+ Subscribe 190K</button></div>
                            </div>
                        </div>
                        <div className="comments-suggest-container">
                            <div className="tabs">
                                <button className="comments-tab"><svg style={{ width: 20, height: 20, paddingRight: 5 }} viewBox='0 0 24 24'>
                                    <path d='M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z'
                                    />
                                </svg>Comments</button>
                                <button className="suggest-tab active"><svg viewBox='0 0 24 24' style={{
                                    width: 20, height: 20, paddingRight:
                                        5
                                }} pointerEvents='none' display='block'>
                                    <path d='M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z'
                                    />
                                </svg>Suggested</button>
                            </div>
                            <div className="comments-container">
                                <div className="comment-summary">
                                    <div className="total-comments">1300 Comments</div>
                                    <div className="sort-by"><svg viewBox='0 0 24 24' style={{ width: 24, height: 24 }} pointerEvents='none'
                                        display='block'>
                                        <path d='M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z' />
                                        <path d='M0 0h24v24H0z' fill='none' />
                                    </svg>
                                        Sort by
                                        </div>
                                </div>
                                <div className="add-comment">
                                    <div className="profile-pic">
                                        <img src="https://randomuser.me/api/portraits/women/35.jpg" alt="" className="user-img" />
                                    </div>
                                        <div className="add-comment-text">Add a public comment...</div>
                                    </div>
                                    <div className="comment-list-container">
                                        <div className="list-item">
                                            <div className="user-image"><img src="https://randomuser.me/api/portraits/women/25.jpg" alt="" className="user-img" /></div>
                                                <div className="comment-details">
                                                    <div className="top-deck">
                                                        <div className="comment-user-name">Karen Kaga</div>
                                                        <div className="comment-duration">8 hours ago</div>
                                                    </div>
                                                    <div className="middle-deck">
                                                        <div className="comment-body-text">Future of Indian Rap Is Secured !!!</div>
                                                    </div>
                                                    <div className="bottom-deck">
                                                        <div className="reply-cta"><a><svg style={{ width: 18, height: 18 }} viewBox='0 0 24 24'>
                                                            <path fill='#4c8df6' d='M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z'
                                                            />
                                                        </svg></a>Reply</div>
                                                        <div className="like-dislike-cta">
                                                            <a href="#" className="like">
                                                                <svg viewBox='0 0 24 24' style={{ width: 18, height: 18 }} pointerEvents='none'
                                                                    display='block' fill='#727272'>
                                                                    <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'
                                                                    />
                                                                </svg>
                                                            </a>
                                                            <a href="#" className="dislike">
                                                                <svg viewBox='0 0 24 24' style={{ width: 18, height: 18 }} pointerEvents='none'
                                                                    display='block' fill='#727272'>
                                                                    <path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z'
                                                                    />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-item">
                                                <div className="user-image"><img src="https://randomuser.me/api/portraits/women/25.jpg" alt="" className="user-img" /></div>
                                                    <div className="comment-details">
                                                        <div className="top-deck">
                                                            <div className="comment-user-name">Karen Kaga</div>
                                                            <div className="comment-duration">8 hours ago</div>
                                                        </div>
                                                        <div className="middle-deck">
                                                            <div className="comment-body-text">Future of Indian Rap Is Secured !!!</div>
                                                        </div>
                                                        <div className="bottom-deck">
                                                            <div className="reply-cta"><a><svg style={{ width: 18, height: 18 }} viewBox='0 0 24 24'>
                                                                <path fill='#4c8df6' d='M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z'
                                                                />
                                                            </svg></a>Reply</div>
                                                            <div className="like-dislike-cta">
                                                                <a href="#" className="like">
                                                                    <svg viewBox='0 0 24 24' style={{ width: 18, height: 18 }} pointerEvents='none'
                                                                        display='block' fill='#727272'>
                                                                        <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'
                                                                        />
                                                                    </svg>
                                                                </a>
                                                                <a href="#" className="dislike">
                                                                    <svg viewBox='0 0 24 24' style={{ width: 18, height: 18 }} pointerEvents='none'
                                                                        display='block' fill='#727272'>
                                                                        <path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z'
                                                                        />
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-item">
                                                    <div className="user-image"><img src="https://randomuser.me/api/portraits/women/25.jpg" alt="" className="user-img" /></div>
                                                        <div className="comment-details">
                                                            <div className="top-deck">
                                                                <div className="comment-user-name">Karen Kaga</div>
                                                                <div className="comment-duration">8 hours ago</div>
                                                            </div>
                                                            <div className="middle-deck">
                                                                <div className="comment-body-text">Future of Indian Rap Is Secured !!!</div>
                                                            </div>
                                                            <div className="bottom-deck">
                                                                <div className="reply-cta"><a><svg style={{ width: 18, height: 18 }} viewBox='0 0 24 24'>
                                                                    <path fill='#4c8df6' d='M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z'
                                                                    />
                                                                </svg></a>Reply</div>
                                                                <div className="like-dislike-cta">
                                                                    <a href="#" className="like">
                                                                        <svg viewBox='0 0 24 24' style={{ width: 18, height: 18 }} pointerEvents='none'
                                                                            display='block' fill='#727272'>
                                                                            <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'
                                                                            />
                                                                        </svg>
                                                                    </a>
                                                                    <a href="#" className="dislike">
                                                                        <svg viewBox='0 0 24 24' style={{ width: 18, height: 18 }} pointerEvents='none'
                                                                            display='block' fill='#727272'>
                                                                            <path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z'
                                                                            />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="list-item">
                                                        <div className="user-image"><img src="https://randomuser.me/api/portraits/women/25.jpg" alt="" className="user-img" /></div>
                                                            <div className="comment-details">
                                                                <div className="top-deck">
                                                                    <div className="comment-user-name">Karen Kaga</div>
                                                                    <div className="comment-duration">8 hours ago</div>
                                                                </div>
                                                                <div className="middle-deck">
                                                                    <div className="comment-body-text">Future of Indian Rap Is Secured !!!</div>
                                                                </div>
                                                                <div className="bottom-deck">
                                                                    <div className="reply-cta"><a><svg style={{ width: 18, height: 18 }} viewBox='0 0 24 24'>
                                                                        <path fill='#4c8df6' d='M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z'
                                                                        />
                                                                    </svg></a>Reply</div>
                                                                    <div className="like-dislike-cta">
                                                                        <a href="#" className="like">
                                                                            <svg viewBox='0 0 24 24' style={{ width: 18, height: 18 }} pointerEvents='none'
                                                                                display='block' fill='#727272'>
                                                                                <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'
                                                                                />
                                                                            </svg>
                                                                        </a>
                                                                        <a href="#" className="dislike">
                                                                            <svg viewBox='0 0 24 24' style={{ width: 18, height: 18 }} pointerEvents='none'
                                                                                display='block' fill='#727272'>
                                                                                <path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z'
                                                                                />
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="suggest-video-container active">
                                                        <div className="suggest-video-list">
                                                            <div className="video-card">
                                                                <div className="thumbnail"></div>
                                                                <div className="meta-data">
                                                                    <div className="top-deck">
                                                                        <div className="top">
                                                                            <div className="video-title">How to set up Google's Advanced Protection Program</div>
                                                                            <div className="uploaded-date">3 months ago</div>
                                                                        </div>
                                                                        <div className="middle">
                                                                            <div className="channel-name">Google</div>
                                                                            <div className="video-views">79K</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <div className="video-duration">5:59</div>
                                                                    </div>
                                                                </div>
                                                                <div className="play-overlay">
                                                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style={{
                                                                        width:
                                                                            '100%', height: '100%' }} fill='#fff' pointerEvents='none' display='block'>
                                                                        <path d='M 7 5 L 7 19 L 19 12 Z' id='surface1' />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div className="video-card">
                                                                <div className="thumbnail"></div>
                                                                <div className="meta-data">
                                                                    <div className="top-deck">
                                                                        <div className="top">
                                                                            <div className="video-title">How to set up Google's Advanced Protection Program</div>
                                                                            <div className="uploaded-date">3 months ago</div>
                                                                        </div>
                                                                        <div className="middle">
                                                                            <div className="channel-name">Google</div>
                                                                            <div className="video-views">79K</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <div className="video-duration">5:59</div>
                                                                    </div>
                                                                </div>
                                                                <div className="play-overlay">
                                                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style={{
                                                                        width:
                                                                            '100%', height: '100%' }} fill='#fff' pointerEvents='none' display='block'>
                                                                        <path d='M 7 5 L 7 19 L 19 12 Z' id='surface1' />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div className="video-card">
                                                                <div className="thumbnail"></div>
                                                                <div className="meta-data">
                                                                    <div className="top-deck">
                                                                        <div className="top">
                                                                            <div className="video-title">How to set up Google's Advanced Protection Program</div>
                                                                            <div className="uploaded-date">3 months ago</div>
                                                                        </div>
                                                                        <div className="middle">
                                                                            <div className="channel-name">Google</div>
                                                                            <div className="video-views">79K</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <div className="video-duration">5:59</div>
                                                                    </div>
                                                                </div>
                                                                <div className="play-overlay">
                                                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style={{
                                                                        width:
                                                                            '100%', height: '100%' }} fill='#fff' pointerEvents='none' display='block'>
                                                                        <path d='M 7 5 L 7 19 L 19 12 Z' id='surface1' />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div className="video-card">
                                                                <div className="thumbnail"></div>
                                                                <div className="meta-data">
                                                                    <div className="top-deck">
                                                                        <div className="top">
                                                                            <div className="video-title">How to set up Google's Advanced Protection Program</div>
                                                                            <div className="uploaded-date">3 months ago</div>
                                                                        </div>
                                                                        <div className="middle">
                                                                            <div className="channel-name">Google</div>
                                                                            <div className="video-views">79K</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <div className="video-duration">5:59</div>
                                                                    </div>
                                                                </div>
                                                                <div className="play-overlay">
                                                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style={{
                                                                        width:
                                                                            '100%', height: '100%' }} fill='#fff' pointerEvents='none' display='block'>
                                                                        <path d='M 7 5 L 7 19 L 19 12 Z' id='surface1' />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div className="video-card">
                                                                <div className="thumbnail"></div>
                                                                <div className="meta-data">
                                                                    <div className="top-deck">
                                                                        <div className="top">
                                                                            <div className="video-title">How to set up Google's Advanced Protection Program</div>
                                                                            <div className="uploaded-date">3 months ago</div>
                                                                        </div>
                                                                        <div className="middle">
                                                                            <div className="channel-name">Google</div>
                                                                            <div className="video-views">79K</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom">
                                                                        <div className="video-duration">5:59</div>
                                                                    </div>
                                                                </div>
                                                                <div className="play-overlay">
                                                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' style={{
                                                                        width:
                                                                            '100%', height: '100%' }} fill='#fff' pointerEvents='none' display='block'>
                                                                        <path d='M 7 5 L 7 19 L 19 12 Z' id='surface1' />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                </section>
                                    </div>
                                </div>)
                            }
                            
export default DetailView;