import { Button } from "@chakra-ui/react";
import React from "react";

function ButtonLogin({ type, value, radius }) {
  return (
    <>
      {type == "primary" && (
        <Button
          w="100%"
          bg="bgButton.1"
          color="white"
          _hover={{ bg: "bgButtonHover.1" }}
          borderRadius={radius}
        >
          {value}
        </Button>
      )}
      {type == "secondary" && (
        <Button
          w="100%"
          bg="bgButton.2"
          color="white"
          _hover={{ bg: "bgButtonHover.2" }}
          borderRadius={radius}
        >
          {value}
        </Button>
      )}
      {type == "primaryOutline" && (
        <Button
          w="100%"
          bg="white"
          color="black"
          border="1px"
          borderColor="black"
          borderRadius={radius}
        >
          {value}
        </Button>
      )}
    </>
  );
}

export default ButtonLogin;
