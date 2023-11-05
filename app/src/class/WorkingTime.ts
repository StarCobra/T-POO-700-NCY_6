export class WorkingTime {
    id:string;
    userId: string;
    start: string;
    end: string;

    constructor(
        id?:string,
        userId?: string,
        start?: string,
        end?: string,
    ) {
        this.id = id ?? '';
        this.userId = userId ?? '';
        this.start = start ?? '';
        this.end = end ?? '';
    }
}