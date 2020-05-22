export interface ConfigProps {
    camera: boolean;
    formFields: Array<any>;
    ndaDoc: string;
    logoUrl: string;
}
export class Config {
    private camera: boolean;
    private formFields: Array<any>;
    private ndaDoc: string;
    private logoUrl: string;

    constructor() {

    }

    getCamera(): boolean {
        return this.camera;
    }

    setCamera(camera: boolean): void {
        this.camera = camera;
    }

    getFormFields(): Array<any> {
        return this.formFields;
    }

    setFormFields(formFields: Array<any>): void {
        this.formFields = formFields;
    }

    getNdaDoc(): string {
        return this.ndaDoc;
    }

    setNdaDoc(ndaDoc: string): void {
        this.ndaDoc = ndaDoc;
    }

    getLogoUrl(): string {
        return this.logoUrl;
    }

    setLogoUrl(logoUrl: string): void {
        this.logoUrl = logoUrl; 
    }

}