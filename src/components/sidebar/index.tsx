import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-full bg-muted/40">
      <div className="flex flex-col">
        <header>
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <span>Open</span>
              </Button>
            </SheetTrigger>

            <SheetContent>
              <nav>
                <Link href="/">
                  <span>Logo</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
};

export default Sidebar;
