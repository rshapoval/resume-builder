import React from 'react'
import { get } from 'lodash'

import { example } from '../../../mock/example'

import InfoSection from '../../../common/InfoSection'

export default function Education () {
  const education = get(example, 'education', [])

  return (
    <>
      <h2>EDUCATION</h2>
      {education.map((item, i) => {
        const fieldOfStudy = get(item, 'fieldOfStudy', '')
        const studyPeriod = get(item, 'studyPeriod', '')
        const schoolName = get(item, 'schoolName', '')
        const description = get(item, 'description', '')

        return (
          <InfoSection
            key={i}
            headerTitle={fieldOfStudy}
            period={studyPeriod}
            title={schoolName}
            text={description}
          />
        )
      })}
    </>
  )
}
