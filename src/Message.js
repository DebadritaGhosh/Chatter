import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';
const Message = forwardRef( ({ username, message }) => {
    
    const isUser = username === message.username;
    return (
        <div className="message" className={`message ${isUser && 'message-user'}`}>
            <Card className={isUser ? "message-userCard" : "message-othersCard"}>
                <CardContent>
                    <Typography
                        color= 'initial'
                        variant="h5"
                        component="h2">
                        {!isUser && `${message.username || 'Unknown User'} : `}{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
})

export default Message;