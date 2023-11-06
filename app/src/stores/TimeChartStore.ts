import { defineStore } from 'pinia';
import {getAllUsers,getUser,createUser,updateUser,removeUser} from '@/services/UserManager';
import {getClocks,postClock} from '@/services/ClockManager';
import {getWorkingTimes,createWorkingTime,updateWorkingTime,removeWorkingTime} from "@/services/WorkingTimeManager";
import {User} from "@/class/User";
import {Clock} from "@/class/Clock";
import {WorkingTime} from "@/class/WorkingTime";
import {UserData} from "@/class/UserData";
import {getTimeWorking,getClockOnSameDay} from "@/function/getTimeWorking";

export const useTimeStore = defineStore({
    id: 'chart',
    state: () => ({
        chartData: [] as UserData[], // Initialisez cet état avec les données du graphique
    }),
    actions: {
        // Créez des actions pour récupérer les données réelles du graphique
        fetchData: async function () {

            try {
                const fetchedUsers:User[] = await getAllUsers() as User[];

                const usersPromises = fetchedUsers.map(async (fetchedUser:User) => {
                    const [userClock, userWorkingTime] = await Promise.all([
                        getClocks(new Clock(undefined, fetchedUser.id)),
                        getWorkingTimes(fetchedUser),
                    ]);

                    return new UserData(
                        fetchedUser,
                        userClock as Clock[],
                        userWorkingTime as WorkingTime[],
                    );
                });

                const userDatas: UserData[] = await Promise.all(usersPromises) as UserData[];

                console.log(userDatas);

                console.log(getTimeWorking(userDatas[0].clocks[0].time,userDatas[0].clocks[1].time));
                getClockOnSameDay(userDatas[0].clocks);


                this.chartData =  userDatas as UserData[];

            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        },
    },
});
