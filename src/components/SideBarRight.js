import { Button, Sidebar, SidebarProps } from "@chatscope/chat-ui-kit-react";
import io from "socket.io-client";
import { useEffect, useState, useMemo, useContext } from "react";
import { List, ListItem, Container, Heading } from "@chakra-ui/react";
import { useStore } from "../Context/Store";

export default function SideBarRight({ channelNames }) {
  let { state, dispatch } = useStore();

  const [selected, setSelected] = useState(false);

  const handleChannel = (e) => {
    if (e.target.innerText) {
      setSelected(!selected);
      dispatch({ type: "SET_CHANNEL", payload: e.target.innerText });
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
                _selected={{ bg: "gray.100" }}
            
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
