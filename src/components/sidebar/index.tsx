import { Box, ListItem, UnorderedList } from '@chakra-ui/react'

export function Sidebar() {
  return (
    <Box bg="neutral.900" width="12.5rem" height="100%">
      <UnorderedList>
        <ListItem color="red">Enabled</ListItem>
        <ListItem color="green">Disabled</ListItem>
        <ListItem color="yellow">Hovered</ListItem>
      </UnorderedList>
    </Box>
  )
}
