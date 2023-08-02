export const initialValueUserInfo = {
    name: '',
    email: '',
    picture: '',
    role: '',
    phone: '',
    address: '',
    savedDonors: [], // saved donors by user
    requests: [], // blood requests
    donations: [], // previous blood donation history
    bloodGroup: '',
}

export const initialValueRequest = {
    location: '',
    title: '',
    description: '',
    bloodGroup: '',
    emergency: false,
    numOfBags: 1, // number of blood bags needed
    donors: [],
    status: 'pending',
    requestedBy: '',
    contactNum: '',
    bloodNeededBy: '',
}