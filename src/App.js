import { ChatEngine } from 'react-chat-engine';

import ChatFeed from  './components/ChatFeed'

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height= "100vh"
            projectID = "59a734c8-b81f-4824-9819-a3ab8d4eb7da"
            userName = "edyfy"
            userSecret = "12345"
            renderChatFeed = {( chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;