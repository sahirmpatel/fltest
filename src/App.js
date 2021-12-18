import { useEffect, useState } from "react";
import "./App.scss";
import ChatDetails from "./components/ChatDetails";
import ChatTab from "./components/ChatTab";
function App() {
  const [localData, setlocalData] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [chatDetails, setChatDetails] = useState([]);
  useEffect(() => {
    function getChatData() {
      return fetch("https://my-json-server.typicode.com/codebuds-fk/chat/chats")
        .then((response) => response.json())
        .then((res) => {
          setlocalData(res);
          setChatData(res);
        });
    }

    getChatData();
  }, []);

  const openChat = (id) => {
    let detail = chatData.filter((data) => data.id == id);
    setChatDetails(detail);
  };

  const search = (e) => {
    var results = [];

    for (var i = 0; i < localData.length; i++) {
      if (
        localData[i].title.toLowerCase().indexOf(e.target.value) != -1 ||
        localData[i].orderId.toLowerCase().indexOf(e.target.value) != -1
      ) {
        results.push(localData[i]);
      }
    }

    setChatData(results);
  };

  function debounce(callback, time) {
    let settimeoutid = null;
    return function () {
      clearTimeout(settimeoutid);
      settimeoutid = setTimeout(() => {
        callback.apply(this, arguments);
      }, time);
    };
  }

  const searchDB = debounce((args) => {
    search(args);
  }, 300);

  return (
    <div className="App">
      <div className="chatList">
        <input
          type="text"
          placeholder="search.."
          onKeyUp={(e) => searchDB(e)}
        />
        {chatData.map((chats) => {
          return <ChatTab openChat={openChat} data={chats} key={chats.id} />;
        })}
      </div>
      <div className={chatDetails.length ? "chatDetails" : "d-none"}>
        {chatDetails.length && <ChatDetails data={chatDetails} />}
      </div>
    </div>
  );
}

export default App;
