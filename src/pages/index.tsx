import { Flex } from '@chakra-ui/react'
import { Sidebar } from '../components/sidebar'

export default function Home() {
  return (
    <Flex height="100%" width="100%" direction="column">
      <Sidebar />
    </Flex>
  )
}
