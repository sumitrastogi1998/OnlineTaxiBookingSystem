import { Time } from '../../../node_modules/@angular/common';

export interface EmployeeRoster {
    RosterID: number
    FromDate: Date
    ToDate: Date
    InTime: string
    OutTime: string
    employeeId: number
}
