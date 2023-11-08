interface Task {
  (): Promise<number>;
}

let flag = false;

const sleep = (time: number, isTask = false): Promise<number> =>
  new Promise((res) => {
    setTimeout(() => {
      if (isTask) {
        console.error("i am a task ", time, "ready wake up!");
      }
      res(time);
    }, time);
  });

class TaskScheduler {
  public isCalling = false;
  public tryRunId = "";
  public callingList: number[] = [];

  call(method: string, id?: number, msg?: string) {}

  public taskQueueList: Task[] = [];

  addCalling(id: number) {
    this.callingList.push(id);
  }

  removeCalling(id: number) {
    this.callingList = this.callingList.filter((v) => v !== id);
  }

  addTask(task: Task) {
    this.taskQueueList.push(task);
  }

  removeTask(task: Task) {
    this.taskQueueList = this.taskQueueList.filter((v) => v !== task);
  }

  initTak() {
    console.log("initTak");

    [
      111, 150, 222, 250, 333, 350, 444, 450, 550, 555, 600, 666, 700, 777, 888,
      999,
    ].forEach((v) => {
      this.addTask(async () => {
        if (v === 333) {
          this.call("asyncSay", 50, "中途插入高优先级");
          this.call("computed", 212123, "高优先级 同步");

          this.call("asyncSleep", 99, "中途插入高优先级");
          this.call("computed", 89212, "高优先级 同步");
        }

        if (v === 777) {
          this.call("asyncSay", 40, "中途插入高优先级");
          this.call("computed", 562123, "高优先级 同步");

          this.call("asyncSleep", 57, "中途插入高优先级");
          this.call("computed", 820212, "高优先级 同步");
        }
        if (v === 450) {
          this.call("asyncLog", 54, "中途插入高优先级");
          this.call("asyncLog", 53, "中途插入高优先级");
          this.call("asyncLog", 52, "中途插入高优先级");
          this.call("computed", 312341, "高优先级 同步");
        }

        return await sleep(v, true);
      });
    });
  }
  async tryRun(tryRunId: string) {
    await Promise.resolve();

    let times = 0;

    if (this.isCalling || this.callingList.length) {
      if (this.isCalling) {
        console.log("this tryRunId is :", this.tryRunId);
        console.log(" isCalling is tryRunning  return");
      }
      if (this.callingList.length) {
        console.log("callingList", this.callingList, "return");
      }
      return;
    }

    this.tryRunId = tryRunId;
    this.isCalling = true;

    console.error(
      "try run taskQueueList.  this.callingList is:",
      this.callingList
    );
    for await (const task of this.taskQueueList) {
      // if (times == 3) {
      //   setTimeout(() => {
      //     console.log("执行三次打断");
      //     this.tryRun();
      //   }, 1000);
      //   break;
      // }
      console.log("execute  task".padStart(80, "-"));
      await task();
      console.log(`task end `.padStart(80, "-"));
      times++;
      this.removeTask(task);
    }
    this.isCalling = false;

    if (!flag) {
      this.initTak();
      flag = true;
      this.tryRun(88);
    }
  }
}

class Page extends TaskScheduler {
  constructor() {
    super();
    this.initTak();
  }

  async asyncSay(id, msg) {
    await sleep(id);
    console.log("--", "i am  asyncSay" + msg, id);
  }
  async asyncEat(id, msg) {
    await sleep(id);
    console.log("--", "i am  asyncEat" + msg, id);
  }

  async asyncSleep(id, msg) {
    await sleep(id);
    console.log("--", "i am  asyncSleep" + msg, id);
  }
  async asyncLog(id, msg) {
    await sleep(id);
    console.log("--", "i am  asyncLog" + msg, id);
  }

  computed(id, msg) {
    for (let i = 0; i <= 100; i++) {
      // console.log(i)
    }
    console.log("--", "computed over " + msg, id);
  }
  call(method: string, id?: number, msg?: string) {
    console.log(
      `    callMethod 【${method} :${id}】---------------------------------- `.padStart(
        80,
        " "
      )
    );
    if (id && id < 1000) {
      this.addCalling(id);
    }

    (async () => {
      const res = this[method](id, msg);

      if (res instanceof Promise) {
        await res;
        if (id) {
          this.removeCalling(id);
        }
        if (!this.callingList.length) {
          console.log("---tryRun---".padStart(100, "--"), id);
          this.tryRun(id);
        }
      }
    })();
  }
}

const page = new Page();
console.clear();

page.call("computed", 21213, "高优先级同步");
page.call("asyncSleep", 1, "高优先级");
page.call("asyncLog", 2, "高优先级");
page.call("computed", 12313, "高优先级同步");
page.call("asyncSay", 4, "高优先级");
page.call("asyncLog", 5, "高优先级");
page.call("computed", 1231, "高优先级同步");
page.call("asyncSay", 7, "高优先级");

page.call("computed", 78123, "高优先级同步");
page.call("asyncLog", 9, "高优先级");

Promise.resolve().then(() => {
  page.call("asyncLog", 8, "高优先级");
});

console.log("main end");
