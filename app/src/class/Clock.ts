export class Clock {
    id: string;
    userId: string;
    status: boolean;
    time: string;

    constructor(
        id?: string,
        userId?:string,
        status?: boolean,
        time?: string,
    ) {
        this.id = id ?? '';
        this.userId = userId ?? '';
        this.status = status ?? false;
        this.time = time ?? '';
    }
}