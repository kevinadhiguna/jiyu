// Learn how to extract props from a component (in this case, from the Greet component)

import React from 'react'
import { Greet } from '../Greet'

export const CustomComponent = ({ isLoggedIn, name, unreadMessages }: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      <p>{name}</p>
      <p>{isLoggedIn}</p>
      <p>{unreadMessages}</p>
    </div>
  )
}

