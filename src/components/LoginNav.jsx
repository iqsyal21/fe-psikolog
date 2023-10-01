import {
  useColorMode,
  Flex,
  Box,
  Text,
  HStack,
  Heading,
  Center,
  Image,
  Show,
  Hide,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import Logo from "../assets/images/logo.svg";
import ButtonLogin from "./ButtonLogin";

function LoginNav({ formCard, setFormCard }) {
  const { colorMode, setColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        w={{
          base: "100%",
          lg: "70%",
        }}
        justify="space-between"
        bg="rgba(255, 255, 255, 0.7)"
        p={2}
        mt={2}
        borderRadius="xl"
      >
        <Box>
          <HStack>
            <Image src={Logo} h="100%" alt="Radiate Logo" />
            <Heading as="h1" size="md" fontFamily="inter" color="black">
              Radiate+
            </Heading>
          </HStack>
        </Box>
        <Show above="lg">
          <Center>
            <Text mr={15}>
              {colorMode == "light" ? (
                <MoonIcon
                  fontSize="2xl"
                  onClick={() => setColorMode("dark")}
                  color="black"
                />
              ) : (
                <SunIcon
                  fontSize="2xl"
                  onClick={() => setColorMode("light")}
                  color="black"
                />
              )}
            </Text>
            <Box w="10rem" mr={2}>
              <span onClick={() => setFormCard("login")}>
                <ButtonLogin type="primary" value="Login" radius="full" />
              </span>
            </Box>
            <Box w="10rem">
              <span onClick={() => setFormCard("register")}>
                <ButtonLogin
                  type="primaryOutline"
                  value="Register"
                  radius="full"
                />
              </span>
            </Box>
          </Center>
        </Show>
        <Hide above="lg">
          <Center bg="bgPrimary.1" w="50px" borderRadius="50%">
            <HamburgerIcon color="black" fontSize="2xl" onClick={onOpen} />
          </Center>
        </Hide>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              {colorMode == "light" ? (
                <MoonIcon fontSize="2xl" onClick={() => setColorMode("dark")} />
              ) : (
                <SunIcon fontSize="2xl" onClick={() => setColorMode("light")} />
              )}
            </DrawerHeader>
            <DrawerBody>
              <Box my={5}>
                <span onClick={() => setFormCard("login")}>
                  <ButtonLogin type="primary" value="Login" radius="full" />
                </span>
              </Box>
              <Box>
                <span onClick={() => setFormCard("register")}>
                  <ButtonLogin
                    type="primaryOutline"
                    value="Register"
                    radius="full"
                  />
                </span>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}

export default LoginNav;
