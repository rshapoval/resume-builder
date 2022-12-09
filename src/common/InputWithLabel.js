import React from 'react'
import styled from 'styled-components'

export default React.memo(function InputWithLabel ({
  className = '', label, id, type = 'text', value, placeholder = '', changeHandler = () => {}
}) {
  return (
    <StyledWrapper className={className}>
      <label
        className='label'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className='field'
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .label {
    display: block;
    margin-bottom: 1rem;
  }

  .field {
    width: 100%;
  }
`
