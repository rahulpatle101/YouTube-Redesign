import React from 'react';
import './style.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="spacer"></div>
            <div className="content">
                <div className="general-section">
                    <ul className="general-section__ul">
                        <li className="list__home active">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8' />
                                    </svg>
                                </div>
                                <h2>Home</h2>
                            </a>

                        </li>
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z'
                                        />
                                    </svg>
                                </div>
                                <h2>Trending</h2>
                            </a>

                        </li>
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z'
                                        />
                                    </svg>
                                </div>
                                <h2>Subscriptions</h2>
                            </a>

                        </li>
                    </ul>
                </div>
                <div className="playlist-section">
                    <ul className="playlist-section_ul">
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M12,6.75 L10.2,5 L4.8,5 C3.81,5 3,5.7875 3,6.75 L3,17.25 C3,18.2125 3.81,19 4.8,19 L19.2,19 C20.19,19 21,18.2125 21,17.25 L21,8.5 C21,7.5375 20.19,6.75 19.2,6.75 L12,6.75 Z'
                                            fillRule='evenodd' />
                                    </svg>
                                </div>
                                <h2>Library</h2>
                            </a>

                        </li>
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z'
                                        />
                                    </svg>
                                </div>
                                <h2>History</h2>
                            </a>

                        </li>
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z'
                                        />
                                    </svg>
                                </div>
                                <h2>Watch later</h2>
                            </a>

                        </li>
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z'
                                        />
                                    </svg>
                                </div>
                                <h2>Liked Videos</h2>
                            </a>

                        </li>
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z'
                                        />
                                    </svg>
                                </div>
                                <h2>Trap Drum Production</h2>
                            </a>

                        </li>
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z'
                                        />
                                    </svg>
                                </div>
                                <h2>JavaScript Sauce</h2>
                            </a>

                        </li>
                    </ul>
                </div>
                <div className="settings-section">
                    <ul className="settings-section_ul">
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M12,6.75 L10.2,5 L4.8,5 C3.81,5 3,5.7875 3,6.75 L3,17.25 C3,18.2125 3.81,19 4.8,19 L19.2,19 C20.19,19 21,18.2125 21,17.25 L21,8.5 C21,7.5375 20.19,6.75 19.2,6.75 L12,6.75 Z'
                                            fillRule='evenodd' />
                                    </svg>
                                </div>
                                <h2>Settings</h2>
                            </a>

                        </li>
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z'
                                        />
                                    </svg>
                                </div>
                                <h2>Report History</h2>
                            </a>

                        </li>
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z'
                                        />
                                    </svg>
                                </div>
                                <h2>Help</h2>
                            </a>

                        </li>
                        <li className="list__home">
                            <a className="item-link">
                                <div className="item-icon">
                                    <svg viewBox='0 0 24 24' style={{ width: '100%', height: '100%' }} pointerEvents='none'
                                        display='block'>
                                        <path d='M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z'
                                        />
                                    </svg>
                                </div>
                                <h2>Send Feedback</h2>
                            </a>

                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <div className="footer-links">
                        <a href="" className="link-item">About</a>
                        <a href="" className="link-item">Press</a>
                        <a href="" className="link-item">Copyright</a>
                        <a href="" className="link-item">Contact Us</a>
                        <a href="" className="link-item">Creators</a>
                        <a href="" className="link-item">Advertise</a>
                        <div className="terms-policy">
                            <a href="" className="link-item">Terms</a>
                            <a href="" className="link-item">Privacy Policy</a>
                            <a href="" className="link-item">Contact Us</a>
                        </div>
                    </div>
                    <div className="copy-right">2019 YouTube</div>
                </div>
            </div>
        </div>
    )
}


export default Sidebar;