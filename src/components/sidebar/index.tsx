import { Box, createIcon, ListItem, UnorderedList } from '@chakra-ui/react'
import diamond from '../../assets/diamond.svg'
import juditeIcon from '../../assets/logo_judite.svg'
import styles from './sidebar.module.scss'

export const diamondAsset = createIcon(diamond)

export function Sidebar() {
  function handleClick() {
    console.log('Teste')
  }
  return (
    <Box bg="neutral.900" width="12.5rem" height="100%" minHeight="43.5rem">
      <div className={styles.juditeIcon}>
        <img src={juditeIcon.src} />
      </div>
      <UnorderedList>
        <ListItem
          color="gray.200"
          listStyleType="none"
          key="whatever-key"
          onClick={handleClick}
        >
          {/* <ListIcon as={diamondAsset} /> */}
          <div className={styles.items}>
            <img src={diamond.src} alt="Diamond" height="22" width="22" />
            <h6 className={styles.itemsText}>Enabled</h6>
          </div>
        </ListItem>
        <ListItem
          color="gray.200"
          listStyleType="none"
          key="whatever-key"
          onClick={handleClick}
        >
          {/* <ListIcon as={diamondAsset} /> */}
          <div className={styles.items}>
            <img src={diamond.src} alt="Diamond" height="22" width="22" />
            <h6 className={styles.itemsText}>Disabled</h6>
          </div>
        </ListItem>
        <ListItem
          color="gray.200"
          listStyleType="none"
          key="whatever-key"
          onClick={handleClick}
        >
          {/* <ListIcon as={diamondAsset} /> */}
          <div className={styles.items}>
            <img src={diamond.src} alt="Diamond" height="22" width="22" />
            <h6 className={styles.itemsText}>Hovered</h6>
          </div>
        </ListItem>
      </UnorderedList>
    </Box>
  )
}
