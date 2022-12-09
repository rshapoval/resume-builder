import React from 'react'
import styled from 'styled-components'

import { optionsTabsConfig } from '../../../constants/options-tabs'

import Tab from './Tab'

export default function OptionsTabs ({ option, setOption }) {
  return (
    <StyledWrapper>
      {optionsTabsConfig.map(tab => {
        return (
          <Tab
            key={tab.id}
            tab={tab}
            option={option}
            setOption={setOption}
          />
        )
      })}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
