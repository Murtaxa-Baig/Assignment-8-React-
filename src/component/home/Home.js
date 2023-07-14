import React from 'react'
import Homepage from '../pages/homepage/Homepage'
import Homepageone from '../homepageone/Homepageone'
import About from '../pages/about/About'
import Candy from '../pages/candy/Candy'
import Aboutone from '../pages/aboutone/Aboutone'
import News from '../pages/news/News'
import Newscard from '../newscard/Newscard'
import Newsletter from '../pages/newsletter/Newsletter'

export default function Home() {
    return (
        <>
            <main class="main">

                <section class="home container" id="home">
                    <div class="swiper home-swiper">
                        <div class="swiper-wrapper">
                            <Homepage />
                        </div>
                    </div>
                    <Homepageone />
                    <About />
                    <Candy />
                    <Aboutone />
                    <News />
                    <Newsletter />
                
                
                
                </section >
            </main>
        </>
    )
}
