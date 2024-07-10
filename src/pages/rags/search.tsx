import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

const GeneralPage = () => {
  const [apiKey, setApiKey] = useState("");
  const [limitSources, setLimitSources] = useState(3);
  const [includeDomains, setIncludeDomains] = useState("");

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">RAGs</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <Link href="/underconstruction">Github</Link>
            <Link href="#" className="font-semibold text-primary">
              Search
            </Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Tavily Settings</CardTitle>
                <CardDescription>
                  For search augmentation using Tavily AI, please set up the
                  following information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full gap-1.5">
                    <Label>Tavily API Key</Label>
                    <Input
                      type="text"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="API Key"
                    />
                    <p className="text-sm text-muted-foreground">
                      Please obtain the API Key from the following site:
                      https://app.tavily.com
                    </p>
                  </div>

                  <Separator className="my-4" />

                  <div className="grid w-full gap-1.5">
                    <Label>Limit Sources</Label>
                    <Input
                      type="number"
                      min={1}
                      max={20}
                      value={limitSources}
                      onChange={(e) =>
                        setLimitSources(parseInt(e.target.value))
                      }
                      placeholder="Limit Sources"
                    />
                    <p className="text-sm text-muted-foreground">
                      Limit the amount of sources to research.
                    </p>
                  </div>

                  <Separator className="my-4" />

                  <div className="grid w-full gap-1.5">
                    <Label>Include Domains</Label>
                    <Input
                      type="text"
                      value={includeDomains}
                      onChange={(e) => setIncludeDomains(e.target.value)}
                    />
                    <p className="text-sm text-muted-foreground">
                      Only search the specified domains. Separate multiple
                      domains with a comma.
                    </p>
                  </div>
                </form>
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
