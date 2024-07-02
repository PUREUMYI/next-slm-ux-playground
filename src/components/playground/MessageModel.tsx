import { BotMessageSquare, Copy } from "lucide-react";
import { useState } from "react";
import { SlmMessageType } from "../models/message";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export const MessageModel = ({ slmMessage }) => {
  const [message, setMessage] = useState(slmMessage.message);

  return (
    <div className="relative flex items-center mb-4 gap-4">
      {slmMessage.role == SlmMessageType.HUMAN ? (
        <Avatar className="h-9 w-9 top-0 cursor-pointer sm:flex">
          <AvatarImage src={"/avatars/01.png"} alt="HUMAN" />
          <AvatarFallback>HM</AvatarFallback>
        </Avatar>
      ) : (
        <Button variant="secondary" size="icon" className="rounded-full">
          <BotMessageSquare />
        </Button>
      )}
      <div className="grid relative w-full text-sm after:px-3.5 after:py-2.5 [&>textarea]:text-inherit after:text-inherit [&>textarea]:resize-none [&>textarea]:overflow-hidden [&>textarea]:[grid-area:1/1/2/2] after:[grid-area:1/1/2/2] after:whitespace-pre-wrap after:invisible after:content-[attr(data-cloned-val)_'_'] after:border">
        <Copy size={12} className="absolute top-2 right-2 cursor-pointer" />
        <Textarea
          placeholder="Type your message here..."
          className="min-h-12 h-full resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          // onInput={handleTextareaHeight}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
};
