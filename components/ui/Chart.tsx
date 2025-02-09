'use client';

import {
  Bar,
  BarChart as ReChart,
  Line,
  LineChart as ReLineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import { Card } from './card';

interface ChartProps {
  title: string;
  data: any[];
  type?: 'bar' | 'line';
  xKey: string;
  yKey: string;
  height?: number;
  className?: string;
}

export function Chart({
  title,
  data,
  type = 'bar',
  xKey,
  yKey,
  height = 300,
  className,
}: ChartProps) {
  const ChartComponent: typeof ReChart | typeof ReLineChart =
    type === 'bar' ? ReChart : ReLineChart;
  const DataComponent = (
    type === 'bar' ? Bar : Line
  ) as React.ComponentType<any>;

  return (
    <Card className={className}>
      <div className="p-6">
        <h3 className="font-semibold">{title}</h3>
        <div className="mt-4 h-[300px] w-full">
          <ResponsiveContainer width="100%" height={height}>
            <ChartComponent data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xKey} tick={{ fontSize: 12 }} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} tickLine={false} />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              {xKey}
                            </span>
                            <span className="font-bold">{label}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              {yKey}
                            </span>
                            <span className="font-bold">
                              {payload[0].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <DataComponent
                type="monotone"
                dataKey={yKey}
                fill="hsl(var(--primary))"
                stroke="hsl(var(--primary))"
              />
            </ChartComponent>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}

// "use client"

// import {
//   Bar,
//   BarChart as ReChart,
//   Line,
//   LineChart as ReLineChart,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   TooltipProps,
// } from "recharts"
// import { Card } from "./card"

// interface ChartProps {
//   title: string
//   data: any[]
//   type?: "bar" | "line"
//   xKey: string
//   yKey: string
//   height?: number
//   className?: string
// }

// export function Chart({
//   title,
//   data,
//   type = "bar",
//   xKey,
//   yKey,
//   height = 300,
//   className,
// }: ChartProps) {
//   const ChartComponent: typeof ReChart | typeof ReLineChart = type === "bar" ? ReChart : ReLineChart
//   const DataComponent: typeof Bar | typeof Line = type === "bar" ? Bar : Line

//   return (
//     <Card className={className}>
//       <div className="p-6">
//         <h3 className="font-semibold">{title}</h3>
//         <div className="mt-4 h-[300px] w-full">
//           <ResponsiveContainer width="100%" height={height}>
//             <ChartComponent data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis
//                 dataKey={xKey}
//                 tick={{ fontSize: 12 }}
//                 tickLine={false}
//               />
//               <YAxis tick={{ fontSize: 12 }} tickLine={false} />
//               <Tooltip
//                 content={({ active, payload, label }) => {
//                   if (active && payload && payload.length) {
//                     return (
//                       <div className="rounded-lg border bg-background p-2 shadow-sm">
//                         <div className="grid grid-cols-2 gap-2">
//                           <div className="flex flex-col">
//                             <span className="text-[0.70rem] uppercase text-muted-foreground">
//                               {xKey}
//                             </span>
//                             <span className="font-bold">{label}</span>
//                           </div>
//                           <div className="flex flex-col">
//                             <span className="text-[0.70rem] uppercase text-muted-foreground">
//                               {yKey}
//                             </span>
//                             <span className="font-bold">
//                               {payload[0].value}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     )
//                   }
//                   return null
//                 }}
//               />
//               <DataComponent
//                 type="monotone"
//                 dataKey={yKey}
//                 fill="hsl(var(--primary))"
//                 stroke="hsl(var(--primary))"
//               />
//             </ChartComponent>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </Card>
//   )
