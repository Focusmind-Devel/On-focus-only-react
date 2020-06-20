import React from 'react';

import '../../assets/styles/components/Podcast.scss';

import Spotify from '../../assets/static/images/svg/spotify.svg'


const Hero = () => (
        <section className="podcast__hero">
            <div className="podcast__hero__inside">
            <h1 className="podcast__hero__title">Lorem ipsum dolor sit amet sed diam nonummy.</h1>
            <div className="flex">
                <p className="podcast__hero__text">Lorem ipsum dolor sit amet, consectse diam nonummy nibh euismod tincidunt.</p>
                <div className="flex">
                    <p className="podcast__hero__text__song">Escuchalo en</p>
                    <img src={Spotify} alt="ícono de Spotify"/>
                    <img src={Spotify} alt="ïcono de Música"/>
                </div>
            </div>
            </div>
        </section>
)
export default Hero;