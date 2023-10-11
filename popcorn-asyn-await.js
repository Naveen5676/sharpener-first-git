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
    console.log(`wife : i have ${ticks}`);
    console.log('husband : we should go in ');
    console.log('wife  :no i am hungry  ');

    let pops = await getpopcorn;
    console.log(`husband : i got ${pops}`);
    console.log('husband : we should go in ');
    console.log('wife  : i  need butter in my popcorn');

    let butter = await addbutter;
    console.log(`husband : i got some ${butter} on popcorn`);
    
    let cold = await addcolddrinks;
    console.log(`husband : i got ${cold}`);

    return ticks;
}

premovie().then((m)=> console.log(m));