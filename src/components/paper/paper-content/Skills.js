import React from 'react'
import { get } from 'lodash'

import { example } from '../../../data/example'

export default function Skills () {
  const skills = get(example, 'skills', [])

  return (
    <>
      <h2>PRO SKILLS</h2>
      <ul>
        {skills.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>
    </>
  )
}
