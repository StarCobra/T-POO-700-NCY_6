import { User } from '@/class/User';
import { Clock } from '@/class/Clock';
import { WorkingTime } from '@/class/WorkingTime';
export class UserData {
  user: User;
  clocks: Clock[];
  workingTime: WorkingTime[];

  constructor(user: User, clocks: Clock[], workingTime: WorkingTime[]) {
    this.user = user;
    this.clocks = clocks;
    this.workingTime = workingTime;
  }
}
