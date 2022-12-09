import React from 'react'
import { get } from 'lodash'

import { example } from '../../../data/example'

import InfoSection from '../../../common/InfoSection'

export default function Experiences () {
  const experience = get(example, 'experience', [])

  return (
    <>
      <h2>JOB EXPERIENCES</h2>
      {experience.map((item, i) => {
        const jobTitle = get(item, 'jobTitle', '')
        const startEndDate = get(item, 'startEndDate', '')
        const employer = get(item, 'employer', '')
        const description = get(item, 'description', '')

        return (
          <InfoSection
            key={i}
            headerTitle={jobTitle}
            period={startEndDate}
            title={employer}
            text={description}
          />
        )
      })}
    </>
  )
}
