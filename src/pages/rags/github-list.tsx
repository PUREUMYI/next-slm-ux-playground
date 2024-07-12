import { GithubRAGsModel } from "@/components/models/message";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@radix-ui/react-label";
import { Separator } from "@radix-ui/react-select";
import Link from "next/link";
import { useState } from "react";

import { CopyPlus, PackageX, RefreshCw } from 'lucide-react';

const GithubListPage = () => {
  const [githubRAGsModel, setGithubRAGsModel] = useState<GithubRAGsModel[]>([
    {
      repoName: "miracom/next-slm",
      fileType: "ts,mdx",
      files: 10,
      creationDate: "2024/07/09",
      models: "A",
      regenerate: "B",
      remove: "C",
    },
    {
      repoName: "miracom/next-slm-rag",
      fileType: "py,mdx",
      files: 20,
      creationDate: "2024/07/09",
      models: "A",
      regenerate: "B",
      remove: "C",
    },
  ]);

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
            <Link href="#" className="font-semibold text-primary">
              Github
            </Link>
            <Link href="/rags/search">Search</Link>
          </nav>
          <div className="grid gap-6">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
              <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                  <CardTitle>Github Settings</CardTitle>
                  <CardDescription>
                    Change general settings on Github RAG
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full gap-1.5">
                      <Label>Github Token</Label>
                      <Input
                        type="text"
                        value=""
                        onChange={(e) => e.target.value}
                        placeholder="Github Token"
                      />
                      <p className="text-sm text-muted-foreground">
                        Enter the token to access Github
                      </p>
                    </div>

                    <Separator className="my-4" />

                    <div className="grid w-full gap-1.5">
                      <Label>Github URL</Label>
                      <Input
                        type="text"
                        value=""
                        max={20}
                        onChange={(e) => {}}
                        placeholder="Github URL"
                      />
                      <p className="text-sm text-muted-foreground">
                        Enter your Github Enterprise URL
                      </p>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            </Card>

            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
              <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                  <CardTitle>Github RAGs</CardTitle>
                  <CardDescription>
                    List of registered Github RAGs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-center w-[300px]">
                          Repo Name
                        </TableHead>
                        <TableHead className="text-center w-[120px]">
                          File Type
                        </TableHead>
                        <TableHead className="text-center w-[100px]">
                          Size
                        </TableHead>
                        <TableHead className="text-center w-[200px]">
                          Creation Date
                        </TableHead>
                        <TableHead className="text-center w-[80px]">
                          Models
                        </TableHead>
                        <TableHead className="text-center w-[80px]">
                          Regenerate
                        </TableHead>
                        <TableHead className="text-center w-[80px]">
                          Remove
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="text-black">
                      {githubRAGsModel.map((githubRAG, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {githubRAG.repoName}
                          </TableCell>
                          <TableCell className="text-center">
                            {githubRAG.fileType}
                          </TableCell>
                          <TableCell className="text-center">
                            {githubRAG.files}
                          </TableCell>
                          <TableCell className="text-center">
                            {githubRAG.creationDate}
                          </TableCell>
                          <TableCell align={"center"}>
                            <CopyPlus />
                          </TableCell>
                          <TableCell align={"center"}>
                            <RefreshCw />
                          </TableCell>
                          <TableCell align={"center"}>
                            <PackageX />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GithubListPage;
