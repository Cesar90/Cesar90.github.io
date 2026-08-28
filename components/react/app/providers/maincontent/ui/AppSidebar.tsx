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
import { useUser } from '@/app/providers/StoreProvider';

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
    // {
    //     title: 'Companies',
    //     url: '#',
    //     icon: Building,
    //     isActive: true,
    //     items: [
    //         {
    //             title: 'Company List',
    //             url: '/admin/companies/list',
    //         },
    //     ],
    // },
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
    // {
    //     title: 'Inventories',
    //     url: '#',
    //     icon: Warehouse,
    //     isActive: true,
    //     items: [
    //         {
    //             title: 'Warehouse List',
    //             url: '/admin/internallocations/list',
    //         },
    //     ],
    // },
    {
        title: 'Suppliers',
        url: '#',
        icon: Boxes,
        isActive: false,
        items: [
            // {
            //     title: 'Create Invoice',
            //     url: '/admin/suppliers/createinvoice',
            // },
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
            // {
            //     title: 'Customer Type List',
            //     url: '/admin/customers/types/list',
            // },
            // {
            //     title: 'Customer Invoice Status List',
            //     url: '/admin/customers/invoices/status/list',
            // },
        ],
    },
    {
        title: 'Products',
        url: '#',
        icon: Boxes,
        isActive: false,
        items: [
            // {
            //     title: 'Create Product',
            //     url: '/admin/products/create',
            // },
            // {
            //     title: 'Product List',
            //     url: '/admin/products/list',
            // },
            {
                title: 'Brand List',
                url: '/admin/products/brands/list',
            },
            // {
            //     title: 'Sub Brand List',
            //     url: '/admin/products/subbrands/list',
            // },
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
            // {
            //     title: 'Users',
            //     url: '/admin/security/users/list',
            //     requiredPermission: 'users.read',
            // },
            {
                title: 'Roles',
                url: '/admin/security/roles/list',
                requiredPermission: 'roles.read',
            },
            // {
            //     title: 'Permissions',
            //     url: '/admin/security/permissions/list',
            //     requiredPermission: 'permissions.read',
            // },
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
    // ...Object.values(sharedItems).flat(),
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
    // sharedItems.invoices,
    // sharedItems.paycor,
    // sharedItems.report
];

// const data = {
//     user: {
//         name: 'shadcn',
//         email: 'm@example.com',
//         avatar: '/avatars/shadcn.jpg',
//     },
//     navSecondary: [
//         {
//             title: 'Support',
//             url: '#',
//             icon: LifeBuoy,
//         },
//         {
//             title: 'Feedback',
//             url: '#',
//             icon: Send,
//         },
//     ],
//     projects: [
//         {
//             name: 'Design Engineering',
//             url: '#',
//             icon: Frame,
//         },
//         {
//             name: 'Sales & Marketing',
//             url: '#',
//             icon: PieChart,
//         },
//         {
//             name: 'Travel',
//             url: '#',
//             icon: Map,
//         },
//     ],
// };
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { userLogged } = useUser();

    if (!userLogged) {
        return null;
    }

    const sidebarItems = userLogged.is_superuser
        ? navMainDashboard
        : [...navMainDashboard, ...navMainPublic];

    return (
        <Sidebar
            {...props}
            className="overflow-hidden border-r border-slate-200/80 bg-white/95 shadow-[2px_0_10px_rgba(15,23,42,0.02)]"
        >
            <SidebarHeader className="px-2 pb-1 pt-2 border-b">
                <SidebarBrand />
            </SidebarHeader>
            <SidebarContent className="px-1">
                <NavMainModern
                    items={sidebarItems}
                />
            </SidebarContent>
            <SidebarFooter className="border-t border-slate-200/80 px-2 py-2">
                <NavUser user={userLogged} />
            </SidebarFooter>
        </Sidebar>
    );
}
