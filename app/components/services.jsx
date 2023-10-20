import React, { useEffect, useState } from 'react'

const Services = () => {
  const [isMobile, setIsMobile] = useState(null)
  useEffect(() => {
    const mobile = window.innerWidth < 1100
    setIsMobile(mobile)
  }, [])
  return (
    <div className='card services' id='services'>
      <h2>
        In the room
        <br />
        with you.
      </h2>
      <div className='services__img-container'>
        <img
          src='/images/chair.jpg'
          alt='In the room with you.'
          data-speed={isMobile ? 0 : 0.7}
        />
      </div>
      <p>
        I chose to become a coach because it utilises my greatest strength,
        listening. It is also encompasses my principle motivation which is
        helping others. Before becoming the Director of the Green Room Coaching
        Practice I gathered over twenty years of professional coaching
        experience. I first qualified as a performance coach with the National
        Trust in the early 2000’s whilst leading their Stonehenge Project.
      </p>
      <p>
        Since that time I have worked with individuals, businesses, charities
        and and communities largely in a listening and facilitating role which
        is the essence of what a coach does. Most of my important work has been
        bringing communities of interest together through dialogue and building
        effective teams and leaders. I also work with therapists who having
        taken their clients through therapy have brought them to a place where
        they are ready to move beyond what had defined them into what they want
        to become.
      </p>
      <p>
        Before establishing the Green Room I also worked in the careers space
        for the Careers and Enterprise Company with the mission of helping every
        young person find their next best step. I continue to want to fulfil
        that mission but in a broader context. I want to help anyone seeking to
        make a leap into the unknown, but perhaps not knowing where to begin.
      </p>
      <p>
        Traditionally the Green Room is where performers prepare themself to
        take the stage. I want to be in the room with you to create the space to
        help you make your discoveries, to unlock your potential and help
        prepare you to make your entry onto your next stage. I see this happen
        almost every day, it will happen for you.
      </p>
    </div>
  )
}

export default Services
