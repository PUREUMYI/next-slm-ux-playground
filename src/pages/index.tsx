import {
  Command,
  Copy,
  CornerDownLeft,
  MessageSquarePlus,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

import { SlmMessage, SlmMessageType } from "@/components/models/message";
import { MessageModel } from "@/components/playground/MessageModel";
import { SettingsModel } from "@/components/playground/SettingsModel";
import { useState } from "react";

export default function Home() {
  const [slmMessages, setSlmMessages] = useState<SlmMessage[]>([
    {
      role: SlmMessageType.HUMAN,
      message: "Hello World!!!",
    },
    {
      role: SlmMessageType.AI,
      message: "Nice to meet you!!!",
    },
  ]);

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Playground</h1>
          <Button
            disabled
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Save className="size-3.5" />
            Save
          </Button>
          <Button variant="outline" size="sm" className="ml-2 gap-1.5 text-sm">
            <Trash2 className="size-3.5" />
            Clear
          </Button>
        </div>

        <div className="flex flex-col lg:h-full">
          <header className="sticky top-0 z-10 flex items-center gap-1 border-b bg-background px-4" />

          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-4 lg:h-full">
            {/* System Block */}
            <div className="relative flex flex-col items-start gap-8 md:flex lg:min-h-[50vh]">
              <form className="grid w-full items-start gap-6 lg:h-full">
                <fieldset className="grid relative gap-6 rounded-lg border p-4 md:min-h-[50vh] lg:h-full">
                  <Copy
                    size={12}
                    className="absolute top-2 right-2 cursor-pointer"
                  />
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    SYSTEM
                  </legend>
                  <div className="grid gap-3">
                    <Textarea
                      placeholder="You are..."
                      className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                      // value={systemMessage}
                    />
                  </div>
                </fieldset>
              </form>
            </div>

            {/* Human / AI Block */}
            <div className="relative flex min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 lg:h-full ">
              <div className="flex-1">
                {slmMessages.map((slmMessage, index) => (
                  <MessageModel key={index} slmMessage={slmMessage} />
                ))}

                <div className="gap-2 item-center md:ml-auto md:flex">
                  <Button variant="secondary" size="sm">
                    <MessageSquarePlus className="size-5 mr-2" />
                    Add Message
                  </Button>

                  <Button type="submit" size="sm">
                    Send Message
                    <Command size={14} className="ml-2" />
                    {/* <ChevronUp size={16} /> */}
                    <Plus size={12} />
                    <CornerDownLeft size={14} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="relative hidden flex-col items-start gap-8 md:flex">
              <SettingsModel />
            </div>
          </main>
        </div>
      </main>
    </>
  );
}
