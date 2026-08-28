import { ReactNode } from 'react';
import { ComponentRoot } from '../ui/maincontent';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { AdminPage } from '@/pages/AdminPage';
import { EmployeeListPage } from '@/pages/EmployeeListPage';
import { EmployeeCreatePage } from '@/pages/EmployeeCreatePage';
import { EmployeeSplitStubsPage } from '@/pages/EmployeeSplitStubsPage';
import { EmployeeListUnverifiedPage } from '@/pages/EmployeeListUnverifiedPage';
import { RecruitingDownloadPage } from '@/pages/RecruitingDownloadPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { PasswordResetPage } from '@/pages/PasswordResetPage';
import { ChangePasswordPage } from '@/pages/ChangePasswordPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ListJobsPage } from '@/pages/ListJobsPage';
import { EditJobsPage } from '@/pages/EditJobsPage';
import { RegionListPage } from '@/pages/RegionListPage';
import { CompanyListPage } from '@/pages/CompanyListPage';
import { CompanyProfilePage } from '@/pages/CompanyProfilePage';
import { BranchListPage } from '@/pages/BranchListPage';
import { InternalLocationListPage } from '@/pages/InternalLocationListPage';
import { CreateProductPage } from '@/pages/CreateProductPage';
import { ListProductsPage } from '@/pages/ListProductsPage';
import { EditProductPage } from '@/pages/EditProductPage';
import { ConfigureIndividualStockPage } from '@/pages/ConfigureIndividualStock';
import { CompanyWarehouseListPage } from '@/pages/CompanyWarehouseListPage';
import { CompanyWarehouseInvetoryPage } from '@/pages/CompanyWarehouseInvetoryPage';
import { FrameGenderListPage } from '@/pages/FrameGenderListPage';
import { CustomerListPage } from '@/pages/CustomerListPage';
import { CustomerTypeListPage } from '@/pages/CustomerTypeListPage';
import { CustomerInvoiceStatusListPage } from '@/pages/CustomerInvoiceStatusListPage';
import { FrameMaterialListPage } from '@/pages/FrameMaterialListPage';
import { FrameUseListPage } from '@/pages/FrameUseListPage';
import { BrandListPage } from '@/pages/BrandListPage';
import { BranchInvoicesListPage } from '@/pages/BranchInvoicesListPage';
// import { BrandSubBrandListPagePage } from '@/pages/BrandSubBrandListPage';
import { CompanyWarehouseProductListPage } from '@/pages/CompanyWarehouseProductListPage';
import { WarehouseProductTransferListPage } from '@/pages/WarehouseProductTransferListPage';
import { WarehouseProductTransferWarehouseListPage } from '@/pages/WarehouseProductTransferWarehouseListPage';
import { WarehouseProductTransferInboundListPage } from '@/pages/WarehouseProductTransferInboundListPage';
import { WarehouseProductTransferWarehouseInboundListPage } from '@/pages/WarehouseProductTransferWarehouseInboundListPage';
import { WarehouseTransferListPage } from '@/pages/WarehouseTransferListPage';
import { WarehouseProductsOutgoingListPage } from '@/pages/WarehouseProductsOutgoingListPage';
import { WarehouseProductsInboundListPage } from '@/pages/WarehouseProductsInboundListPage';
import { BranchProductsInboundListPage } from '@/pages/BranchProductsInboundListPage';
import { BranchProductsOutgoingListPage } from '@/pages/BranchProductsOutgoingListPage';
import { BranchProductTransferListPage } from '@/pages/BranchProductTransferListPage';
import { BranchProductTransferSourceListPage } from '@/pages/BranchProductTransferSourceListPage';
import { BranchProductListPage } from '@/pages/BranchProductListPage';
import { BranchBrandDiscountListPage } from '@/pages/BranchBrandDiscountListPage';
import { BranchCreateInvoicePage } from '@/pages/BranchCreateInvoicePage';
import { BranchInvoicePage } from '@/pages/BranchInvoicePage';
import { BranchSalesReportPage } from '@/pages/BranchSalesReportPage';
import { SuppliersListPage } from '@/pages/SuppliersListPage';
import { SupplierInvoicesListPage } from '@/pages/SupplierInvoicesListPage';
import { CreateSupplierInvoicePage } from '@/pages/CreateSupplierInvoicePage';
import { SupplierPaymentTermsListPage } from '@/pages/SupplierPaymentTermsListPage';
import { SupplierInvoicePage } from '@/pages/SupplierInvoicePage';
import { ReportPage } from '@/pages/ReportPage';
import { MultiEntityReportPage } from '@/pages/MultiEntityReportPage';
import { TransactionBrandReportPage } from '@/pages/TransactionBrandReportPage';
import { SecurityUsersPage } from '@/pages/SecurityUsersPage';
import { SecurityRolesPage } from '@/pages/SecurityRolesPage';
import { SecurityPermissionsPage } from '@/pages/SecurityPermissionsPage';
import { SecurityRolePermissionsPage } from '@/pages/SecurityRolePermissionsPage';
import { SecurityRolePermissionRequestsPage } from '@/pages/SecurityRolePermissionRequestsPage';
import { SecurityCompanyUsersPage } from '@/pages/SecurityCompanyUsersPage';
import { SecurityUserBranchesPage } from '@/pages/SecurityUserBranchesPage';
import { WarehouseProductsInventorywithdrawalListPage } from '@/pages/WarehouseProductsInventorywithdrawalListPage';
import { WarehouseProductsInventorywithdrawaPage } from '@/pages/WarehouseProductsInventorywithdrawalPage';

export const RootComponents: Record<string, ReactNode> = {
    [ComponentRoot.PRIVACYPOLICY]: <PrivacyPolicyPage />,
    [ComponentRoot.LOGIN]: <LoginPage />,
    [ComponentRoot.HOME]: <HomePage />,
    [ComponentRoot.ADMIN]: <AdminPage />,
    [ComponentRoot.PASSWORDRESET]: <PasswordResetPage />,
    [ComponentRoot.CHANGEPASSWORD]: <ChangePasswordPage />,
    [ComponentRoot.RECRUITINGDOWNLOAD]: <RecruitingDownloadPage />,
    [ComponentRoot.EMPLOYEELIST]: <EmployeeListPage />,
    [ComponentRoot.EMPLOYEECREATE]: <EmployeeCreatePage />,
    [ComponentRoot.EMPLOYEESPLITSTUBS]: <EmployeeSplitStubsPage />,
    [ComponentRoot.EMPLOYEELISTUNVERIFIED]: <EmployeeListUnverifiedPage />,
    [ComponentRoot.PROFILE]: <ProfilePage />,
    [ComponentRoot.LISTJOBS]: <ListJobsPage />,
    [ComponentRoot.EDITJOBS]: <EditJobsPage />,
    [ComponentRoot.REGIONLIST]: <RegionListPage />,
    [ComponentRoot.COMPANYLIST]: <CompanyListPage />,
    [ComponentRoot.COMPANYPROFILEPAGE]: <CompanyProfilePage />,
    [ComponentRoot.BRANCHLIST]: <BranchListPage />,
    [ComponentRoot.INTERNALLOCATIONLIST]: <InternalLocationListPage />,
    [ComponentRoot.CREATEPRODUCT]: <CreateProductPage />,
    [ComponentRoot.PRODUCTLIST]: <ListProductsPage />,
    [ComponentRoot.EDITPRODUCT]: <EditProductPage />,
    [ComponentRoot.CONFIGUREINDIVIDUALSTOCK]: <ConfigureIndividualStockPage />,
    [ComponentRoot.COMPANYWAREHOUSELIST]: <CompanyWarehouseListPage />,
    [ComponentRoot.COMPANYWAREHOUSEINVENTORY]: <CompanyWarehouseInvetoryPage />,
    [ComponentRoot.FRAMEGENDERLISTPAGE]: <FrameGenderListPage />,
    [ComponentRoot.CUSTOMERLISTPAGE]: <CustomerListPage />,
    [ComponentRoot.CUSTOMERTYPELISTPAGE]: <CustomerTypeListPage />,
    [ComponentRoot.CUSTOMERINVOICESTATUSLISTPAGE]: <CustomerInvoiceStatusListPage />,
    [ComponentRoot.FRAMEMATERIALLISTPAGE]: <FrameMaterialListPage />,
    [ComponentRoot.FRAMEUSELISTPAGE]: <FrameUseListPage />,
    [ComponentRoot.BRANDLISTPAGE]: <BrandListPage />,
    // [ComponentRoot.BRANDSUBBRANDLISTPAGE]: <BrandSubBrandListPagePage />,
    [ComponentRoot.COMPANYWAREHOUSEPRODUCTLISTPAGE]: <CompanyWarehouseProductListPage />,
    [ComponentRoot.WAREHOUSEPRODUCTTRANSFERLISTPAGE]: <WarehouseProductTransferListPage />,
    [ComponentRoot.WAREHOUSEPRODUCTTRANSFERWAREHOUSELISTPAGE]: <WarehouseProductTransferWarehouseListPage />,
    [ComponentRoot.WAREHOUSEPRODUCTTRANSFERINBOUNDLISTPAGE]: <WarehouseProductTransferInboundListPage />,
    [ComponentRoot.WAREHOUSEPRODUCTTRANSFERWAREHOUSEINBOUNDLISTPAGE]: <WarehouseProductTransferWarehouseInboundListPage />,
    [ComponentRoot.WAREHOUSETRANSFERLISTPAGE]: <WarehouseTransferListPage />,
    [ComponentRoot.WAREHOUSEPRODUCTOUTGOINGLISTPAGE]: <WarehouseProductsOutgoingListPage />,
    [ComponentRoot.WAREHOUSEPRODUCTINBOUNDLISTPAGE]: <WarehouseProductsInboundListPage />,
    [ComponentRoot.BRACHPRODUCTSINBOUNDLISTPAGE]: <BranchProductsInboundListPage />,
    [ComponentRoot.BRACHPRODUCTSOUTGOINGLISTPAGE]: <BranchProductsOutgoingListPage />,
    [ComponentRoot.BRANCHPRODUCTTRANSFERLISTPAGE]: <BranchProductTransferListPage />,
    [ComponentRoot.BRANCHPRODUCTTRANSFERSOURCELISTPAGE]: <BranchProductTransferSourceListPage />,
    [ComponentRoot.BRANCHPRODUCTLISTPAGE]: <BranchProductListPage />,
    [ComponentRoot.BRANCHBRANDDISCOUNTLISTPAGE]: <BranchBrandDiscountListPage />,
    [ComponentRoot.BRANCHCREATEINVOICEPAGE]: <BranchCreateInvoicePage />,
    [ComponentRoot.BRANCHINVOICEPAGE]: <BranchInvoicePage />,
    [ComponentRoot.BRANCHSALESREPORTPAGE]: <BranchSalesReportPage />,
    [ComponentRoot.SUPPLIERSLISTPAGE]: <SuppliersListPage />,
    [ComponentRoot.SUPPLIERINVOICESLISTPAGE]: <SupplierInvoicesListPage />,
    [ComponentRoot.CREATESUPPLIERSINVOICEPAGE]: <CreateSupplierInvoicePage />,
    [ComponentRoot.SUPPLIERPAYMENTTERMSLISTPAGE]: <SupplierPaymentTermsListPage />,
    [ComponentRoot.SUPPLIERSINVOICEPAGE]: <SupplierInvoicePage />,
    [ComponentRoot.REPORTPAGE]: <ReportPage />,
    [ComponentRoot.MULTIENTITYREPORTPAGE]: <MultiEntityReportPage />,
    [ComponentRoot.TRANSACTIONBRANDREPORTPAGE]: <TransactionBrandReportPage />,
    [ComponentRoot.SECURITYUSERSPAGE]: <SecurityUsersPage />,
    [ComponentRoot.SECURITYROLESPAGE]: <SecurityRolesPage />,
    [ComponentRoot.SECURITYPERMISSIONSPAGE]: <SecurityPermissionsPage />,
    [ComponentRoot.SECURITYROLEPERMISSIONSPAGE]: <SecurityRolePermissionsPage />,
    [ComponentRoot.SECURITYROLEPERMISSIONREQUESTSPAGE]: <SecurityRolePermissionRequestsPage />,
    [ComponentRoot.SECURITYCOMPANYUSERSPAGE]: <SecurityCompanyUsersPage />,
    [ComponentRoot.SECURITYUSERBRANCHESPAGE]: <SecurityUserBranchesPage />,
    [ComponentRoot.BRANCHINVOICELISTPAGE]: <BranchInvoicesListPage />,
    [ComponentRoot.WAREHOUSEPRODUCTINVENTORYWITHDRAWALLISTPAGE]: <WarehouseProductsInventorywithdrawalListPage />,
    [ComponentRoot.WAREHOUSEWITHDRAWALPAGE]: <WarehouseProductsInventorywithdrawaPage />,
};
