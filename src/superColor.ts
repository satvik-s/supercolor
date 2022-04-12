export class SuperColor {
    private styles: string[];

    constructor() {
        this.styles = [];
    }

    public addStyle(styles: string[]): void {
        this.styles = this.styles.concat(styles);
    }

    public log(data: string): void {
        console.log('\u001B[' + this.styles.join(';') + 'm' + data);
    }

    public resetStyle(): void {
        this.styles = [];
    }

    public setStyle(styles: string[]): void {
        this.styles = styles;
    }
}
