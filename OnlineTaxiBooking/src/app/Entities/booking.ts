import { Time } from '@angular/common';

export interface Booking {
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
