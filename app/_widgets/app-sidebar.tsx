import {
  Home,
  List,
  LucideIcon,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/sidebar";
import Link from "next/link";
import type { ComponentProps } from "react";

// Menu items.
const items: Array<{
  title: string;
  url: ComponentProps<typeof Link>["href"];
  icon: LucideIcon;
}> = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Products",
    url: "/product",
    icon: ShoppingBag,
  },
  {
    title: "Category",
    url: "/category",
    icon: List,
  },
  {
    title: "Cart",
    url: "/cart",
    icon: ShoppingCart,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
