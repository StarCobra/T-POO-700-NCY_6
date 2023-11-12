import { defineStore } from 'pinia';
import { getClocks } from '@/services/ClockManager';
import { getWorkingTimes } from '@/services/WorkingTimeManager';
import { UserData } from '@/class/UserData';
import { getAllUsers } from '@/services/UserManager';
import type { User } from '@/class/User';
import { Clock } from '@/class/Clock';
import type { WorkingTime } from '@/class/WorkingTime';
import dayjs from 'dayjs';

type ChartData = {
  labels: string[];
  datasets: {
    type: string;
    label: string;
    backgroundColor: string;
    data: number[];
    fill: boolean;
    tension: number;
  }[];
};

export const useEmployeStore = defineStore({
  id: 'employeStore',
  state: () => ({
    chartData: null as null | ChartData,
    isLoaded: false
  }),
  actions: {
    fetchData: async function () {
      try {
        const fetchedUsers: User[] = (await getAllUsers()) as User[];
        const dataToAdd = {
          nbEmployee: [0, 0, 0, 0, 0, 0]
        };

        const currentDate = dayjs();

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

              // Vérification si l'utilisateur a badgé
              userData?.clocks?.forEach((clock: Clock) => {
                if (clock?.status === true) {
                  const clockDate = dayjs(clock?.time);
                  const daysDifference = currentDate.diff(clockDate, 'days');

                  if (daysDifference >= 0 && daysDifference < 6) {
                    dataToAdd.nbEmployee[daysDifference] += 1;
                  }
                }
              });
            })
        );

        this.chartData = {
          labels: ['4 days ago', '3 days ago', '2 days ago', 'Yesterday', 'Today', 'Tomorrow'],
          datasets: [
            {
              type: 'line',
              label: 'Number of employee',
              backgroundColor: '#10d97c',
              data: dataToAdd?.nbEmployee,
              fill: true,
              tension: 0.4
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
