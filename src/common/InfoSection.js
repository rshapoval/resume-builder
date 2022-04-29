import React from 'react'
import styled from 'styled-components'

export default function InfoSection ({
  className = '', headerTitle = '', period = '', title = '', text = ''
}) {
  return (
    <StyledWrapper className={className}>
      <div className='left-col'>
        <h3>{headerTitle}</h3>
        <p>{period}</p>
      </div>
      <div className='right-col'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .left-col {

  }

  .right-col {

  }
`
