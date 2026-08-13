import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", ...props }: React.ComponentProps<"span"> & { variant?: "default" | "secondary" | "outline" | "destructive" }) {
  return <span className={cn("inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold", variant === "default" && "border-transparent bg-blue-600 text-white", variant === "secondary" && "border-transparent bg-gray-100", variant === "destructive" && "border-transparent bg-red-600 text-white", className)} {...props} />;
}
