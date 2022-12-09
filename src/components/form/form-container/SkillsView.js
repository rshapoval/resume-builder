import React, { Fragment } from 'react'

import InputWithLabel from '../../../common/InputWithLabel'

export default function SkillsView () {
  return (
    <>
      {new Array(2).fill().map((item, i) => {
        return (
          <Fragment key={i}>
            <h3>Company {i + 1}</h3>
            <InputWithLabel
              label='Name'
              id={`name-${i + 1}`}
              value=''
              placeholder='Name'
              changeHandler={() => {}}
            />
            <InputWithLabel
              label='Position'
              id={`position-${i + 1}`}
              value=''
              placeholder='Position'
              changeHandler={() => {}}
            />
            <InputWithLabel
              label='Company Name'
              id={`company-name-${i + 1}`}
              value=''
              placeholder='Company Name'
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
      <h3>Skills</h3>
      {new Array(7).fill().map((item, i) => {
        return (
          <InputWithLabel
            key={i}
            label='Skill'
            id={`skill-${i + 1}`}
            value=''
            placeholder='Skill'
            changeHandler={() => {}}
          />
        )
      })}
    </>
  )
}
