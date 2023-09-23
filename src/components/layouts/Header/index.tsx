import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { useLogout } from "../../../hooks/useUser";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const { onLogout } = useLogout();
  return (
    <Box as={"header"} bg={"blackAlpha.200"} px={4} py={2}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box flex={1} maxW={320}>
          <InputGroup bg="blackAlpha.100">
            <Input _focusVisible={{ border: "none" }} />
            <InputRightElement>
              <AiOutlineSearch />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Flex alignItems={"center"} columnGap={"500px"}>
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <IconButton
                aria-label="notifications"
                isRound
                icon={<Icon fontSize={22} as={IoMdNotificationsOutline} />}
              />
            </PopoverTrigger>
            <PopoverContent w={"350px"} right={0}>
              <PopoverHeader>
                <Flex justifyContent={"space-between"} w={"100%"}>
                  <Heading size="sm">Notifications</Heading>
                  <Text>Mark all as seen</Text>
                </Flex>
              </PopoverHeader>
              <PopoverBody>
                <Flex justifyContent={"space-between"}>
                  <Flex columnGap={4}>
                    <Avatar size={"md"} />
                    <Box>
                      <Heading size="md">New Notification</Heading>
                      <Text>Someone Liked Your Photo</Text>
                    </Box>
                  </Flex>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Flex columnGap={4}>
                    <Avatar size={"md"} />
                    <Box>
                      <Heading size="md">New Notification</Heading>
                      <Text>Someone Liked Your Photo</Text>
                    </Box>
                  </Flex>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Flex columnGap={4}>
                    <Avatar size={"md"} />
                    <Box>
                      <Heading size="md">New Notification</Heading>
                      <Text>Someone Liked Your Photo</Text>
                    </Box>
                  </Flex>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <IconButton
                aria-label="notifications"
                isRound
                icon={<Icon fontSize={22} as={IoMdNotificationsOutline} />}
              />
            </PopoverTrigger>
            <PopoverContent w={"350px"} right={0}>
              <PopoverHeader>
                <Flex justifyContent={"space-between"} w={"100%"}>
                  <Heading size="sm">Notifications</Heading>
                  <Text>Mark all as seen</Text>
                </Flex>
              </PopoverHeader>
              <PopoverBody>
                <Flex justifyContent={"space-between"}>
                  <Flex columnGap={4}>
                    <Avatar size={"md"} />
                    <Box>
                      <Heading size="md">New Notification</Heading>
                      <Text>Someone Liked Your Photo</Text>
                    </Box>
                  </Flex>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Flex columnGap={4}>
                    <Avatar size={"md"} />
                    <Box>
                      <Heading size="md">New Notification</Heading>
                      <Text>Someone Liked Your Photo</Text>
                    </Box>
                  </Flex>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Flex columnGap={4}>
                    <Avatar size={"md"} />
                    <Box>
                      <Heading size="md">New Notification</Heading>
                      <Text>Someone Liked Your Photo</Text>
                    </Box>
                  </Flex>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
