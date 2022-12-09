import React from 'react'

import InputWithLabel from '../../../common/InputWithLabel'

export default function HeaderView () {
  return (
    <>
      <InputWithLabel
        label='Full name'
        id='full-name'
        value=''
        placeholder='Full name'
        changeHandler={() => {}}
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
