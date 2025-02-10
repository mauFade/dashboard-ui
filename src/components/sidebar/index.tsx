import {
  Home,
  Package,
  PanelBottom,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-full bg-muted/40">
      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only">Open / Close menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent className="sm:max-w-xs" side="left">
              <SheetTitle className="sr-only">Menu</SheetTitle>

              <nav className="grid gap-6 text-xl font-medium">
                <Link
                  href="#"
                  className="flex h-10 w-10 bg-primary rounded-full items-center justify-center text-primary-foreground md:text-base gap-2"
                  prefetch={false}
                >
                  <Package className="w-5 h-5 transition-all" />
                  <span className="sr-only">Logo</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Home className="w-5 h-5 transition-all" />
                  Início
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <ShoppingBag className="w-5 h-5 transition-all" />
                  Pedidos
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Package className="w-5 h-5 transition-all" />
                  Produtos
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Users className="w-5 h-5 transition-all" />
                  Clientes
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Settings2 className="w-5 h-5 transition-all" />
                  Configurações
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
