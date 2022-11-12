console.log("Person1: enters theatre");
console.log("Person2: enters theatre");

const preMovie = async () => {
    // tickets promise
    let wifeGetTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("tickets");
        }, 3000);
    });

    let tickets = await wifeGetTickets;

    console.log("Wife: i have the tickets");
    console.log("husband: let's go in");
    console.log("Wife: wait i need popcorn");

    // popcorn promise
    let promiseToBuyPopcorn = new Promise((resolve, reject) => {
        resolve("popcorn");
    });

    let popcorn = await promiseToBuyPopcorn;

    console.log("husband: i got " + popcorn);
    console.log("wife: We should go in");
    console.log("Wife: i need butter for my popcorn");

    // butter promise
    let butterPromise = new Promise((resolve, reject) => {
        resolve("Butter");
    });

    let butter = await butterPromise;

    console.log("husband: i got some " + butter + " on popcorn");
    console.log("husband: Anything else baby?");
    console.log("Wife: No, let's go we're getting late");
    console.log("husband: thanks for reminding *grins*");
    console.log("wife: oh wait! we also need cold drink")
    console.log("husband: huh fine")

    // cold drink promise
    const coldDrinkPromise = new Promise((resolve, reject) => {
        resolve("Get cold drinks")
    })

    let drinks = await coldDrinkPromise;

    console.log("husband: That's enough now go inside theatre")
    console.log("wife: ok honey let's go")


    return tickets;
};


// promise all
const preMovie2 = async () => {

    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
      setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn =  new Promise((resolve, reject) => {
          setTimeout(() => resolve('popcorn'), 3000);
    });
    
    const getCandy =  new Promise((resolve, reject) => {
          setTimeout(() => resolve('candy'), 3000);
    });
    
     const getCoke =  new Promise((resolve, reject) => {
          setTimeout(() => resolve('coke'), 3000);
    });
  
    let ticket = await person3PromiseToShowTicketWhenWifeArrives;
    
      let [ popcorn, candy, coke ] =
      await Promise.all([ getPopcorn, getCandy, getCoke  ]);
  
      console.log(`got ${popcorn}, ${candy}, ${coke}`);
  
    
    return ticket;
    
  };




preMovie2()
    .then((t) => console.log(`Person3: shows ${t}`))
    .catch((err) => console.log(err));

console.log("Person4: enters theatre");
console.log("Person5: enters theatre");