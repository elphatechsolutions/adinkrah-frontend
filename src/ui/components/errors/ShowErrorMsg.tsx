interface ErrorMsgProps {
  message: {
    body: string;
    type: "success" | "error" | "alert" | "server";
  };
}
const ShowErrorMsg = ({ message }: ErrorMsgProps) => {
  return (
    <div>
      {message.type == "success" ? (
        <p className="text-green-500 text-sm">{message.body}</p>
      ) : (
        <p className="text-red-700 text-sm">{message.body}</p>
      )}
    </div>
  );
};

export default ShowErrorMsg;
