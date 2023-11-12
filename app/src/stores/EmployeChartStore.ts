import { defineStore } from 'pinia';
import {getClocks} from "@/services/ClockManager";
import {getWorkingTimes} from "@/services/WorkingTimeManager";
import {UserData} from "@/class/UserData";
import {getAllUsers} from "@/services/UserManager";
import type {User} from "@/class/User";
import {Clock} from "@/class/Clock";
import type {WorkingTime} from "@/class/WorkingTime";
import {setClockPacks} from "@/function/getTimeWorking";
import dayjs from "dayjs";

export const useEmployeStore = defineStore({
    id: 'employeStore',
    state: ()=> ({
        chartData: null,
        isLoaded: false,
    }),
    actions: {
        fetchData: async function () {
            try {
                const fetchedUsers: User[] = (await getAllUsers()) as User[];
                const userDatas: UserData[] = [];
                const dataToAdd = {
                    nbEmployee: [0,0,0,0,0],
                };

                await Promise.all(
                    fetchedUsers.map(async (fetchedUser: User) => {
                        const [userClock, userWorkingTime] = await Promise.all([
                            getClocks(new Clock(undefined, fetchedUser?.id)),
                            getWorkingTimes(fetchedUser),
                        ]);

                        const userData = new UserData(
                            fetchedUser,
                            userClock as Clock[],
                            userWorkingTime as WorkingTime[]
                        );
                        userDatas.push(userData);

                        // Vérification si l'utilisateur a badgé
                        userData?.clocks?.forEach((clock: Clock) => {
                            if (clock?.status === true) {
                                const currentDate = dayjs();
                                userData?.clocks?.forEach((clock: Clock) => {
                                    if (clock?.status === true) {
                                        const clockDate = dayjs(clock?.time);

                                        if (clockDate.isSame(currentDate.subtract(3, 'day'), 'day')) { // Il y a 3 jours
                                            dataToAdd.nbEmployee[0]++;
                                        } else if (clockDate.isSame(currentDate.subtract(2, 'day'), 'day')) { // Avant-hier
                                            dataToAdd.nbEmployee[1]++;
                                        } else if (clockDate.isSame(currentDate.subtract(1, 'day'), 'day')) { // Hier
                                            dataToAdd.nbEmployee[2]++;
                                        } else if (clockDate.isSame(currentDate, 'day')) { // Aujourd'hui
                                            dataToAdd.nbEmployee[3]++;
                                        }
                                    }
                                });

                            }
                        });


                        this.chartData = {
                            labels: ['3 days ago', '2 days ago', 'Yesterday', 'Today', 'Tomorrow', '2 days later'],
                            datasets: [
                                {
                                    type: 'line',
                                    label: 'Number of employee',
                                    backgroundColor: "#10d97c",
                                    data: dataToAdd?.nbEmployee,
                                    fill: true,
                                    tension: 0.4
                                }
                            ],
                        };

                        this.isLoaded = true;
                    })
                );

            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        },
    },
});