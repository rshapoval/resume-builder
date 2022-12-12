import React from 'react'
import { get } from 'lodash'

import { example } from '../../../mock/example'

import InfoSection from '../../../common/InfoSection'

export default function References () {
  const references = get(example, 'references', [])

  return (
    <>
      <h2>REFERENCES</h2>
      {references.map((item, i) => {
        const name = get(item, 'name', '')
        const position = get(item, 'position', '')
        const companyName = get(item, 'companyName', '')
        const description = get(item, 'description', '')

        return (
          <InfoSection
            key={i}
            headerTitle={name}
            period={position}
            title={companyName}
            text={description}
          />
        )
      })}
    </>
  )
}
