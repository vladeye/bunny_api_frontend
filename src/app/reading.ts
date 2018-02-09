export class Reading {

    id: number;
    script: string;
    reads: any[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
