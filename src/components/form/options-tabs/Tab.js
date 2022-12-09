import React from 'react'
import styled, { css } from 'styled-components'

export default React.memo(function Tab ({
  tab: { id, label }, option, setOption
}) {
  const isActive = id === option
  const selectHandler = React.useCallback(() => setOption(id), [setOption, id])

  return (
    <StyledButton
      isActive={isActive.toString()}
      onClick={selectHandler}
    >
      {label}
    </StyledButton>
  )
})

const StyledButton = styled.button`
  cursor: pointer;
  border: 0.1rem solid #b3b3b3;
  border-radius: 0.2rem;

  ${({ isActive }) => isActive === 'true' && css`
    background: #dbdbdb;
  `}

  &:hover {
    background: #dbdbdb;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`
