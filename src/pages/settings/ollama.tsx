import { LocalModel } from "@/components/models/message";
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
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useState } from "react";

const OllamaPage = () => {
  const [ollamaServer, setOllamaServer] = useState("http://localhost:12345");
  const [localModels, setLocalModels] = useState<LocalModel[]>([
    {
      name: "aya",
      size: 1,
      family: "command-r",
      format: "format",
      paramSize: "10",
      quantizationLevel: "5",
    },
    {
      name: "eeve",
      size: 1,
      family: "llama",
      format: "format",
      paramSize: "10",
      quantizationLevel: "5",
    },
  ]);

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
            <Link href="#" className="font-semibold text-primary">
              Ollama
            </Link>
            <Link href="/settings/keys">Keys</Link>
            <Link href="/underconstruction">Github</Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Server Information</CardTitle>
                <CardDescription>
                  Enter the address of the Ollama server.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input
                    type="text"
                    placeholder="Ollama Server Address"
                    value={ollamaServer}
                  />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>

            <Tabs defaultValue="installed" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="installed">Installed Models</TabsTrigger>
                <TabsTrigger value="manager">
                  Model Download Manager
                </TabsTrigger>
              </TabsList>
              <TabsContent value="installed">
                <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle>Installed Models</CardTitle>
                    <CardDescription>
                      Displays a list of models installed in Ollama.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[350px]">Name</TableHead>
                          <TableHead className="text-right">Size</TableHead>
                          <TableHead>Family</TableHead>
                          {/* <TableHead>Format</TableHead> */}
                          <TableHead className="text-right">
                            Param Size
                          </TableHead>
                          <TableHead className="text-right">
                            Quantization Level
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {localModels.map((localModel, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              {localModel.name}
                            </TableCell>
                            <TableCell className="text-right">
                              {localModel.size}
                            </TableCell>
                            <TableCell>{localModel.family}</TableCell>
                            {/* <TableCell>{localModel.format}</TableCell> */}
                            <TableCell className="text-right">
                              {localModel.paramSize}
                            </TableCell>
                            <TableCell className="text-right">
                              {localModel.quantizationLevel}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="manager">
                <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle>Model Download Manager</CardTitle>
                    <CardDescription>
                      Displays a list of models installed in Ollama.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OllamaPage;
