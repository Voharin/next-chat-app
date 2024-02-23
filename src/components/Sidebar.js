import {
  Sidebar,
  Conversation,
  Avatar,
  ConversationList,
} from "@chatscope/chat-ui-kit-react";
import { useStore } from "../Context/Store";

export default function SideBar({ users }) {
  let { state, dispatch } = useStore();
  console.log("state", state);
  const handleClick = (e) => {
    console.log("e", e.target.innerText);
  };
  return (
    <Sidebar position="left" scrollable={true}>
      <ConversationList>
        {users?.map((user, index) => {
          return (
            <Conversation
              key={index}
              name={user}
              info="Online"
              onClick={handleClick}
            >
              <Avatar name={user} status="online" />
            </Conversation>
          );
        })}
      </ConversationList>
    </Sidebar>
  );
}

export function getInitialProps({ query }) {
  return { query };
}
