import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

const App = () => {
  return(
    <ChatEngine
      height="100vh"
      projectID="9b6ba203-46a6-48d3-b79e-a27c75a5ede4"
      userName="user1"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
    />
  )
}

export default App