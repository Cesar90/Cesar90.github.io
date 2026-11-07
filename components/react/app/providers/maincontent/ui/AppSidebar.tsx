
import * as React from 'react';

import {
    Building,
    Building2,
    Boxes,
    ChartPie,
    Glasses,
    ShieldCheck,
    Users,
    Settings,
} from 'lucide-react';

import {
    NavMainModern,
    NavUser,
    SidebarBrand,
} from '@/widgets/Sidebar';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from '@/shared/ui/shadcn/new-york';

// Navigation configuration
const navMainDashboard = [
    {
        title: 'Reports',
        url: '#',
        icon: ChartPie,
        isActive: false,
        items: [
            {
                title: 'Report',
                url: '/admin/reports/list',
            },
            {
                title: 'Multi Entity Report',
                url: '/admin/reports/multi-entity/list',
            },
            {
                title: 'Transaction Brand Report',
                url: '/admin/reports/transaction-brand/list',
            },
        ],
    },
    {
        title: 'Warehouse',
        url: '#',
        icon: Building,
        isActive: false,
        items: [
            {
                title: 'Warehouse List',
                url: '/admin/warehouses/list',
            },
        ],
    },
    {
        title: 'Branches',
        url: '#',
        icon: Building2,
        isActive: false,
        items: [
            {
                title: 'Branch List',
                url: '/admin/branches/list',
            },
            {
                title: 'Branch Invoices List',
                url: '/admin/branches/invoices/list',
            },
            {
                title: 'Create Customer Invoice',
                url: '/admin/branches/createinvoice',
            },
            {
                title: 'Sales Report',
                url: '/admin/branches/reports/sales/list',
            },
        ],
    },
    {
        title: 'Suppliers',
        url: '#',
        icon: Boxes,
        isActive: false,
        items: [
            {
                title: 'Supplier List',
                url: '/admin/suppliers/list',
            },
            {
                title: 'Invoices List',
                url: '/admin/suppliers/invoices/list',
            },
            {
                title: 'Payment Terms',
                url: '/admin/suppliers/paymentterms/list',
            },
        ],
    },
    {
        title: 'Customers',
        url: '#',
        icon: Users,
        isActive: false,
        items: [
            {
                title: 'Customer List',
                url: '/admin/customers/list',
            },
        ],
    },
    {
        title: 'Products',
        url: '#',
        icon: Boxes,
        isActive: false,
        items: [
            {
                title: 'Brand List',
                url: '/admin/products/brands/list',
            },
        ],
    },
    {
        title: 'Frames',
        url: '#',
        icon: Glasses,
        isActive: false,
        items: [
            {
                title: 'Gender List',
                url: '/admin/products/frame/gender/list',
            },
            {
                title: 'Material List',
                url: '/admin/products/frame/material/list',
            },
            {
                title: 'Material Use',
                url: '/admin/products/frame/use/list',
            },
        ],
    },
    {
        title: 'Security',
        url: '#',
        icon: ShieldCheck,
        isActive: false,
        items: [
            {
                title: 'Roles',
                url: '/admin/security/roles/list',
                requiredPermission: 'roles.read',
            },
            {
                title: 'Role Permissions',
                url: '/admin/security/role-permissions/list',
                requiredPermission: 'rolepermissions.read',
            },
            {
                title: 'Role Permission Requests',
                url: '/admin/security/role-permission-requests/list',
                requiredPermission: 'rolepermissions.read',
            },
            {
                title: 'Company Users',
                url: '/admin/security/company-users/list',
                requiredPermission: 'users.read',
            },
            {
                title: 'User Branches',
                url: '/admin/security/user-branches/list',
                requiredPermission: 'userbranches.read',
            },
        ],
    },
    {
        title: 'Company',
        url: '#',
        icon: Building,
        isActive: false,
        items: [
            {
                title: 'Company Profile',
                url: '/admin/companies/profile',
            },
        ],
    },
];

const navMainPublic = [
    {
        title: 'Config',
        url: '#',
        icon: Settings,
        items: [
            {
                title: 'My Profile',
                url: '/admin/profile',
            },
        ],
    },
];

// Reuse the user type expected by NavUser.
type SidebarUser = React.ComponentProps<
    typeof NavUser
>['user'];

interface AppSidebarProps
    extends React.ComponentProps<typeof Sidebar> {
    userLogged?: (
        SidebarUser & {
            is_superuser?: boolean;
        }
    ) | null;
}

export function AppSidebar({
    userLogged,
    ...props
}: AppSidebarProps) {
    if (!userLogged) {
        return null;
    }

    const sidebarItems = userLogged.is_superuser
        ? navMainDashboard
        : [
            ...navMainDashboard,
            ...navMainPublic,
        ];

    return (
        <Sidebar
            {...props}
            className="
                overflow-hidden
                border-r
                border-sidebar-border
                bg-sidebar
                text-sidebar-foreground
            "
        >
            <SidebarHeader
                className="
                    border-b
                    border-sidebar-border
                    px-2
                    pb-1
                    pt-2
                "
            >
                <SidebarBrand />
            </SidebarHeader>

            <SidebarContent className="px-1">
                <NavMainModern
                    items={sidebarItems}
                />
            </SidebarContent>

            <SidebarFooter
                className="
                    border-t
                    border-sidebar-border
                    px-2
                    py-2
                "
            >
                <NavUser user={userLogged} />
            </SidebarFooter>
        </Sidebar>
    );
}
