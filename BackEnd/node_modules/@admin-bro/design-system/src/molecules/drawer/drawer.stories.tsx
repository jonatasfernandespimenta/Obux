import React from 'react'
import { withKnobs, boolean } from '../../../storybook/node_modules/@storybook/addon-knobs'
import { Drawer, DrawerContent, DrawerFooter, Header, Button, Icon, Box, Text } from '../..'
import { FullFeaturedFormGroup } from '../form-group/form-group.stories'

export default { title: 'DesignSystem/Molecules/Drawer', decorators: [withKnobs] }

export const Default: React.FC = () => {
  const isHidden = boolean('Indicates if drawer should be hidden', false)
  return (
    <Drawer isHidden={isHidden} bg="grey20">
      <DrawerContent>
        <Header.H3>
          <Button size="icon" rounded mr="lg">
            <Icon icon="ChevronRight" />
          </Button>
          Edit
        </Header.H3>
        <Box my="x3" p={0}>
          <Button>
            <Icon icon="Information" />
            Info
          </Button>
          <Button ml="lg">
            <Icon icon="Delete" />
            Delete
          </Button>
        </Box>
        <Header.H4>Primary Fields</Header.H4>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue,
          suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque
          aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus.
          Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed
        </Text>
        <FullFeaturedFormGroup />
      </DrawerContent>
      <DrawerFooter>
        <Button variant="primary">
          Save
        </Button>
      </DrawerFooter>
    </Drawer>
  )
}
