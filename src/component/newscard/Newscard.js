import React from 'react'
export default function Newscard(proops) {
  return (
    <div>
      <div class="new__content swiper-slide">
        <div class="new__tag">New</div>
        <img src={proops.img} alt="" class="new__img" />
        <h3 class="new__title">{proops.heading}</h3>
        <span class="new__subtitle">{proops.disc}</span>

        <div class="new__prices">
          <span class="new__price">{proops.price1}</span>
          <span class="new__discount">{proops.price2}</span>
        </div>

        <button class="button new__button">
          <i class='bx bx-cart-alt new__icon'></i>
        </button>
      </div>


    </div>
  )
}
