import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

import { example } from '../../../mock/example'

export default function PaperHeader () {
  const fullName = get(example, 'header.fullName', '')
  const jobTitle = get(example, 'header.jobTitle', '')
  const phone = get(example, 'header.phone', '')
  const email = get(example, 'header.email', '')
  const website = get(example, 'header.website', '')
  const address = get(example, 'header.address', '')

  return (
    <StyledWrapper>
      <p>{fullName}</p>
      <p>{jobTitle}</p>
      <ul className='list'>
        <li><a href={`tel:${phone}`}>{phone}</a></li>
        <li><a href={`mailto:${email}`}>{email}</a></li>
        <li><a href={website}>{website}</a></li>
        <li>{address}</li>
      </ul>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .list {
    li:not(:first-child) {
      margin-top: 1rem;
    }
  }
`
