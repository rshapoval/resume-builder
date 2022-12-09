import React, { Fragment } from 'react'

import InputWithLabel from '../../../common/InputWithLabel'

export default function EducationView () {
  return (
    <>
      {new Array(2).fill().map((item, i) => {
        return (
          <Fragment key={i}>
            <InputWithLabel
              label='Field of study'
              id={`field-of-study-${i + 1}`}
              value=''
              placeholder='Field of study'
              changeHandler={() => {}}
            />
            <InputWithLabel
              label='Study period'
              id={`study-period-${i + 1}`}
              value=''
              placeholder='Study period'
              changeHandler={() => {}}
            />
            <InputWithLabel
              label='School name'
              id={`school-name-${i + 1}`}
              value=''
              placeholder='School name'
              changeHandler={() => {}}
            />
            <InputWithLabel
              label='Description'
              id={`description-${i + 1}`}
              value=''
              placeholder='Description'
              changeHandler={() => {}}
            />
          </Fragment>
        )
      })}
    </>
  )
}
