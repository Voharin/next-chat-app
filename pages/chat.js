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

const Chat = () => {
  const [username, setUsername] = useState("");
  const [channel, setChannel] = useState("Channel");
  const [channelData, setChannelData] = useState([]);
const usersInChannel = channelData.usersInChannel?.map((user) => {
    return user.user_name;
  });

console.log("channelData", usersInChannel);


  useEffect(() => {
    const channelLog = localStorage.getItem("channel");
    setChannel(channelLog);
    console.log("channel=>", channel);

    fetch("/api/channel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channel: channel,
      }),
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setChannelData(data);
        });
      }
    });
  

  }, [channel]);

  return (
    <Container minW={"8xl"}>
      <Box as="div" h={"3xl"} padding={"2.5"}>
        <MainContainer>
          <SideBar users= {usersInChannel}  />

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
              placeholder="Type message here"
              onSend={(message) => {
                setMessages([
                  ...messages,
                  { sender: "Me", message: message, sentTime: Date.now() },
                ]);
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
