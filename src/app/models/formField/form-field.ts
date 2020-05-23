export interface FormFieldParams {
    display: boolean;
    displayName: string;
    fieldName: string;
    fieldPosition: number;
    fieldType: string;
    fieldValue: any;
    isRequiredField: boolean;
    preFill: Array<any>;
}
export class FormField {
    private display: boolean;
    private displayName: string;
    private fieldName: string;
    private fieldPosition: number;
    private fieldType: string;
    private fieldValue: any;
    private isRequiredField: boolean;
    private preFill: Array<any>;

    public getDisplay(): boolean {
        return this.display;
    }

    public setDisplay(display: boolean): void {
        this.display = display;
    }

    public getDisplayName(): string {
        return this.displayName;
    }

    public setDisplayName(displayName: string): void {
        this.displayName = displayName ;
    }

    public getFieldName(): string {
        return this.fieldName;
    }

    public setFieldName(fieldName: string): void {
        this.fieldName =  fieldName;
    }

    public getFieldPosition(): number {
        return this.fieldPosition;
    }

    public setFieldPosition(fieldPosition: number): void {
        this.fieldPosition =  fieldPosition;
    }

    public getFieldType (): string {
        return this.fieldType;
    }

    public setFieldType(fieldType: string): void {
        this.fieldType =  fieldType;
    }

    public getFieldValue(): any {
        return this.fieldValue;
    }

    public setFieldValue(fieldValue: any): void {
        this.fieldValue = fieldValue;
    }

    public getIsRequiredField(): boolean {
        return this.isRequiredField;
    }

    public setIsRequiredField(isRequiredField: boolean): void {
        this.isRequiredField = isRequiredField;
    }

    public getPreFill(): Array<any> {
        return this.preFill;
    }

    public setPreFill(preFill: Array<any>): void {
        this.preFill = preFill;
    }

}
