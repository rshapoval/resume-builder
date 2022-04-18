import React from 'react'
import styled from 'styled-components'

import { HEADER } from '../constants/options-tabs'

import FormHeader from '../components/form/FormHeader'
import OptionsTabs from '../components/form/options-tabs'

export default function Form () {
  const [option, setOption] = React.useState(HEADER)

  return (
    <StyledWrapper>
      <FormHeader />
      <OptionsTabs
        option={option}
        setOption={setOption}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  @media screen and (min-width: 992px) {
    max-width: 48rem;
  }
`
