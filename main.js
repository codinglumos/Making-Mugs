const clay = [ "Clay", "Clay", "Clay", "Clay" ]
const toFireInKiln = []

for (let i=0; i < clay.length; i++) {
   const mug = `${clay[i]} coffee mug`
   toFireInKiln.push(mug)
}

console.log(toFireInKiln)

//each clay above is an integer starting at 0 and going up
//i++ means it will continue to add one to the integer value for each item in the array
//then you call the for statement saying for every integer (clay) add coffee mug and then put them in the Kiln
//then you console.log the kiln to inact what you have created