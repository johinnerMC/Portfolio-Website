import { Data, ScrollDown, Social } from './components'
import './home.css'


export const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>

                <div className="home__img">
                </div>

                <Data/>
            </div>

            <ScrollDown/>
        </div>
    </section>
  )
}
