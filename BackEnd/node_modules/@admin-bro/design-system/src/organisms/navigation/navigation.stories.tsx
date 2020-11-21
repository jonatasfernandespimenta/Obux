import React, { useState } from 'react'
import { Navigation, Box, Label } from '../..'
import { withKnobs, text } from '../../../storybook/node_modules/@storybook/addon-knobs'

import { NavigationProps } from './navigation'

export default {
  title: 'DesignSystem/Organisms/Navigation',
  decorators: [withKnobs],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const Default: React.FC = ({ onClick }) => {
  const label = text('label', 'Navigation')

  const [postgresOpen, setPostgresOpen] = useState(false)
  const [mongooseOpen, setMongooseOpen] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    onClick(event)
  }

  const props: NavigationProps = {
    label: 'Navigation',
    elements: [{
      label: 'Dashboard',
      icon: 'Dashboard',
      isSelected: true,
      href: '/',
      onClick: handleClick,
      id: 'dashboard',
    }, {
      label: 'Postgres with long name and spaces',
      icon: 'Sql',
      onClick: (event) => {
        event.preventDefault()
        setPostgresOpen(!postgresOpen)
      },
      isOpen: postgresOpen,
      elements: [{
        label: 'Users',
        href: '/resources/Users/list',
        onClick: handleClick,
        id: 'users',
      }, {
        label: 'Posts',
        href: '/resources/Posts/list',
        onClick: handleClick,
        id: 'posts',
      }, {
        label: 'Messages',
        href: '/resources/Messages/list',
        onClick: handleClick,
        id: 'messages',
      }, {
        label: 'Calendar',
        href: '/resources/Calendar/list',
        onClick: handleClick,
        id: 'calendar',
      }],
    }, {
      label: 'MongooseWithLongNameAndWithoutSpaces',
      icon: 'Datastore',
      isOpen: mongooseOpen,
      onClick: (event) => {
        event.preventDefault()
        setMongooseOpen(!mongooseOpen)
      },
      elements: [{
        label: 'Car',
        href: '/resources/Cars/list',
        onClick: handleClick,
        id: 'car',
      }, {
        label: 'Dealers',
        href: '/resources/Dealers/list',
        onClick: handleClick,
        id: 'dealers',
      }, {
        label: 'Owners',
        href: '/resources/Owners/list',
        onClick: handleClick,
        id: 'owners',
      }, {
        label: 'Orders',
        href: '/resources/Orders/list',
        onClick: handleClick,
        id: 'orders',
      }],
    }],
  }

  return (
    <Box variant="grey">
      <Label>Navigation example</Label>
      <Box width="sidebarWidth" border="bg" bg="white">
        <Navigation {...props} label={label} />
      </Box>
    </Box>
  )
}
