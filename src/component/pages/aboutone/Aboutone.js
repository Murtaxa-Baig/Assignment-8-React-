import React from 'react'
import img from "../../../assets/img/discount-img.png"

export default function Aboutone() {
  return (
    <>
     <section class="section discount">
                <div class="discount__container container grid">
                    <div class="discount__data">
                        <h2 class="discount__title">50% Discount <br /> On New Products</h2>
                        <a href="#" class="button">Go to new</a>
                    </div>

                    <img src={img} alt="" class="discount__img" />
                </div>
            </section>


    </>
  )
}
