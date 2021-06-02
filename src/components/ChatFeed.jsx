import MessageForm from './MessageForm';

import MyMessage from './MyMessage';

import OtherMessage from './OtherMessage';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props; //DeStructure the props

  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages); //get messages keys

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1]; //find last message
      const isMyMessage = userName === message.sender.username;
      // classify messages into user messages and others messages

      return(
        <div key={`msg_${index}`}>
            <div className="message">
              {
                isMyMessage ?
                <MyMessage message={message} />
                : <OtherMessage message={message} lastMessage={messages[lastMessageKey]} />
              }

            </div>
            <div className="read-reciepts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                read-reciepts        
            </div>
        </div>
      )
      
    })
  }

  
  if(!chat) return 'Loading...'

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">
          {chat.title}
        </div>
        <div className="chat-subtitle">
          {chat.people.map( (person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{height: '100px'}}></div>
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}

export default ChatFeed;