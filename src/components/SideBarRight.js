import { Button, Sidebar, SidebarProps } from "@chatscope/chat-ui-kit-react";
import io from "socket.io-client";
import { useEffect, useState, useMemo, useContext } from "react";
import { List, ListItem, Container, Heading } from "@chakra-ui/react";
import { useStore } from "../Context/Store";

export default function SideBarRight({ channelNames }) {
  console.log("store=>", useStore());

  let channel = useStore().channel;

  console.log("channelNames", channelNames);

  const [selected, setSelected] = useState(false);

  const handleChannel = (e) => {
    if (e.target.innerText === "General") {
      setSelected(!selected);
      channel = "General";
    } else if (e.target.innerText === "Random") {
      setSelected(!selected);
      channel = "Random";
      localStorage.setItem("channel", "Random");
    }
  };

  return (
    <Sidebar position="right" scrollable={true}>
      <Container padding={"2.5"}>
        <Heading justifyContent={"center"} display={"flex"}>
          Channels
        </Heading>
        <List
          spacing={4}
          padding={"2.5"}
          cursor={"pointer"}
          alignContent={"center"}
        >
          {channelNames?.map((channel) => {
            return (
              <ListItem
                onClick={handleChannel}
                key={channel}
                _hover={{ bg: "gray.100" }}
                _selected={{ bg: "gray.200" }}
                _focus={{ bg: "gray.100" }}
                alignItems={"center"}
              >
                {channel}
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Sidebar>
  );
}
