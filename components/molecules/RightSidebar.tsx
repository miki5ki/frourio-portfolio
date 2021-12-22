import React from 'react'
import {
  Box,
  Flex,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  VStack
} from '@chakra-ui/react'
import { MdFaceUnlock } from 'react-icons/md'
import { SiReact } from 'react-icons/si'
import { DEMOUSERS } from '~/const/DEMOUSERS'
import { DEMOTAGS } from '~/const/DEMOTAGS'

export const RightSidebar = () => {
  return (
    <Box w="300px">
      <Box bg="white" w="250px" h="auto" mx={6} mb={6}>
        <Text px={3} py={2} fontWeight="bold">
          ユーザーランキング
        </Text>
        <Table>
          <Tbody>
            {DEMOUSERS.map((DEMOUSER, index) => (
              <>
                <Tr key={DEMOUSER.id}>
                  <Td>
                    <Stack direction="row" alignItems="center" spacing={5}>
                      <Text>{index + 1}</Text>
                      <Icon as={MdFaceUnlock} />
                      <Text w="40px">{DEMOUSER.userName}</Text>
                      <Flex direction="column" alignItems="center" pl={1}>
                        <Text fontSize="sm" fontWeight="bold">
                          {DEMOUSER.contributions}
                        </Text>
                        <Text fontSize="xs">Contributions</Text>
                      </Flex>
                    </Stack>
                  </Td>
                </Tr>
              </>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box bg="white" w="250px" h="250px" mx={6}>
        <Text px={3} py={2} fontWeight="bold">
          タグランキング
        </Text>
        <Table>
          <Tbody>
            {DEMOTAGS.map((DEMOTAGS, index) => (
              <>
                <Tr key={DEMOTAGS.id}>
                  <Td>
                    <Stack direction="row" alignItems="center" spacing={5}>
                      <Text>{index + 1}</Text>
                      <Icon as={SiReact} />
                      <Text w="60px">{DEMOTAGS.userName}</Text>
                      <Flex direction="column" alignItems="center" pl={1}>
                        <Text fontSize="sm" fontWeight="bold">
                          {DEMOTAGS.posts}
                        </Text>
                        <Text fontSize="xs">posts</Text>
                      </Flex>
                    </Stack>
                  </Td>
                </Tr>
              </>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}
