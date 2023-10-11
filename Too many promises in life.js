const users = [{id:1 , lastactivitytime:null}]


const post = [{name : 'abc'}]


function updateLastUserActivityTime(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            users[0].lastactivitytime = new Date();
            console.log('before first post ', users[0].lastactivitytime)
            resolve();
        },1000)
    });
}

function createpost(newpost){
    return new  Promise((resolve , reject)=>{
        setTimeout(()=>{
            post.push(newpost)
            users[0].lastactivitytime = new Date();
            resolve();
        },10000)

    });
}

Promise.all([createpost({name: 'First Post '}), updateLastUserActivityTime()])
.then(()=>{
    console.log('after first post ' ,users[0].lastactivitytime);
})