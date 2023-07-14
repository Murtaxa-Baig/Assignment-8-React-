import React from 'react'
import Newscard from '../../newscard/Newscard'
import img1 from "../../../assets/img/new1-img.png"
import img2 from "../../../assets/img/new2-img.png"
import img3 from "../../../assets/img/new3-img.png"
import img4 from "../../../assets/img/new4-img.png"
import img5 from "../../../assets/img/new5-img.png"
import img6 from "../../../assets/img/new6-img.png"

export default function News() {
    return (
        <>
            <section class="section new" id="new">
                <h2 class="section__title">New Arrivals</h2>

                <div class="new__container container">
                    <div class="swiper new-swiper">
                        <div class="swiper-wrapper">
                            <Newscard img={ img1} heading="Haunted House" disc="Accessory" price1="$14.99" price2="$29.99" />
                            <Newscard img={ img2} heading="Halloween Candle" disc="Accessory" price1="$11.99" price2="$21.99" />
                            <Newscard img={ img3} heading="Witch Hat" disc="Accessory" price1="$4.99" price2="$9.99" />
                            <Newscard img={ img4} heading="Rip" disc="Accessory" price1="$24.99" price2="$44.99" />
                            <Newscard img={ img5} heading="Terrifying Crystal" disc="Accessory" price1="$5.99" price2="$12.99" />
                            <Newscard img={ img6} heading="Witch Broom" disc="Accessory" price1="$7.99" price2="$14.99" />

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
