
import cardimg1 from "../../assets/img/category1-img.png"
import cardimg2 from "../../assets/img/category2-img.png"
import cardimg3 from "../../assets/img/category3-img.png"
import Scarecard from "../scarecard/Scarecard"
export default function Homepageone() {
  return (
    <>
      <section class="section category" >
                <h2 class="section__title">Favorite Scare <br /> Category</h2>

                <div class="category__container container grid">

                   <Scarecard cardimg={cardimg1} heading="Ghosts" para="Choose the ghosts, the scariest there are."/>

                   <Scarecard cardimg={cardimg2} heading="Pumpkins" para="You look at the scariest pumpkins there is."/>
                   
                   <Scarecard cardimg={cardimg3} heading="Witch Hat" para="Pick the most stylish witch hats out there."/>

                </div>
            </section>


    </>
  )
}
