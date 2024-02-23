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
  Stat,
  Tag,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import GoogleButton from "./GoogleButton";
// import {useSession} from 'next-auth/react'

const LoginFace = (props) => {
  // const {session} = useSession();
  // console.log("session", session);
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
          alt="Chat login"
          borderRadius="lg"
        />
        <Stack
          as={"div"}
          direction={"column"}
          mt="6"
          spacing="2"
          justifyContent={"center"}
          display={"flex"}>
          <Heading size="md">Pick it Up! A Username</Heading>
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

      <CardFooter alignItems={"center"} gap={2}  flexDirection={"column"}>
        <ButtonGroup gap={2} flexDirection={"column"} alignItems={"center"}>
          <Button variant="solid" color="messenger" onClick={handleClick}>
            Start Chat
          </Button>
          <GoogleButton />
  
          {/* <Button variant="outline" color="blue.200" onClick={
            () => {
              router.push('/api/auth/signin')
            }
          } >
            with Google
          </Button> */}
        </ButtonGroup>

      
        <Divider mt="4" />
 
        <Text> By clicking the button, you are agreeing to our{" "} </Text> 
          <Tag>
          <TagLabel color="blue.500">
            Terms and Services</TagLabel></Tag>
            <Stat color="blue.500"> 
            <StatLabel>Privacy Policy</StatLabel>
          </Stat>
  
            
      </CardFooter>
    </Card>
  );
};

export async function getServerSideProps(context) {
 const session = await getSession(context)
 if (session) {
   return {
     redirect: {
       destination: '/chat',
       permanent: false,
     },
   }
 }
 return {
   props: { session },
 }
}


export default LoginFace;
