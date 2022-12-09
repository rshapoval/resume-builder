import React from 'react'
import styled from 'styled-components'

import PaperHeader from './paper-header'
import PaperContent from './paper-content'

export default function PaperWrapper () {
  return (
    <StyledWrapper>
      <h1>Resume Builder</h1>
      <div className='paper'>
        <PaperHeader />
        <PaperContent />
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .paper {
    width: 29.7cm;
    height: 42cm;
    padding: 2rem 1.5rem;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    transform: scale(0.25);
    transform-origin: 0 0;

    @media screen and (min-width: 768px) {
      transform: scale(0.5);
    }

    @media screen and (min-width: 992px) {
      transform: scale(0.75);
    }

    @media screen and (min-width: 1200px) {
      transform: scale(1);
    }
  }
`
