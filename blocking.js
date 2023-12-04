//blocking js

// for(let i=0;i<10000000000;i++){
//     // i am not doing nothing,just consuming TimeRanges.
// }
// console.log('Task to be performed after 8 sec');
// console.log('I do not  have to wait for this long loop to finish :');

//non blocking js
// setTimeout(()=>{
//     console.log('Task to be performed after 8 sec');

// },8000);
// console.log('I do not  have to wait for this long loop to finish :');


// case3. blocking due to infinite while loop
// console.log("Start");
// setTimeout(()=>{
//     console.log("delayed");
// },0);
// while(true){
//     console.log('log inside while loop');
// }
// console.log('End');

//case4. non-blocking
// const compute=()=>{
//     let sum=0;
//     for(let i=1;i<=100000000;i++){
//         sum+=i;
//     }
//     console.log(sum);
// }
// setTimeout(compute,0);
// console.log("Done");

//case5 blocking code

const idle=(ms)=>{
    let start=new Date().getTime();
    while(new Date().getTime()<start+ms);
};
console.log('start');
idle(5000);
console.log("End");