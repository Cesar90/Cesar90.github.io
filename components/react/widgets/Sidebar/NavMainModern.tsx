'use client';

import { useMemo } from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import { useApp } from '@/app/providers/StoreProvider';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/shared/ui/shadcn/new-york';

interface INavMainSubItem {
    title: string
    url: string
}

interface INavMainItem {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: INavMainSubItem[]
}

interface IProps {
    items: INavMainItem[]
}

export function NavMainModern({ items }: IProps) {
    const { appData } = useApp();
    const pathname = useMemo(() => window.location.pathname, []);

    return (
        <SidebarGroup className="pt-1">
            <SidebarGroupLabel className="px-2 text-xs font-semibold tracking-[0.06em]  uppercase">
                {appData?.company_name || 'Navigation'}
            </SidebarGroupLabel>
            <SidebarMenu className="gap-1">
                {items.map((item) => {
                    const hasChildren = Boolean(item.items?.length);
                    const hasActiveChild = item.items?.some((subItem) => pathname === subItem.url) ?? false;
                    const isGroupOpen = item.isActive || hasActiveChild;

                    return (
                        <Collapsible
                            key={item.title}
                            asChild
                            defaultOpen={isGroupOpen}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild disabled={!hasChildren}>
                                    <SidebarMenuButton
                                        tooltip={item.title}
                                        isActive={hasActiveChild}
                                        className={[
                                            'h-10 rounded-lg px-2.5 text-[15px] font-medium text-slate-600 transition-all',
                                            'hover:bg-slate-100 hover:text-slate-900',
                                            'data-[active=true]:bg-slate-100 data-[active=true]:text-slate-900',
                                        ].join(' ')}
                                    >
                                        {item.icon && <item.icon className="size-4 text-slate-500" />}
                                        <span>{item.title}</span>
                                        {hasChildren && (
                                            <ChevronRight className="ml-auto size-4 text-slate-400 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        )}
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                {hasChildren && (
                                    <CollapsibleContent>
                                        <SidebarMenuSub className="ml-4 mt-1 gap-1 border-l border-slate-200/80 pl-2.5">
                                            {item.items?.map((subItem) => {
                                                const isSubItemActive = pathname === subItem.url;
                                                return (
                                                    <SidebarMenuSubItem key={subItem.title}>
                                                        <SidebarMenuSubButton
                                                            asChild
                                                            isActive={isSubItemActive}
                                                            className={[
                                                                'h-9 rounded-lg px-2.5 text-[15px] text-slate-500 transition-all',
                                                                'hover:bg-slate-100 hover:text-slate-900',
                                                                'data-[active=true]:bg-slate-200/80',
                                                                'data-[active=true]:font-medium data-[active=true]:text-slate-900',
                                                            ].join(' ')}
                                                        >
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    window.location.href = subItem.url;
                                                                }}
                                                            >
                                                                <span>{subItem.title}</span>
                                                            </button>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                );
                                            })}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                )}
                            </SidebarMenuItem>
                        </Collapsible>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
