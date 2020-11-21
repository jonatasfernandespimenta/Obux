import React from 'react'
import { withKnobs } from '../../../storybook/node_modules/@storybook/addon-knobs'

import {
  Table,
  TableCaption,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Button,
  Icon,
  CheckBox,
  Link,
  CardTitle,
} from '../..'

import StoryWrapper from '../../utils/story-wrapper'

export default {
  title: 'DesignSystem/Atoms/Table',
  decorators: [withKnobs],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const Default: React.FC = ({ onClick }) => {
  const handleClick = (event) => {
    event.preventDefault()
    onClick(event)
  }

  const header = ['Name', 'Surname', 'Gender', 'Age']

  const data = [
    ['John', 'Doe', 'Male', '57'],
    ['Joanna', 'K', 'Female', '32'],
    ['Patrick', 'Jogs', 'Male', '35'],
    ['Elisabeth', 'Briggs', 'Female', '28'],
    ['Jda', 'Karo', 'Female', '22'],
  ]

  return (
    <StoryWrapper label="Full Table with Caption">
      <Table>
        <TableCaption>
          <CardTitle as="span">Example table: </CardTitle>
          <Button variant="text" onClick={handleClick}>
            <Icon icon="Delete" />
            Remove
          </Button>
        </TableCaption>
        <TableHead>
          <TableRow>
            <TableCell><CheckBox /></TableCell>
            {header.map((head, i) => (
              <TableCell key={head} onClick={handleClick}>
                <Link href="/">
                  {head}
                  {i === 0 && (
                    <Icon icon="CaretUp" />
                  )}
                </Link>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row[0]}>
              <TableCell><CheckBox /></TableCell>
              {row.map((item) => (
                <TableCell key={item}>{item}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StoryWrapper>
  )
}
