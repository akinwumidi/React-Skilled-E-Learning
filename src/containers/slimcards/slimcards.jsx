import React from 'react'
import './slimcards.scss'
import { Slimcard } from '../../components'
import { Images } from './../../constants'

const Slyslimcard = () => (
  <div className="slyslimcard">
    <h2>Check out our most popular courses!</h2>
  </div>
)

const Slimcards = () => {
  return (
    <main>
      <section className="slimcards-section">
        <div className="slimcards-container container">
          <Slyslimcard />
          <Slimcard
            title="Animation"
            Img={Images.Animation}
            text="Learn the latest animation techniques to create stunning motion design and captivate your audience."
          />
          <Slimcard
            title="Design"
            Img={Images.Design}
            text="Create beautiful, usable interfaces to help shape the future of how the web looks. Even with no experience!"
          />
          <Slimcard
            title="Photography"
            Img={Images.Photography}
            text="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.

"
          />
          <Slimcard
            title="Crypto"
            Img={Images.Crypto}
            text="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
          />
          <Slimcard
            title="Business"
            Img={Images.Business}
            text="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
          />
        </div>
      </section>
    </main>
  )
}

export default Slimcards
