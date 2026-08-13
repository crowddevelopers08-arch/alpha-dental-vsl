import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = ({ className, ...props }: React.ComponentProps<"div">) => <div className={cn("rounded-xl border bg-white shadow-sm", className)} {...props} />;
export const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => <div className={cn("p-6", className)} {...props} />;
export const CardTitle = ({ className, ...props }: React.ComponentProps<"div">) => <div className={cn("font-semibold", className)} {...props} />;
export const CardDescription = ({ className, ...props }: React.ComponentProps<"div">) => <div className={cn("text-sm text-gray-500", className)} {...props} />;
export const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => <div className={cn("p-6 pt-0", className)} {...props} />;
