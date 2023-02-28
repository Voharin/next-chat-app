import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState, useEffect } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  VoiceCallButton,
  InfoButton,
} from "@chatscope/chat-ui-kit-react";
import { Box, Container } from "@chakra-ui/react";
import SideBar from "../src/components/Sidebar";
import SideBarRight from "../src/components/SideBarRight";
import io from "socket.io-client";
import { useStore } from "../src/Context/Store";

const Chat = () => {
  const { state, dispatch } = useStore();
  const [username, setUsername] = useState("");
  const [channelData, setChannelData] = useState([]);
  const [messages, setMessages] = useState([]);
  const usersInChannel = channelData.usersInChannel?.map((user) => {
    return user.user_name;
  });

  useEffect(() => {
    // let socket;
    // socket = io();
    // socket.on("connect", () => {
    //   console.log("connected");
    // });


    fetch("/api/channel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channel: state.channel,
      }),
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setChannelData(data);
        });
      }
    });
  }, [state.channel]);

  return (
    <Container minW={"full"} minH={"full"}>
      <Box as="div" h={"6xl"} padding={"1.5"} margin={"-0.5"}>
        <MainContainer>
          <SideBar users={usersInChannel} />
          <ChatContainer>
            <ConversationHeader>
              <ConversationHeader.Content userName="John Doe" info="Online" />
              <ConversationHeader.Actions>
                <VoiceCallButton />
                <InfoButton />
              </ConversationHeader.Actions>
            </ConversationHeader>
            <MessageList>
              <Message
                model={{
                  message: "Hello my friend",
                  sentTime: "just now",
                  sender: "Joe",
                }}
                avatarSpacer
              />
            </MessageList>
            <MessageInput
              style={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "0.375rem",
                padding: "0.5rem 1rem",
                color: "teal.500",
                fontSize: "1rem",
                fontWeight: "400",
                lineHeight: "1.5",
              }}
              placeholder="Type message here"
              onSend={(message) => {
                dispatch({ type: "SEND_MESSAGE", payload: message });
              }}
            />
          </ChatContainer>
          <SideBarRight channelNames={channelData.channelNames} />
        </MainContainer>
      </Box>
    </Container>
  );
};

export default Chat;
