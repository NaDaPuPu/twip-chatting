import React, { useRef, useState } from "react";
// import "./Mokgyu.scss";
import "./MNGG.scss";

const Chatting = () => {
  const [chatText, setChatText] = useState("");
  const [chatList, setChatList] = useState([]);

  const nextId = useRef(1);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setChatText(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const chat = {
      id: nextId.current,
      message: chatText,
    };
    setChatList([...chatList, chat]);
    setChatText("");
    nextId.current += 1;
  };

  return (
    <div className="chattingContainer">
      <div id="log">
        {chatList.map((chat) => (
          <div id={chat.id}>
            <span className="meta">
              <span className="name">onejun0319</span>
              <span className="colon">:</span>
            </span>
            <span className="message">{chat.message}</span>
          </div>
        ))}
      </div>
      <div className="textArea" onSubmit={onSubmit}>
        <form>
          <input type="text" value={chatText} onChange={onChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Chatting;
