import React from 'react';
import { Link } from 'react-router-dom'
import RecommendationCard from '../VideoCard/RecommendationCard'
import DefaultVideo from '../VideoCard/UploadedVideo'
import './style.css';

const HomeView = () => {
    return (
        <div className="main-container">
            <div className="video-list-container">
                <section className="recommended-section">
                    <h2>Recommended</h2>
                    <div className="recommender-list">
                        <RecommendationCard />
                        <RecommendationCard />
                        <RecommendationCard />
                        <RecommendationCard />
                        <RecommendationCard />
                        <RecommendationCard />
                        <RecommendationCard />
                        <RecommendationCard />
                        <RecommendationCard />       
                    </div>
                </section>
                <section className="recently-uploaded-section">
                    <h2>Recently Uploaded</h2>
                    <div className="uploaded-list">
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                        <DefaultVideo />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomeView;