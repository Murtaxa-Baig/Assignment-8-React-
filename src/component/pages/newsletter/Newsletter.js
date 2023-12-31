import React from 'react'

export default function Newsletter() {
  return (
    <div>
        <section class="section newsletter">
                <div class="newsletter__container container">
                    <h2 class="section__title">Our Newsletter</h2>
                    <p class="newsletter__description">
                        Promotion new products and sales. Directly to your inbox
                    </p>

                    <form action="" class="newsletter__form">
                        <input type="text" placeholder="Enter your email" class="newsletter__input" />
                        <button class="button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
    </div>
  )
}
