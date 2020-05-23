import { FormField } from '../formField/form-field';
export interface ConfigProps {
    camera: boolean;
    formFields: Array<FormField>;
    ndaDoc: string;
    logoUrl: string;
}
export class Config {
    private camera: boolean;
    private formFields: Array<FormField>;
    private ndaDoc: string;
    private logoUrl: string;

    constructor() {

    }

    public getCamera(): boolean {
        return this.camera;
    }

    public setCamera(camera: any): void {
        this.camera = camera;
    }

    public getFormFields(): Array<FormField> {
        return this.formFields;
    }

    public setFormFields(formFields: Array<FormField>): void {
        this.formFields = formFields;
    }

    public getNdaDoc(): string {
        return this.ndaDoc;
    }

    public setNdaDoc(ndaDoc: string): void {
        this.ndaDoc = ndaDoc;
    }

    public getLogoUrl(): string {
        return this.logoUrl;
    }

    public setLogoUrl(logoUrl: string): void {
        this.logoUrl = logoUrl;
    }

}