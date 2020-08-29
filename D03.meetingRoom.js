/**
    * 会议室, 输入是一个数组, 所有会议的开始和结束时间. 输出一共需要多少个会议室
    * @param meetings: 二维数组, 例 [[10, 20], [20, 30]], 
    * @return int: 需要的会议室的个数, 例 1
    * 另一个测试用例: [[10,20], [19,30]] => 2
    */

let minRequiredMeetingsRooms = meetings => {
    if (meetings == null || meetings.length == 0) {
        return 0;
    }

    let n = meetings.length;
    let start = []
    let end = []

    for (let i = 0; i < n; ++i) {
        start[i] = meetings[i][0];
        end[i] = meetings[i][1];
    }

    start.sort((a, b) => a - b)
    end.sort((a, b) => a - b)
    let s = 0, e = 0

    console.log('stsrt', start)
    console.log('end', end)
    for (; s < n; s++) {


        console.log(s,end[e], start[s])
        if (end[e] <= start[s]) {
            e++;
        }
    }

    return s - e;
}

console.log(minRequiredMeetingsRooms([[10, 20], [20, 30]]))
// console.log(minRequiredMeetingsRooms([[10, 20], [19, 30]]))