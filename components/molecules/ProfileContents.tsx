import { Box, Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'

export const ProfileContents = () => {
  return (
    <Box minW="100vw" bg="gray.200" h="100px">
      <Icon as={MdSettings} />
    </Box>
  )
}
