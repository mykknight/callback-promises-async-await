console.log('person1: show ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiswifetkt = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket match'),3000);
    });

    let ticket = await promiswifetkt;
    console.log('wife: i have tkts');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    const getpopcorn = new Promise((resolve,reject) => resolve('popcorn'));

    const adbutter = new Promise((resolve,reject) => resolve('butter'));

    const getcoldrink = new Promise((resolve,reject) => resolve('coldrink is ready'));


    let popcorn =  await getpopcorn;
    console.log('here is the popcorn');
    console.log('i need butter');

    let butter = await adbutter;
    console.log(`${butter} added`);

    let cdks = await getcoldrink;
    console.log(`${cdks} done`); 


    return ticket;
}

preMovie().then((m) => console.log(m));

console.log('person4: show ticket');
console.log('person3: shows ticket');
