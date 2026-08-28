import {
    memo,
    Suspense,
    useEffect,
    useState,
} from 'react';

import {
    BriefcaseBusiness,
    Code2,
    FolderGit2,
    Home,
    Mail,
    Moon,
    Sun,
    UserRound,
} from 'lucide-react';

import { HomePage } from '@/pages/HomePage';
import { PageLoader } from '@/widgets/PageLoader';

import {
    Button,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
    useSidebar,
} from '@/shared/ui/shadcn/new-york';

import { useTheme } from '@/app/providers/StoreProvider';

import profilePhoto from '@/shared/assets/images/cesar-cordero.jpg';

const navigationItems = [
    {
        title: 'Home',
        url: '#home',
        icon: Home,
    },
    {
        title: 'About',
        url: '#about',
        icon: UserRound,
    },
    {
        title: 'Experience',
        url: '#experience',
        icon: BriefcaseBusiness,
    },
    {
        title: 'Skills',
        url: '#skills',
        icon: Code2,
    },
    {
        title: 'Projects',
        url: '#projects',
        icon: FolderGit2,
    },
    {
        title: 'Contact',
        url: '#contact',
        icon: Mail,
    },
];

const PortfolioNavigation = () => {
    const {
        isMobile,
        setOpenMobile,
    } = useSidebar();

    const [activeSection, setActiveSection] = useState('#home');

    useEffect(() => {
        const HEADER_OFFSET = 90;

        const updateActiveSection = () => {
            const sections = navigationItems
                .map((item) => {
                    const element = document.querySelector(
                        item.url,
                    ) as HTMLElement | null;

                    return {
                        ...item,
                        element,
                    };
                })
                .filter(
                    (
                        item,
                    ): item is typeof item & {
                        element: HTMLElement;
                    } => Boolean(item.element),
                );

            if (!sections.length) {
                return;
            }

            /*
             * If the user reaches the bottom of the page,
             * always activate the final section.
             */
            const isAtBottom = (
                window.innerHeight + window.scrollY
                >= document.documentElement.scrollHeight - 10
            );

            if (isAtBottom) {
                const lastSection = sections[sections.length - 1];

                setActiveSection(lastSection.url);

                return;
            }

            /*
             * Start with Home.
             *
             * As we iterate downward, the latest section whose
             * top has crossed the header threshold becomes active.
             */
            let currentSection = sections[0];

            sections.forEach((section) => {
                const rect = section.element.getBoundingClientRect();

                if (rect.top <= HEADER_OFFSET) {
                    currentSection = section;
                }
            });

            setActiveSection(currentSection.url);
        };

        updateActiveSection();

        window.addEventListener(
            'scroll',
            updateActiveSection,
            {
                passive: true,
            },
        );

        window.addEventListener(
            'resize',
            updateActiveSection,
        );

        return () => {
            window.removeEventListener(
                'scroll',
                updateActiveSection,
            );

            window.removeEventListener(
                'resize',
                updateActiveSection,
            );
        };
    }, []);

    const handleNavigation = (url: string) => {
        setActiveSection(url);

        if (isMobile) {
            setOpenMobile(false);
        }
    };

    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                Navigation
            </SidebarGroupLabel>

            <SidebarMenu className="gap-1">
                {navigationItems.map((item) => {
                    const isActive = activeSection === item.url;

                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                tooltip={item.title}
                                isActive={isActive}
                                className="
                                    transition-colors
                                    data-[active=true]:bg-sidebar-accent
                                    data-[active=true]:font-medium
                                    data-[active=true]:text-sidebar-accent-foreground
                                    data-[active=true]:shadow-sm
                                "
                            >
                                <a
                                    href={item.url}
                                    onClick={() => {
                                        handleNavigation(item.url);
                                    }}
                                >
                                    <item.icon className="size-4" />

                                    <span>
                                        {item.title}
                                    </span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
};

const SidebarBrand = () => {
    const {
        isMobile,
        setOpenMobile,
    } = useSidebar();

    const handleNavigation = () => {
        if (isMobile) {
            setOpenMobile(false);
        }
    };

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    asChild
                >
                    <a
                        href="#home"
                        onClick={handleNavigation}
                    >
                        <img
                            src={profilePhoto}
                            alt="César Cordero"
                            className="
                                aspect-square
                                size-8
                                shrink-0
                                rounded-full
                                border
                                object-cover
                            "
                        />

                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">
                                César Cordero
                            </span>

                            <span className="truncate text-xs text-muted-foreground">
                                Full-Stack Developer
                            </span>
                        </div>
                    </a>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
};

const ThemeToggle = () => {
    const {
        theme,
        setTheme,
    } = useTheme();

    const isDark = theme === 'dark';

    const toggleTheme = () => {
        setTheme(
            isDark
                ? 'light'
                : 'dark',
        );
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={
                isDark
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
            }
        >
            {isDark ? (
                <Sun className="size-4" />
            ) : (
                <Moon className="size-4" />
            )}
        </Button>
    );
};

const AppMainContent = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <SidebarProvider>
                <Sidebar
                    collapsible="icon"
                    className="
                        border-sidebar-border
                        bg-sidebar
                        text-sidebar-foreground
                    "
                >
                    <SidebarHeader className="border-b border-sidebar-border">
                        <SidebarBrand />
                    </SidebarHeader>

                    <SidebarContent>
                        <PortfolioNavigation />
                    </SidebarContent>

                    <SidebarFooter className="border-t border-sidebar-border">
                        <div className="px-2 py-3 text-xs text-sidebar-foreground/60">
                            ©
                            {' '}
                            {new Date().getFullYear()}
                            {' '}
                            César Cordero
                        </div>
                    </SidebarFooter>

                    <SidebarRail />
                </Sidebar>

                <SidebarInset>
                    <header
                        className="
                            sticky
                            top-0
                            z-40
                            flex
                            h-14
                            items-center
                            justify-between
                            border-b
                            bg-background/80
                            px-4
                            backdrop-blur
                        "
                    >
                        <SidebarTrigger />

                        <ThemeToggle />
                    </header>

                    <HomePage />
                </SidebarInset>
            </SidebarProvider>
        </Suspense>
    );
};

export default memo(AppMainContent);
