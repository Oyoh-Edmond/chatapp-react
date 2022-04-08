import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleSubmit = (event) =>{
        event.preventDefault(); //no browser refresh once form is submitted 
   
        const text = value.trim();

        // sendMessage is from react-chat-engine
        if(text.length > 0) sendMessage( creds, chatId, { text } );
        
        // reset the text field
        setValue('');
    }

    const handleChange = (event) =>{
        setValue(event.target.value);

        isTyping(props, chatId);
    }

    return ( 
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
                className="message-input" 
                placeholder="Send a message..." 
                value={value}
                onChange={handleChange}    
                onSubmit = {handleSubmit}   
            />
        </form>
    )
}

export default MessageForm;