import { defineStore } from 'pinia';
import { getAllUsers } from '@/services/UserManager';
import { getClocks } from '@/services/ClockManager';
import { getWorkingTimes } from '@/services/WorkingTimeManager';
import { User } from '@/class/User';
import { Clock } from '@/class/Clock';
import { WorkingTime } from '@/class/WorkingTime';
import { UserData } from '@/class/UserData';
import { setClockPacks } from '@/function/getTimeWorking';
import dayjs from 'dayjs';

type ChartData = {
  labels: string[];
  datasets: {
    type: string;
    label: string;
    backgroundColor: string;
    data: number[];
  }[];
};

type DataToAdd = {
  dayData: number[];
  nightData: number[];
  labelDay: string[];
};

export const useTimeStore = defineStore({
  id: 'timeStore',
  state: () => ({
    chartData: null as null | ChartData,
    isLoaded: false
  }),
  actions: {
    fetchData: async function () {
      try {
        const fetchedUsers: User[] = (await getAllUsers()) as User[];
        const userDatas: UserData[] = [];
        const dataToAdd: DataToAdd = {
          dayData: [],
          nightData: [],
          labelDay: []
        };

        await Promise.all(
          fetchedUsers.map(async (fetchedUser: User) => {
            const [userClock, userWorkingTime] = await Promise.all([
              getClocks(new Clock(undefined, fetchedUser?.id)),
              getWorkingTimes(fetchedUser)
            ]);

            const userData = new UserData(
              fetchedUser,
              userClock as Clock[],
              userWorkingTime as WorkingTime[]
            );
            userDatas.push(userData);

            const pairClocks = setClockPacks(userData?.clocks);
            pairClocks.forEach((clockPack) => {
              dataToAdd.dayData.push(clockPack?.day as number);
              dataToAdd.nightData.push(clockPack?.night as number);
              dataToAdd.labelDay.push(dayjs(clockPack?.start).format('dddd'));
            });
          })
        );

        this.chartData = {
          labels: dataToAdd?.labelDay,
          datasets: [
            {
              type: 'bar',
              label: 'Day Hours',
              backgroundColor: '#f87979',
              data: dataToAdd?.dayData
            },
            {
              type: 'bar',
              label: 'Night Hours',
              backgroundColor: '#0096ff',
              data: dataToAdd?.nightData
            }
          ]
        };

        this.isLoaded = true;
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    }
  }
});
