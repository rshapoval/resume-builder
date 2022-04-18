import React from 'react'
import styled from 'styled-components'

import { ReactComponent as PDFIcon } from '../../assets/pdf.svg'
import { VisuallyHidden } from '../../common/styles/visuallyHidden'

export default function FormControls () {
  return (
    <StyledWrapper>
      <button
        className='button button-clear'
        onClick={() => {}}
      >
        <VisuallyHidden>Clear resume</VisuallyHidden>
        X
      </button>
      <button
        className='button button-download'
        onClick={() => {}}
      >
        <VisuallyHidden>Download resume</VisuallyHidden>
        <PDFIcon aria-hidden='true' />
      </button>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.4rem;
    height: 4.4rem;
    padding: 0;
    cursor: pointer;

    &:nth-child(n+2) {
      margin-left: 1rem;
    }

    &-clear {
    }

    &-download {
    }
  }
`
