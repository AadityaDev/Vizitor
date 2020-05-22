export interface CheckinProps {
    token: string;
    hostEmail: string;
    hostMobile: string;
    checkInTime: string;
    empId: string;
    image: string;
    fields: Array<any>;
    ndaSigned: boolean;
}
export class Checkin {
    private token: string;
    private hostEmail: string;
    private hostMobile: string;
    private checkInTime: string;
    private empId: string;
    private image: string;
    private fields: Array<any>;
    private ndaSigned: boolean;

    constructor() {

    }

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string): void {
        this.token = token;
    }

    public getHostEmail(): string {
        return this.hostEmail;
    }

    public setHostEmail(hostEmail: string): void {
        this.hostEmail = hostEmail;
    }

    public getHostMobile(): string {
        return this.hostMobile;
    }

    public setHostMobile(hostMobile: string): void {
        this.hostMobile = hostMobile;
    }

    public getCheckInTime(): string {
        return this.checkInTime;
    }

    public setCheckInTime(checkInTime: string): void {
        this.checkInTime = checkInTime;
    }

    public getEmpId(): string {
        return this.empId;
    }

    public setEmpId(empId: string): void {
        this.empId = empId;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public getFields(): Array<any> {
        return this.fields;
    }

    public setFields(fields: Array<any>): void {
        this.fields = fields;
    }

    public getNdaSigned(): boolean {
        return this.ndaSigned;
    }

    public setNdaSigned(ndaSigned: boolean): void {
        this.ndaSigned = ndaSigned;
    }

}
