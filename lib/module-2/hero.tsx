import React, { ComponentProps, JSX } from 'react'
import { HStack } from './h-stack'

export const Hero = (props: HeroProps): JSX.Element => {
  const { label } = props

  return (
    <HStack { ...props }>
      <h1>{ label }</h1>
    </HStack>
  )
}

// NOTE: Do you like the ComponentProps magic? :)
interface HeroProps extends ComponentProps<typeof HStack> {
  label: string
}
