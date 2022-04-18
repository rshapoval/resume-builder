import React from 'react'
import styled from 'styled-components'

import { HEADER } from '../constants/options-tabs'

import FormHeader from '../components/form/FormHeader'
import FormControls from '../components/form/FormControls'
import OptionsTabs from '../components/form/options-tabs'
import FormContainer from '../components/form/form-container'

export default function Form () {
  const [option, setOption] = React.useState(HEADER)

  return (
    <StyledWrapper>
      <FormHeader />
      <FormControls />
      <OptionsTabs
        option={option}
        setOption={setOption}
      />
      <FormContainer option={option} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  @media screen and (min-width: 992px) {
    max-width: 48rem;
  }
`
