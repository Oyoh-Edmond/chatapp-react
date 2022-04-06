
const MyMessage = ( { message }) => {
    //check whether is an image or a text
        //this would be rendered if it's an image
    if(message?.attachments?.length > 0){
        return (
            <img 
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float:'right' }}
            />
        );
    }

    //if it's not an image
    return(
        <div className="message" style={{float:'right', marginRight:'18px', color: 'white', backgroundColor: '#3b2a50' }}>
            {message.text}
        </div>
    );
}

export default MyMessage;