import React from 'react'
import styled from 'styled-components'

import { ReactComponent as LogoIcon } from '../../assets/logo.svg'

export default function FormHeader () {
  return (
    <StyledWrapper>
      <a className='link' href='/'>
        <LogoIcon />
      </a>
      <button
        className='button'
        onClick={() => {}}
      >
        Remove Example
      </button>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  .link {
    display: inline-block;
    width: 5rem;
    height: 5rem;
  }

  .button {
    cursor: pointer;
  }
`
