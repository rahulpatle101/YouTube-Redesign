import React, { Component, div } from 'react';
import RecommentSuggest from './RecommendSuggest'
import './style.css';


class DetailView extends Component {
    constructor(props) {
		super(props);
		this.state = {
            subscribeCounter: 190
		};
	}

    componentDidMount() {
        this.setState({
            activeTab: 1
        });
    }

    handleSubscribe = (e) => {

        this.setState({
            subscribeCounter: this.state.subscribeCounter+1
        });
        e.target.classList.remove('animate');

        e.target.classList.add('animate');
        setTimeout(function(){
            console.log(e)
            e.target.classList.remove('animate');
        },700);
        console.log(e.target.classList);
    }

    render() {
    return (
        <div className="main-container">
            <div className="video-list-container">
                <section className="recommended-section">
                    <div className="recommender-list">
                        <div className="video-player-container">
                            <iframe width="800" height="450" src="https://www.youtube.com/embed/SB-qEYVdvXA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                                <div className="subscribe-btn"><a><svg className="bell" style={{ width: 30, height: 30 }} fill="#7d7d7d" viewBox='0 0 24 24'>
                                    <path fill='#7d7d7d' d='M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z'
                                    />
                                </svg></a>
                                <button className="confetti-button" 
                                    onClick={this.handleSubscribe}>
                                    {`+ Subscribe ${this.state.subscribeCounter}K`}
                                </button>
                                </div>
                            </div>
                        </div>
                        <RecommentSuggest/>
                    </div>
                </section>
            </div>
        </div>)
}
}
                            
export default DetailView;