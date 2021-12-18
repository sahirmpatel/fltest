import React from "react";
import "./style.scss";
const ChatDetails = ({ data }) => {
  return (
    <div className="chatbox">
      <div className="header">{data[0].title}</div>
      {data[0].messageList.length ? (
        <div className="messageList">
          {data[0].messageList.map((message) => {
            return (
              <div className={`message ${message.sender}`}>
                {message.message}
              </div>
            );
          })}
        </div>
      ) : (
        <div className={`empty`}>Send a Message to Start Chatting</div>
      )}
    </div>
  );
};

export default ChatDetails;
