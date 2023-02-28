import {
  Sidebar,
  Conversation,
  Avatar,
  ConversationList,
} from "@chatscope/chat-ui-kit-react";

export default function SideBar({ users }) {
  console.log("usersInChannel", users);
  return (
    <Sidebar position="left" scrollable={true}>
      <ConversationList>
        {users?.map((user) => {
          return (
            <Conversation name={user} info="Online">
              <Avatar name={user} status="online" />
            </Conversation>
          );
        })}
      </ConversationList>
    </Sidebar>
  );
}
