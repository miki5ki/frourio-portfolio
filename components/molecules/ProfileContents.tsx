import { Box, Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'

export const ProfileContents = () => {
  return (
    <Box w="200px" bg="gray.200">
      <Icon as={MdSettings} />
    </Box>
  )
}
