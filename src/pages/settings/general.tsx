import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";

const GeneralPage = () => {
  const [avatar, setAvatar] = useState("01");
  const [exportTemplate, setExportTemplate] = useState(`{
  "system": "{{systrem}}",
  "messages": [
    {{#each messages}}
    {
      "role": "{{role}}",
      "message": "{{message}}",
    },
    {{/each}}
  ],
  "setttings": {
    "model": "{{model}}",
    "temperature": "{{temperature}}",
    "maxLength": "{{maxLength}}",
    "topP": "{{topP}}"
  }
}`);

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
            <Link href="#" className="font-semibold text-primary">
              General
            </Link>
            <Link href="/settings/ollama">Ollama</Link>
            <Link href="/settings/keys">Keys</Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Change the theme to dark / light / system mode.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full gap-1.5">
                    <Label>Theme Mode</Label>
                    <Select value="light">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Change the theme to dark / light / system mode.
                    </p>
                  </div>

                  <Separator className="my-4" />

                  <div className="grid w-full gap-1.5 mt-4">
                    <Label>Avatar</Label>
                    <Select value="01">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="01">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Avatar className="h-6 w-6 top-0 cursor-pointer sm:flex">
                                <AvatarImage src="/avatars/01.png" />
                              </Avatar>
                              <div className="grid gap-0.5">Olivia</div>
                            </div>
                          </SelectItem>
                          <SelectItem value="02">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Avatar className="h-6 w-6 top-0 cursor-pointer sm:flex">
                                <AvatarImage src="/avatars/02.png" />
                              </Avatar>
                              <div className="grid gap-0.5">Jackson</div>
                            </div>
                          </SelectItem>
                          <SelectItem value="03">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Avatar className="h-6 w-6 top-0 cursor-pointer sm:flex">
                                <AvatarImage src="/avatars/03.png" />
                              </Avatar>
                              <div className="grid gap-0.5">Isabella</div>
                            </div>
                          </SelectItem>
                          <SelectItem value="04">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Avatar className="h-6 w-6 top-0 cursor-pointer sm:flex">
                                <AvatarImage src="/avatars/04.png" />
                              </Avatar>
                              <div className="grid gap-0.5">William</div>
                            </div>
                          </SelectItem>
                          <SelectItem value="05">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <Avatar className="h-6 w-6 top-0 cursor-pointer sm:flex">
                                <AvatarImage src="/avatars/05.png" />
                              </Avatar>
                              <div className="grid gap-0.5">Sofia</div>
                            </div>
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      Choose your avatar.
                    </p>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Import / Export Template</CardTitle>
                <CardDescription>
                  Please enter a template for import / export.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="message-2">Import / Export Template</Label>
                    <Textarea
                      disabled
                      placeholder="Please enter a template for import / export."
                      id="message-2"
                      className="h-80"
                    >
                      {exportTemplate}
                    </Textarea>
                    <p className="text-sm text-muted-foreground">
                      For template writing, see mustache syntax.
                      (https://handlebarsjs.com/guide/expressions.html)
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneralPage;
