import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  Image,
  Text,
  Input,
  InputGroup,
  TagLabel,
  StatLabel,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const LoginFace = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleClick = async (e) => {
    await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
      }),
    }).then((res) => {
      if (res.status === 200) {
        router.push("/chat");
      } else {
        alert("Invalid username");
      }
    });
  };

  return (
    <Card
    opacity={'0.96'}
      maxW="container.lg"
      borderWidth="2px"
      borderRadius="2xl"
      borderColor="gray.200"
    >
      <CardBody
        __css={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
    
        }}
      >
        <Image
          w={"xl"}
          src="https://img.freepik.com/free-vector/laptop-with-social-media-icons_24877-56557.jpg?w=1380&t=st=1677159878~exp=1677160478~hmac=787d64b7dcd79a5f7a3b409e5a36bda93d106459dc9fedb26ed4a9fcc0effcc4"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack
          as={"div"}
          direction={"column"}
          mt="6"
          spacing="2"
          justifyContent={"center"}
          display={"flex"}
        >
          <Heading size="md">Pick it Up! a Username</Heading>
          <Input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            width={{ base: "100%", md: "100%", lg: "100%" }}
            placeholder="Username"
          />
        </Stack>
      </CardBody>

      <CardFooter justify={"center"}>
        <ButtonGroup spacing="2">
          <Button variant="solid" color="messenger" onClick={handleClick}>
            Start Chat
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default LoginFace;
