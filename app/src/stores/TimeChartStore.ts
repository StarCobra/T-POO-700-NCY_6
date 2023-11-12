import { defineStore } from 'pinia';
import { getAllUsers } from '@/services/UserManager';
import { getClocks } from '@/services/ClockManager';
import { getWorkingTimes } from '@/services/WorkingTimeManager';
import { User } from '@/class/User';
import { Clock } from '@/class/Clock';
import { WorkingTime } from '@/class/WorkingTime';
import { UserData } from '@/class/UserData';
import { setClockPacks } from '@/function/getTimeWorking';

export const useTimeStore = defineStore({
  id: 'timeStore',
  state: ()=> ({
    // Initialisez cet état avec les données du graphique
    datasets: [
      {
        type: 'bar',
        label: 'Day Hours',
        data: [],
      },
      {
        type: 'bar',
        label: 'Night Hours',
        data: [],
      },
    ],
  }),
  actions: {
    fetchData: async function () {
      try {
        const fetchedUsers: User[] = (await getAllUsers()) as User[];
        const userDatas: UserData[] = [];
        const dataToAdd = {
            dayData: [],
            nightData: []
        };

        fetchedUsers.map(async (fetchedUser: User) => {
          /** Récupération des Clocks et WorkingTimes par User **/
          const [userClock, userWorkingTime] = await Promise.all([
            getClocks(new Clock(undefined, fetchedUser?.id)),
            getWorkingTimes(fetchedUser),
          ]);

          /** Création d'un tableau d'object contenant toutes les données Clocks, WorkingTimes et Users **/
          const userData = new UserData(fetchedUser, userClock as Clock[], userWorkingTime as WorkingTime[]);
          userDatas.push(userData);

          /** Création d'un tableau d'object contenant les heures de pointages ainsi que le temps de travail de jour / nuit **/
          const pairClocks = setClockPacks(userData?.clocks);
          pairClocks.map((clockPack) => {
            dataToAdd.dayData.push(clockPack?.day);
            dataToAdd.nightData.push(clockPack?.night);
          });
        });

        /** Données nécessaire pour le graphique **/
        this.datasets[0].data = dataToAdd?.dayData;
        this.datasets[1].data = dataToAdd?.nightData;
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    },
  },
});
