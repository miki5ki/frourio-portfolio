import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Tag,
  Text
} from '@chakra-ui/react'
import { GoCalendar } from 'react-icons/go'
import { AiOutlineGlobal } from 'react-icons/ai'
import { MdOutlineWorkOutline } from 'react-icons/md'
export const ProfileContents = () => {
  return (
    <Box w="auto" bg="gray.200" h="auto" px={3}>
      <Flex direction="row">
        <Image
          borderRadius="full"
          boxSize="130px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          my={4}
          mx={4}
        />
        <Stack px={5} py={3} my={1}>
          <Heading size="lg">frourio</Heading>
          <Flex alignItems="center">
            <Icon as={MdOutlineWorkOutline} m={1} />
            <Text>フロントエンジニア</Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={AiOutlineGlobal} m={1} />
            <Text>埼玉県</Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={GoCalendar} m={1} />
            <Text>12月22日から技術掲示板を使用しています</Text>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  )
}
