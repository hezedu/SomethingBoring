enum Status {
  locked = 2,
  active = 1,
  arrived = 0
}

export interface StepItem {
  member?: number;
  money?: number;
  activeStartMember?: number;
  activeStartMoney?: number;
  activeEndMember?: number;
  activeEndMoney?: number;
  isStart?: boolean;
  status?: Status;
}
// -1 为不需要
const RAW_DATA: StepItem[] = [
  // 第一次未领取
  {
    money: 20,
    member: 0,
    activeStartMember: -1,
    activeStartMoney: -1,
    activeEndMoney: -1,
    activeEndMember: -1
  },
  // 阶段二
  {
    member: 3,
    money: 3,
    activeStartMember: -1,
    activeStartMoney: -1,
    activeEndMoney: -1,
    activeEndMember: 3
  },
  {
    money: 10,
    member: 6,
    activeStartMember: -1,
    activeStartMoney: -1,
    activeEndMoney: -1,
    activeEndMember: 9
  },
  {
    money: 15,
    member: 8,
    activeStartMember: -1,
    activeStartMoney: -1,
    activeEndMoney: -1,
    activeEndMember: 17
  },
  {
    money: 22,
    member: 11,
    activeStartMember: -1,
    activeStartMoney: -1,
    activeEndMoney: 50,
    activeEndMember: 28
  },
  // 阶段三
  {
    money: 45,
    member: 15,
    activeStartMember: 18,
    activeStartMoney: 51,
    activeEndMoney: -1,
    activeEndMember: 43
  },
  {
    money: 63,
    member: 20,
    activeStartMember: 18,
    activeStartMoney: 51,
    activeEndMoney: 170,
    activeEndMember: 64
  },
  {
    money: 120,
    member: 30,
    activeStartMember: 44,
    activeStartMoney: 171,
    activeEndMoney: -1,
    activeEndMember: 95
  },
  {
    money: 186,
    member: 42,
    activeStartMember: 44,
    activeStartMoney: 171,
    activeEndMoney: -1,
    activeEndMember: 138
  }
];


export function generateStepList(member: number, money: number) {
  const list: StepItem[] = [];
  let isStart = false, isEnd = false;
  RAW_DATA.forEach((v) => {
      const obj = {
        ...v
      };
      const isArrivedMember = member > obj.activeEndMember;
      const isArrivedMoney =  money > obj.activeEndMoney;
      if (!(isArrivedMember && isArrivedMoney)) {
        if (!isStart) {
          obj.isStart = true;
          isStart = true;
        }
        if (!isEnd) {
          if (member < obj.activeStartMember || money < obj.activeStartMoney) {
            isEnd = true;
          }
        }
      }
      if (isStart) {
        if (isEnd) {
          obj.status = Status.locked;
        } else {
          obj.status = Status.active;
        }
      } else {
        obj.status = Status.arrived;
      }

    list.push(obj);
  });
  return list;
}
