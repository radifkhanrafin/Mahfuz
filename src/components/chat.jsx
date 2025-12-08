import React, { useState } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Handle message send
  const handleSend = () => {
    if (!message.trim()) return; // empty message stop

    console.log("User message:", message);

    // Clear input after sending
    setMessage("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div
        onClick={() => setOpen(true)}
        className="fixed bottom-12 right-10 z-50 group cursor-pointer"
      >
        {!open && (
          <>
            <img
              className="w-16 h-16"
              src="https://i.ibb.co.com/0pZBF5Mz/5962463.png"
              alt=""
            />

            <span className="absolute right-20 bottom-3 bg-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
              Chat with Mahfuz Assistance
            </span>
          </>
        )}
      </div>

      {/* Chat Box */}
      {open && (
        <div className="fixed min-h-[450px] bottom-16 right-10 w-96 bg-white shadow-xl rounded-xl z-50 border border-gray-200 animate-fadeInUp overflow-y-scroll">

          {/* Header */}
          <div className="flex items-center justify-between p-4 primary-bg text-white rounded-t-xl">
            <h2 className="text-lg font-semibold">Mahfuz Assistance</h2>
            <button
              className="text-white text-xl"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 h-[390px] overflow-y-auto bg-gray-50">
            <div className="primary-bg text-white p-2 mb-3 rounded-lg w-max">
              Hi! How can I help you today?
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            />

            <button
              onClick={handleSend}
              className="primary-bg text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
