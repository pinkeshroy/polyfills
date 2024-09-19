// function myMap(arr, callback, thisArg) {
//     if(!arr|| !Array.isArray(arr)){
//         return new Error('not an array')
//     }
//     if (!callback || typeof callback !== 'function') {
//         return new Error(`${callback} is not function`)
//     }
//     const resultArr=[]
//     for (let i = 0; i < arr.length; i += 1){
//         const arrElem = callback(arr[i], i, arr);
//         resultArr.push(arrElem)
//     }
//     return resultArr
// }
// const callbackfun = (el, idx, arr)=> el**idx+arr.length

// const arr=[1,2,3,4,5]
// console.log(myMap(arr,callbackfun))

// function myFilter(arr, callback, thisArg) {
//     if(!arr|| !Array.isArray(arr)){
//         return new Error('not an array')
//     }
//     if (!callback || typeof callback !== 'function') {
//         return new Error(`${callback} is not function`)
//     }
//     const resultArr=[]
//     for (let i = 0; i < arr.length; i += 1){
//         const arrElem = callback(arr[i], 3, arr);
//         if(arrElem)
//         resultArr.push(arr[i])
//     }
//     return resultArr
// }
// const callbackfun = (el, cond_elem, arr) => {
//   return el > cond_elem;
// }
// console.log(myFilter([1, 9, 3, 4, 5],callbackfun))

// function myForEach(arr,callback) {
//     if(!arr|| !Array.isArray(arr)){
//         return new Error('not an array')
//     }
//     if (!callback || typeof callback !== 'function') {
//         return new Error(`${callback} is not function`)
//     }
//     let sum=0;
//     for (let i = 0; i < arr.length; i++)
//     {
//         callback(arr[i],i,arr)
//     }
// }
// const callbackfun = (ele, idx, arr) => {
//     console.log(ele**2)
// }
// myForEach([1,2,3,4,5],callbackfun)

function myReduce(arr, elem, idx, initValue, thisArg) {
    let accumulator, startIdx;
    if (initValue !== undefined) {
        if (!arr.length) return initValue
        accumulator = initValue;
        startIdx = 0;
    }
    if (initValue === undefined && !arr.length) return Error('Cannot run reduce withouut initVal')
    if (initValue === undefined && arr.length) {
        accumulator = arr[0]
        startIdx = 1;
    }
    for (let i = startIdx; i < arr.length; i++){
        accumulator = callBack(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

const callBack = (accumulator, ele, idx, array) => {
    accumulator += ele;
    return accumulator
}