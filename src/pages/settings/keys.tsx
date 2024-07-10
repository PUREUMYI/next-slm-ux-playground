import { ActivateInput } from "@/components/ActivateInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

const GeneralPage = () => {
  const keys = {
    langchain: "key-langchain1234",
    langchainActivate: true,
    openai: "",
    openaiActivate: false,
    anthropic: "",
    anthropicActivate: false,
  };
  const [langchain, setLangchain] = useState(keys.langchain);
  const [langchainActivate, setLangchainActivate] = useState(
    keys.langchainActivate
  );
  const [openai, setOpenai] = useState(keys.openai);
  const [openaiActivate, setOpenaiActivate] = useState(keys.openaiActivate);
  const [anthropic, setAnthropic] = useState(keys.anthropic);
  const [anthropicActivate, setAnthropicActivate] = useState(
    keys.anthropicActivate
  );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <Link href="/settings/general">General</Link>
            <Link href="/settings/ollama">Ollama</Link>
            <Link href="#" className="font-semibold text-primary">
              Keys
            </Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>LangChain Key</CardTitle>
                <CardDescription>
                  Enter the LangChain Key for the LangSmith connection.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ActivateInput
                  description="Enter your LangChain Key, turn on the Activate Switch, and you can check your history in LangSmith."
                  placeholder="LangChain Key"
                  value={langchain}
                  onChange={(value) => setLangchain(value)}
                  activate={langchainActivate}
                  onActivateChange={(activate) => {
                    setLangchainActivate(activate);
                  }}
                />
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>LLM Keys</CardTitle>
                <CardDescription>
                  Enter the key to connect the LLM Services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ActivateInput
                  title="Open AI"
                  description="Enter the OpenAI Key, turn on the Activate Switch, and you can use the OpenAI Model."
                  placeholder="Open AI Key"
                  value={openai}
                  onChange={(value) => setOpenai(value)}
                  activate={openaiActivate}
                  onActivateChange={(activate) => {
                    setOpenaiActivate(activate);
                  }}
                />
                <Separator className="mt-2 mb-2" />
                <ActivateInput
                  title="Anthropic"
                  description="Enter the Anthropic Key, turn on the Activate Switch, and you can use the Anthropic Model."
                  placeholder="Anthropic Key"
                  value={anthropic}
                  onChange={(value) => setAnthropic(value)}
                  activate={anthropicActivate}
                  onActivateChange={(activate) => {
                    setAnthropicActivate(activate);
                  }}
                />
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneralPage;
