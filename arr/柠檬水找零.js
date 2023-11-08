class EventBus {
  constructor() {
    this.eventMap = {};
  }
  on(key, cb) {
    if (!this.eventMap[key]) {
      this.eventMap[key] = [];
    }

    let isSamecb = false;

    for (let i = 0; i < this.eventMap[key]; i++) {
      if (cb == this.eventMap[key][i]) {
        isSamecb = true;
        break;
      }
    }
    if (!isSamecb) {
      this.eventMap[key].push(cb);
    }
  }
  off(key, cb) {
    if (cb == undefined) {
      this.eventMap[key] = [];
    } else {
      if (Array.isArray(this.eventMap[key])) {
        this.eventMap[key] = this.eventMap[key].filter((fn) => fn !== cb);
      }
    }
  }
  emit(key, ...arg) {
    if (Array.isArray(this.eventMap[key])) {
      this.eventMap[key].forEach((cb) => {
        cb(...arg);
      });
    }
  }
}

const eventBus = new EventBus();

function handleSleep1() {
  console.log("sleep1");
}

function handleSleep2() {
  console.log("sleep2");
}

function handleSleep3() {
  console.log("sleep3");
}

// 一堆监听
eventBus.on("sleep", handleSleep1);
eventBus.on("sleep", handleSleep2);
eventBus.on("sleep", handleSleep1);
eventBus.on("sleep", handleSleep3);
// 取消一个
eventBus.off("sleep", handleSleep3);
// 触发
eventBus.emit("sleep");

// 预期正确输出是（重复监听不生效、按监听顺序执行、取消的不生效）
// sleep1
// sleep2

// 全部取消
eventBus.off("sleep");
// 触发
eventBus.emit("sleep");
// 预期的正确输出是：没有输出
