import React from 'react'
import { get } from 'lodash'
import { useSelector, useDispatch } from 'react-redux'

import { selectHeader } from '../../../features/headerSlice'
import { setFullName } from '../../../features/headerSlice'

import InputWithLabel from '../../../common/InputWithLabel'

export default function HeaderView () {
  const header = useSelector(selectHeader)
  const dispatch = useDispatch()

  const fullName = get(header, 'fullName', '')

  const handleChange = (e) => {
    dispatch(setFullName(e.target.value))
  }

  return (
    <>
      <InputWithLabel
        label='Full name'
        id='full-name'
        value={fullName}
        placeholder='Full name'
        changeHandler={handleChange}
      />
      <InputWithLabel
        label='Wanted job title'
        id='job-title'
        value=''
        placeholder='Wanted job title'
        changeHandler={() => {}}
      />
      <InputWithLabel
        label='Phone'
        id='phone'
        type='tel'
        value=''
        placeholder='Phone'
        changeHandler={() => {}}
      />
      <InputWithLabel
        label='E-Mail'
        id='e-mail'
        type='email'
        value=''
        placeholder='E-Mail'
        changeHandler={() => {}}
      />
      <InputWithLabel
        label='Website'
        id='website'
        value=''
        placeholder='Website'
        changeHandler={() => {}}
      />
      <InputWithLabel
        label='Address'
        id='address'
        value=''
        placeholder='Address'
        changeHandler={() => {}}
      />
    </>
  )
}
