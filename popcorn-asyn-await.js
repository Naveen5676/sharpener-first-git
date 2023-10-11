console.log('person1: show ticket');
console.log('person2: show ticket');

const premovie = async () =>{
    const promiseWifeBringsTickets = new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    });

    const getpopcorn = new Promise((resolve, reject)=> resolve('popcorn'));
    const addbutter  = new Promise((resolve , reject)=> resolve('butter'));
    const addcolddrinks = new Promise((resolve, reject)=> resolve('cold-drink'));

    let ticks = await promiseWifeBringsTickets;
    
    let [popcorn , butter , colddrink] = await Promise.all([getpopcorn , addbutter , addcolddrinks]);
    console.log(`${popcorn} , ${butter} , ${colddrink}`)

    return ticks;
}

premovie().then((m)=> console.log(m));


console.log('person4: show ticket');
console.log('person5: show ticket');