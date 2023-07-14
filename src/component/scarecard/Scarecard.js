import React from 'react'

export default function Scarecard(proops) {
    return (
        <>
            <div class="category__data">
                <img src={proops.cardimg} alt="" class="category__img" />
                    <h3 class="category__title">{proops.heading}</h3>
                    <p class="category__description">{proops.para}</p>
            </div>


        </>
    )
}
