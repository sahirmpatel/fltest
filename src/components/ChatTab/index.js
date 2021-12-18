import React from "react";
import "./style.scss";
const ChatTab = ({ openChat, data }) => {
  return (
    <div className="chattab" onClick={() => openChat(data.id)}>
      <div className="thumbnail">
        <img src={data.imageURL} alt={data.title} />
      </div>
      <div className="chatinfo">
        <p>{data.title}</p>
        <p>{data.orderId}</p>
        <p>
          {data.messageList.length
            ? data.messageList[data.messageList.length - 1].message
            : ""}
        </p>
      </div>
      <div className="chatdate">{data.latestMessageTimestamp}</div>
    </div>
  );
};

export default ChatTab;
