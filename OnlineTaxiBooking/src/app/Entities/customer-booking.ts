import { Time } from '../../../node_modules/@angular/common';

export interface CustomerBooking {
    CustomerID:number,
    CustomerPassword:string,
    CustomerName:string,
    MobileNumber:string,
    Email:string,
    BookingID: number,
    FromDate: Date,
    ToDate: Date,
    BookTime: Time,
    DropTime: Time,
    PickupPoint: string,
    DropPoint: string,
    Feedback: string,
    Fare: number,
    employeeId: number,
    customerId: number
}
