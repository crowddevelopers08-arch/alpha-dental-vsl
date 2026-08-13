"use client";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export const DropdownMenu = Menu.Root;
export const DropdownMenuTrigger = Menu.Trigger;
export function DropdownMenuContent({ className, ...props }: React.ComponentProps<typeof Menu.Content>) { return <Menu.Portal><Menu.Content className={cn("z-50 min-w-40 rounded-md border bg-white p-1 shadow-lg", className)} {...props} /></Menu.Portal>; }
export function DropdownMenuItem({ className, ...props }: React.ComponentProps<typeof Menu.Item>) { return <Menu.Item className={cn("cursor-default rounded px-3 py-2 text-sm outline-none focus:bg-gray-100", className)} {...props} />; }
