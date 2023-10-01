import { useState } from "react";
import {
  Box,
  Flex,
  Card,
  CardHeader,
  CardBody,
  Center,
  Heading,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  CardFooter,
  useColorMode,
} from "@chakra-ui/react";
import LoginNav from "../components/LoginNav";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import ButtonLogin from "../components/ButtonLogin";

const Login = ({ formCard, setFormCard }) => {
  const { colorMode, setColorMode } = useColorMode();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    <>
      <Box minH={"100vh"} color="white">
        <Box
          className="bgLogin"
          p={2}
          m={{
            base: 0,
            lg: 2,
          }}
          borderRadius={{
            base: 0,
            lg: "xl",
          }}
        >
          <Flex justify="center">
            <LoginNav formCard={formCard} setFormCard={setFormCard} />
          </Flex>
        </Box>
        <Center mt="-60">
          <Card
            maxW="lg"
            w="100%"
            p={8}
            mx={4}
            className={
              formCard === "register" ? "flip-card-login" : "flip-card-register"
            }
          >
            <CardHeader textAlign="center">
              <Heading as="h3" size="md" fontFamily="inter" fontWeight="bold">
                {formCard == "login"
                  ? "Login To Radiate"
                  : "Register To Radiate"}
              </Heading>
            </CardHeader>
            <CardBody>
              <form>
                {formCard == "register" && (
                  <>
                    <FormLabel>Fullname</FormLabel>
                    <Input
                      type="text"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      placeholder="Enter fullname"
                      mb={5}
                    />
                  </>
                )}
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  mb={5}
                />
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    mb={8}
                  />
                  <InputRightElement>
                    {show ? (
                      <ViewOffIcon onClick={() => setShow(!show)} />
                    ) : (
                      <ViewIcon onClick={() => setShow(!show)} />
                    )}
                  </InputRightElement>
                </InputGroup>
                <Flex direction="column" gap={5}>
                  <ButtonLogin
                    type="primary"
                    value={
                      formCard == "register" ? "Create new account" : "Login"
                    }
                  />
                  {formCard == "login" && (
                    <ButtonLogin
                      type="primaryOutline"
                      value="Forgot password ?"
                    />
                  )}
                  <Text textAlign="center" fontSize="xl" color="gray" my="-2">
                    or
                  </Text>
                  <ButtonLogin
                    type="secondary"
                    value={
                      formCard == "register"
                        ? "Sign up with google"
                        : "Sign in with google"
                    }
                  />
                </Flex>
              </form>
            </CardBody>
            <CardFooter justify="center">
              {formCard == "login" ? (
                <>
                  <Text color="gray">Don't have account ?</Text>
                  <Text
                    color={colorMode === "light" ? "blue.700" : "blue.200"}
                    fontWeight="bold"
                    ml={1}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => setFormCard("register")}
                  >
                    Register
                  </Text>
                </>
              ) : (
                <>
                  <Text color="gray">Have an account already ?</Text>
                  <Text
                    color={colorMode === "light" ? "blue.700" : "blue.200"}
                    fontWeight="bold"
                    ml={1}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => setFormCard("login")}
                  >
                    Login
                  </Text>
                </>
              )}
            </CardFooter>
          </Card>
        </Center>
      </Box>
    </>
  );
};

export default Login;
