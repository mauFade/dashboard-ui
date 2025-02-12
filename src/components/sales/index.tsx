import { CircleDollarSign } from "lucide-react";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Sales = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos clientes
          </CardTitle>

          <CircleDollarSign className="ml-auto h-4 w-4" />
        </div>

        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>

      <CardContent className="max-h-64 overflow-y-auto custom-scrollbar">
        {Array.from({ length: 20 }).map((_, i) => (
          <article key={i} className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://www.github.com/mauFade.png" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm sm:text-base font-semibold">
                Maurício Cardoso
              </p>
              <span className="text-[12px] sm:text-sm text-gray-400">
                test@test.com
              </span>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  );
};

export default Sales;
