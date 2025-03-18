function solution(bridge_length, weight, truck_weights) {
    let time = 0; // 경과 시간
    let bridge = []; // 현재 다리 위에 있는 트럭을 관리하는 큐
    let bridgeWeight = 0; // 현재 다리 위에 있는 트럭들의 총 무게

    while (truck_weights.length > 0 || bridge.length > 0) {
        time++;

        if (bridge.length > 0 && bridge[0].endTime === time) {
            let exitingTruck = bridge.shift(); 
            bridgeWeight -= exitingTruck.weight; 
        }

        if (truck_weights.length > 0) {
            let nextTruckWeight = truck_weights[0];
            if (bridgeWeight + nextTruckWeight <= weight) {
                let enteringTruck = truck_weights.shift();
                bridge.push({ weight: enteringTruck, endTime: time + bridge_length });
                bridgeWeight += enteringTruck; 
            }
        }
    }

    return time;
}
