import React from 'react'

import cardimg1 from "../../../assets/img/trick-treat1-img.png"
import cardimg2 from "../../../assets/img/trick-treat2-img.png"
import cardimg3 from "../../../assets/img/trick-treat3-img.png"
import cardimg4 from "../../../assets/img/trick-treat4-img.png"
import cardimg5 from "../../../assets/img/trick-treat5-img.png"
import cardimg6 from "../../../assets/img/trick-treat6-img.png"
import Trickcard from '../../trickcard/Trickcard'

export default function Candy() {
  return (
    <>
    <section class="section trick" id="trick">
                <h2 class="section__title">Trick Or Treat</h2>

                <div class="trick__container container grid">
                    <Trickcard cardimg={cardimg1} heading="Toffee" disc="Candy" price="$11.99" />
                    <Trickcard cardimg={cardimg2} heading="Bone" disc="Accessory" price="$8.99" />
                    <Trickcard cardimg={cardimg3} heading="Scarecrow" disc="Accessory" price="$15.99" />
                    <Trickcard cardimg={cardimg4} heading="Candy Cane" disc="Candy" price="$7.99" />
                    <Trickcard cardimg={cardimg5} heading="Pumpkin" disc="Candy" price="$19.99" />
                    <Trickcard cardimg={cardimg6} heading="Ghost" disc="Accessory" price="$17.99" />


                </div>
            </section>


    </>
  )
}
