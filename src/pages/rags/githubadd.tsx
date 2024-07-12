import { GithubAdd } from "@/components/rags/GithubAdd";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

const GeneralPage = () => {
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
              Github Add (Temp)
            </Link>
            <Link href="/rags/search">Search</Link>
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Github Add (Temp)</CardTitle>
                <CardDescription>
                  For search augmentation using Tavily AI, please set up the
                  following information.
                </CardDescription>
              </CardHeader>

              <CardFooter className="border-t px-6 py-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Popup</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[1000px]">
                    {/* GithubAdd Component안에서 작업진행 */}
                    <GithubAdd />
                    {/* GithubAdd Component안에서 작업진행 */}
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GeneralPage;
