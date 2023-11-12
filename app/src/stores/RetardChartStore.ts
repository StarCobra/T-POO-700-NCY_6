import { defineStore } from 'pinia';
import { getAllUsers } from '@/services/UserManager';
import { getClocks } from '@/services/ClockManager';
import { getWorkingTimes } from '@/services/WorkingTimeManager';
import { User } from '@/class/User';
import { Clock } from '@/class/Clock';
import { WorkingTime } from '@/class/WorkingTime';
import { UserData } from '@/class/UserData';

export const useRetardStore = defineStore({
  id: 'retardStore',
  state: () => ({
    chartData: null,
    isLoaded: false,
  }),
  actions: {
    fetchData: async function () {
      try {
        const fetchedUsers: User[] = (await getAllUsers()) as User[];
        const userDatas: UserData[] = [];
        let dataToAdd = {
          absent: 0,
          late: 0,
          present: 0,
          early: 0,
        };

        await Promise.all(fetchedUsers.map(async (fetchedUser: User) => {
          const [userClock, userWorkingTime] = await Promise.all([
            getClocks(new Clock(undefined, fetchedUser?.id)),
            getWorkingTimes(fetchedUser),
          ]);

          const userData = new UserData(fetchedUser, userClock as Clock[], userWorkingTime as WorkingTime[]);
          userDatas.push(userData);

          if (userData?.workingTime?.length > 0) {
            for (let i = 0, y = 0 ; i < userData?.workingTime?.length; i++, y+=2) {
              const workingTimeStart = new Date(userData?.workingTime?.[i]?.start).getTime();
              const clockTimeStar = new Date(userData?.clocks?.[y]?.time).getTime();

              if (workingTimeStart <= new Date().getTime()) {
                if (clockTimeStar > workingTimeStart + 5 * 60 * 1000) {
                  dataToAdd.late++;
                } else if (clockTimeStar < workingTimeStart - 5 * 60 * 1000) {
                  dataToAdd.early++;
                } else if (workingTimeStart - 5 * 60 * 1000 <= clockTimeStar
                    && clockTimeStar <= workingTimeStart + 5 * 60 * 1000
                ) {
                  dataToAdd.present++;
                } else {
                  dataToAdd.absent++
                }
              }
            }
          }
        }));


        this.chartData = {
          labels: ["Absent", "Late", "Present", "Early"],
          datasets: [{
            label: 'Number of employees',
            data: [dataToAdd.absent, dataToAdd.late, dataToAdd.present, dataToAdd.early],
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            hoverOffset: 10
          }]
        };

        this.isLoaded = true;
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    },
  },
});
