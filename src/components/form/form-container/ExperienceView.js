import React, { Fragment } from 'react'

import InputWithLabel from '../../../common/InputWithLabel'

export default function ExperienceView () {
  return (
    <>
      {new Array(3).fill().map((item, i) => {
        return (
          <Fragment key={i}>
            <h3>Company {i + 1}</h3>
            <InputWithLabel
              label='Job title'
              id={`job-title-${i + 1}`}
              value=''
              placeholder='Job title'
              changeHandler={() => {}}
            />
            <InputWithLabel
              label='Start & end date'
              id={`start-end-date-${i + 1}`}
              value=''
              placeholder='Start & end date'
              changeHandler={() => {}}
            />
            <InputWithLabel
              label='Eployer'
              id={`eployer-${i + 1}`}
              value=''
              placeholder='Eployer'
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
