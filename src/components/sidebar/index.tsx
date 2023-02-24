import { Box, createIcon, ListItem, UnorderedList } from '@chakra-ui/react'
import diamond from '../../assets/diamond.svg'
import juditeIcon from '../../assets/logo_judite.svg'
import styles from './sidebar.module.scss'

export const diamondAsset = createIcon(diamond)

export function Sidebar() {
  return (
    <Box bg="neutral.900" width="12.5rem" height="100%">
      <img src={juditeIcon.src} />
      <UnorderedList>
        <ListItem color="gray.200">
          {/* <ListIcon as={diamondAsset} /> */}
          <div className={styles.items}>
            <img src={diamond.src} />
            <h6 className={styles.itemsText}>Enabled</h6>
          </div>
        </ListItem>
        <ListItem color="gray.200">Disabled</ListItem>
        <ListItem color="gray.200">Hovered</ListItem>
      </UnorderedList>
    </Box>
  )
}
