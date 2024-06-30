import {
  BookOpen,
  FolderClock,
  MessageSquareMore,
  Settings,
  SquareTerminal,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NextSlmLogo } from "./NextSlmLogo";

export const SideMenu = () => {
  const pathname = usePathname();
  const [menus, setMenus] = useState([
    {
      url: "/",
      name: "Playground",
      icon: <SquareTerminal className="h-4 w-4" />,
      token: "/home",
      disabled: false,
    },
    {
      // url: "/chat",
      url: "/underconstruction",
      name: "Chat",
      icon: <MessageSquareMore className="h-4 w-4" />,
      token: "/chat",
      disabled: true,
    },
    {
      url: "/underconstruction",
      name: "Chat History",
      icon: <FolderClock className="h-4 w-4" />,
      token: "/history",
      disabled: true,
    },
    {
      url: "/settings/general",
      name: "Settings",
      icon: <Settings className="h-4 w-4" />,
      token: "/settings",
      disabled: false,
    },
    {
      url: "/underconstruction",
      name: "Support",
      icon: <BookOpen className="h-4 w-4" />,
      token: "/support",
      disabled: true,
    },
  ]);

  const baseClass =
    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ";

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            {/* <Brain className="h-6 w-6" /> */}
            <NextSlmLogo width={24} height={24} />
            <span>Next SLM</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {menus.map((menu, index) => (
              <Link
                key={index}
                href={menu.url}
                aria-disabled
                className={
                  pathname.startsWith(menu.token)
                    ? baseClass + "bg-muted"
                    : baseClass + "text-muted-foreground"
                }
              >
                {menu.icon}
                {menu.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
