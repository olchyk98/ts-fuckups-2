import React, { JSX } from 'react'

export const HStack = (props: HStackProps): JSX.Element => {
  const { children, direction } = props

  return (
    <div
      style={{ flexDirection: direction === 'vertical' ? 'row' : 'column' }}>
      { children }
    </div>
  )
}

interface HStackProps {
  direction: 'vertical' | 'horizontal'
  children: JSX.Element | JSX.Element[]
}
