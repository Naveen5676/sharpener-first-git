console.log('person1: show ticket');
console.log('person2: show ticket');

const promiseWifeBringsTickets = new Promise ((resolve , reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
})

const getpopcorn = promiseWifeBringsTickets.then((t)=>{
    console.log('wife  :i have tickets');
    console.log('husband : we should go in ');
    console.log('wife  :no i am hungry  ');
    return new Promise((resolve , reject)=> resolve(`${t} popcorn`))
});

const getbutter = getpopcorn.then((t)=>{
    console.log('husband : i got popcorn');
    console.log('husband : we should go in ');
    console.log('wife  : i  need butter in my popcorn');
    return new Promise((resolve , reject)=> resolve(`${t} butter`))
})


const getcolddrinks = getbutter.then((t)=>{
    console.log('husband : i got drinks');
    return new Promise((resolve , reject)=> resolve(`${t} cold-drinks`))

})
getcolddrinks.then((t)=>console.log(t));


console.log('person4: show ticket');
console.log('person5: show ticket');
