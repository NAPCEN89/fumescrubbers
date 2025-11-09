import React, { useState, useRef, useEffect } from "react";
 import { FaPaperPlane } from "react-icons/fa";
  import "../components/Styles/ChatDialog.css";


const ChatDialog = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! 👋 How can we help you?", from: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, loading]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, from: "user" }]);
    setInput("");
    setLoading(true); // ⬅️ show typing bubble

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();

      setMessages(prev => [...prev, { text: data.reply, from: "bot" }]);
    } catch (err) {
      setMessages(prev => [...prev, { text: "Error connecting to server.", from: "bot" }]);
    } finally {
      setLoading(false); // ⬅️ hide typing bubble
    }
  };

  return (
    <div className="chat-dialog">
      <div className="chat-header">
        <span> Assistant</span>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.from === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}

        {/* Typing bubble */}
        {loading && (
          <div className="chat-message bot typing">
            <span></span><span></span><span></span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="send-btn">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatDialog;
