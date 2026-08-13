import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"button"> & { variant?: "default" | "outline" | "ghost"; size?: "default" | "sm" | "icon" };
export function Button({ className, variant = "default", size = "default", ...props }: Props) {
  return <button className={cn("inline-flex items-center justify-center gap-2 rounded-md font-medium transition disabled:opacity-50", variant === "default" ? "bg-blue-600 text-white hover:bg-blue-700" : variant === "outline" ? "border bg-white hover:bg-gray-50" : "hover:bg-gray-100", size === "sm" ? "h-8 px-3 text-sm" : size === "icon" ? "size-9" : "h-10 px-4", className)} {...props} />;
}
