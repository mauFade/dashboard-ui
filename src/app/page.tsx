import { DollarSign } from "lucide-react";

import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                  Vendas Totais
                </CardTitle>

                <DollarSign className="ml-auto w-4 h-4" />
              </div>

              <CardDescription>Total de vendas em 90 dias</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">40 mil em vendas</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}
