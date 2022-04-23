import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='about'/>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className='title'>
          <h2>Our Story</h2>
          <div className='underline'></div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rem enim tempora recusandae. Sunt sequi quis cupiditate blanditiis totam, tenetur distinctio nemo ipsam eos hic autem voluptatem id consequuntur doloribus earum eveniet nulla iste quod qui delectus illo? Odit est quidem quis repellendus consequatur nisi! Expedita laboriosam ut pariatur? Nostrum?</p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    
  }
`
export default AboutPage
