const ENDPOINT = import.meta.env.VITE_ENDPOINT_URL;

export const LOGIN_WITH_OTP = `${ENDPOINT}/usermgmt/usermgmtsupport/Login`;
export const LOGIN_CONFIGURATION = `${ENDPOINT}/moeimgmt/login/LoginConfiguration`;
export const ADMIN_PERMISSION = `${ENDPOINT}/admin/adminpermission/getInterfaceDetails`;
export const UAE_PASS = `${ENDPOINT}/moeimgmt/login/UAEPass`;

//ATTACHMENTS
export const ATTACHMENT_CONFIG = `${ENDPOINT}/admin/attachmentconfig/AttachmentConfiguration`;
export const ANONYMOUS_UPLOAD_ATTACHMENT = `${ENDPOINT}/moeimgmt/supportingservices/uploadAttachment`;
export const ANONYMOUS_DOWNLOAD_ATTACHMENT = `${ENDPOINT}/moeimgmt/supportingservices/downloadAttachment`;
export const ANONYMOUS_DELETE_ATTACHMENT = `${ENDPOINT}/moeimgmt/supportingservices/deleteAttachment`;
export const ANONYMOUS_GET_ATTACHMENT_CONFIG = `${ENDPOINT}/moeimgmt/supportingservices/getAttachmentConfigById`;
export const GET_DOCUMENT_MASTER_BY_ID = `${ENDPOINT}/admin/attachmentconfig/GetDocumentMasterById`;

// COMMON API
export const COMMENT = `${ENDPOINT}/ixcommon/comment/Comment`;
export const AUDIT_HISTORY = `${ENDPOINT}/common/audithistory/GetAuditHistoryByReqId`;
export const EXTENDED_SETTINGS = `${ENDPOINT}/admin/adminpermission/getExtendedSettings`;
export const COMMON_PROFILE_INFORMATION = `${ENDPOINT}/usermgmt/usermgmtsupport/ProfileInformation`;
export const ATTACHMENT = `${ENDPOINT}/common/attachment/Attachment`;

//FUEL PRICING
export const FUEL_PRICING_CONFIG = `${ENDPOINT}/moei/fpconfiguration/MOEIFPConfiguration`;
export const FUEL_PRICING_CONFIG_ACTIVE = `${ENDPOINT}/moei/fpconfiguration/MOEIFPConfigurationActive`;
export const FUEL_PRICING_CONFIG_HISTORY = `${ENDPOINT}/moei/fpconfiguration/MOEIFPConfigurationHistory`;
export const FUEL_PRICING_REQUEST_DETAILS = `${ENDPOINT}/moei/fprequest/MOEIFPRequest`
export const FUEL_PRICING_APPROVED_DETAILS = `${ENDPOINT}/moei/fprequest/MOEIGetFPApprovedById`;

// FUEL PRICING REPORTS
export const GASOLINE_DIESEL_REPORT = `${ENDPOINT}/moei/fpreports/MOEIFPGasolineAndDieselTrendReport`;
export const BRENT_REPORT = `${ENDPOINT}/moei/fpreports/MOEIFPBrentGraphReport`;
export const ULG_GO_REPORT = `${ENDPOINT}/moei/fpreports/MOEIFPUlgAndGoTrendReport`;
export const FINAL_FUEL_PRICE_REPORT = `${ENDPOINT}/moei/fpreports/MOEIFPGetApprovalFuelPriceTrendReport`;
export const FUEL_PRICING_ADJUSTMENTS = `${ENDPOINT}/moei/fpreports/MOEIFPAdjustmentsForAllProducts`;

// Admin Configuration
export const DAILY_DATA_EXCEL_LIST = `${ENDPOINT}/moei/fpexceldata/MOEIFPExcelDataRequest`;
export const DAILY_DATA_EXCEL_UPLOAD = `${ENDPOINT}/moei/fpexceldata/MOEIFPUploadExcelData`;
export const UPDATE_PRIMARY_DAILY_DATA_SOURCE = `${ENDPOINT}/moei/fpdailydata/MOEIFPUpdatePrimarySource`;

//User Management
export const USERS_BY_ROLENAME = `${ENDPOINT}/adminmgmt/rolemgmt/GetUsersByRoleName`;
export const DELTE_USER_TO_ROLE = `${ENDPOINT}/adminmgmt/rolemgmt/DeleteUserToRole`;
export const GET_ALL_USER = `${ENDPOINT}/adminfw/rolemgmt/SearchUsers`;
export const ADD_USER_TO_ROLE = `${ENDPOINT}/adminmgmt/rolemgmt/AddUserToRole`;
export const ONBOARD_USER = `${ENDPOINT}/usermgmt/usermgmtsupport/SaveUserDetails`;
export const GET_ALL_USERS = `${ENDPOINT}/usermgmt/usermgmtsupport/getAllUserDetails`;
export const INVITE_USER = `${ENDPOINT}/usermgmt/usermgmtsupport/SaveUserDetails`;
export const UPDATE_USER = `${ENDPOINT}/usermgmt/usermgmtsupport/updateUserActive`;


//Reports
export const DAILY_DATA_CAPTURE = `${ENDPOINT}/moei/fpdailydata/MOEIFPDailyData`;
export const GET_ALL_ACTIVE_SOURCES = `${ENDPOINT}/moei/fpdailydata/MOEIFPGetAllActiveSource`;
export const REFRESH_DAILY_DATA = `${ENDPOINT}/moei/fpdailydata/MOEIFPRefreshDailyData`;

// Task Configuration
export const GET_TASK_BY_ID = `${ENDPOINT}taskmanagement/taskaction/getTaskById`;

//DASHBOARD API's
export const GET_FP_DASHBOARD = `${ENDPOINT}/moei/fpdashboard/getFPDashboard`;

export const TASK_ACTION = `${ENDPOINT}/taskmanagement/taskaction/getTaskById`;
export const UPDATE_TASK = `${ENDPOINT}/taskmanagement/taskaction/updateTask`;
export const UPDATE_TASK_CONFIG_DATA = `${ENDPOINT}/taskmanagement/taskaction/updateTaskConfig`;
export const GETA_ALL_ACTIVE_TASK = `${ENDPOINT}/moei/fpdashboard/MOEIGetAllTaskQueued`;
// TASK API

// Digitat Signature
// export const INITIATE_SIGN_PROCESS = `${ENDPOINT}/uaepassintegration/initiatesignprocess/initiateSignProcess`;
// export const GET_SIGN_STATUS = `${ENDPOINT}/uaepassintegration/initiatesignprocess/getSignStatus`

export const INITIATE_SIGN_PROCESS = `${ENDPOINT}/uaepassintegration/digitalsignature/initiateSignProcess`;
export const GET_SIGN_STATUS = `${ENDPOINT}/uaepassintegration/digitalsignature/getSignStatus`;

// System Maintenance
export const FETCH_DAILY_DATA = `${ENDPOINT}/moei/fpdailydata/MOEIAddFPHistoryDailyData`;
