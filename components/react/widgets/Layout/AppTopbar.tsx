import { useApp, useUser } from '@/app/providers/StoreProvider';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    Separator,
    SidebarTrigger,
} from '@/shared/ui/shadcn/new-york';

export function AppTopbar() {
    const { appData } = useApp();
    const { userLogged } = useUser();
    const firstName = userLogged?.first_name?.trim() || '';
    const lastName = userLogged?.last_name?.trim() || '';
    const avatarFallback = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || 'U';
    const avatarSrc = userLogged?.gender ? '/static/img/man-avatar.jpg' : '/static/img/woman-avatar.jpg';
    const goToProfile = () => {
        window.location.href = '/admin/profile';
    };

    return (
        <header className={`sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200/80 px-3 backdrop-blur-sm md:px-5 ${appData?.mode === 'DEV' ? 'bg-red-600 border-red-700 text-white' : 'bg-white/90'}`}>
            <div className="flex items-center gap-2">
                <SidebarTrigger className="size-8 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100" />
                <Separator orientation="vertical" className="mx-1 hidden h-5 md:block" />
                <div className="hidden items-center gap-2 md:flex">
                    <span className="text-sm font-bold tracking-tight">
                        {appData?.company_name || 'Company'}
                    </span>

                    {appData?.mode === 'DEV' && (
                        <span className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white">
                            🚨🚨 YOU ARE ON TEST MODE 🚨🚨
                        </span>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-1.5">
                {/* <Button variant="ghost" size="icon" className="size-9 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                    <Bell className="size-4" />
                </Button>
                <Button variant="ghost" size="icon" className="size-9 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                    <Settings className="size-4" />
                </Button> */}
                <Separator orientation="vertical" className="mx-1 hidden h-5 md:block" />
                <Button
                    variant="ghost"
                    className="h-10 rounded-lg px-1.5 hover:bg-slate-100"
                    onClick={goToProfile}
                >
                    <Avatar className="h-8 w-8 rounded-full">
                        <AvatarImage src={avatarSrc} alt={userLogged?.username || 'user'} />
                        <AvatarFallback className="text-xs font-semibold">{avatarFallback}</AvatarFallback>
                    </Avatar>
                </Button>
            </div>
        </header>
    );
}
