import type {Clock} from "@/class/Clock";

export function getTimeWorking(startDate:string,endDate:string):string{
    return new Date(new Date(endDate).getTime() - new Date(startDate).getTime()).toString();
}

export function getClockOnSameDay(clocks:Clock[]){
 clocks.map((clock) => {
    console.log(clock);
 })
};