import React from 'react'
import styled from 'styled-components'

import { HEADER, EXPERIENCE, EDUCATION, SKILLS } from '../../../constants/options-tabs'

import HeaderView from './HeaderView'
import ExperienceView from './ExperienceView'
import EducationView from './EducationView'
import SkillsView from './SkillsView'

const config = {
  [HEADER]: HeaderView,
  [EXPERIENCE]: ExperienceView,
  [EDUCATION]: EducationView,
  [SKILLS]: SkillsView
}

export default function FormContainer ({ option = '' }) {
  const form = React.useMemo(() => {
    const Component = config[option]
    if (!Component) return null
    return <Component />
  }, [option])

  return (
    <StyledWrapper>
      <h2 className='title'>{option}</h2>
      {form}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .title {
    text-transform: capitalize;
  }
`
