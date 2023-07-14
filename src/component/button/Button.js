import React from 'react'

export default function Button(proops) {
    return (
        <>
            <div class="home__buttons">
                <a href="#" class="button">{proops.text}</a>
                <a href="#" class="button--link button--flex">Track Record <i class='bx bx-right-arrow-alt button__icon'></i></a>
            </div>

        </>
    )
}
