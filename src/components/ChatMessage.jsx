const ChatMessage = ({ name, message }) => {
  return (
    <div className="px-3 flex items-center py-2">
      <img
        className="h-8"
        src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
        alt="user-icon"
      />
      <p className="font-medium px-2">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
