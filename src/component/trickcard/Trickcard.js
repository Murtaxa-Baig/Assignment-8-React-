import React from 'react'

export default function Trickcard(proops) {
  return (
    <>
         <div class="trick__content">
                        <img src={proops.cardimg} alt="" class="trick__img" />
                        <h3 class="trick__title">{proops.heading}</h3>
                        <span class="trick__subtitle">{proops.disc}</span>
                        <span class="trick__price">{proops.price}</span>
                        <button class="button trick__button">
                            <i class='bx bx-cart-alt trick__icon'></i>
                        </button>
                    </div>

    </>
  )
}
