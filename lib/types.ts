export interface UserInfo {
    name: string;
    email: string,
    picture: string,
    role: string,
    phone: string,
    address: string,
    savedDonors: [], // saved donors by user
    requests: [], // blood requests
    donations: [], // previous blood donation history
    bloodGroup: string,
}
