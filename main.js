const parentElement = document.querySelector('.katas-list')

//KATA 1
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski
const kata1Heading = document.createElement('h3')
parentElement.append(kata1Heading)
kata1Heading.append('KATA 1')

let arr = [];

for (let counter = 1; counter <= 20; counter += 1) {
    arr.push(counter)
  }

  parentElement.append(arr)



//KATA 2
////cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata2Heading = document.createElement('h3')
parentElement.append(kata2Heading)
kata2Heading.append('KATA 2')

let arr1 = []

for (let counter = 2; counter <= 20; counter += 2) {
    arr1.push(counter)
  }

  parentElement.append(arr1)

  //KATA 3
  //cite: Scott Martin, Tammy Crittenden, Tony Lukowski

  const kata3Heading = document.createElement('h3')
  parentElement.append(kata3Heading)
  kata3Heading.append('KATA 3')
  
  let arr2 = []
  
  for (let counter = 1; counter <= 20; counter += 2) {
      arr2.push(counter)
    }
  
    parentElement.append(arr2)

//KATA 4
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata4Heading = document.createElement('h3')
  parentElement.append(kata4Heading)
  kata4Heading.append('KATA 4')
  
  let arr3 = []
  
  for (let counter = 5; counter <= 100; counter += 5) {
      arr3.push(counter)
    }
  
    parentElement.append(arr3)

//KATA 5
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata5Heading = document.createElement('h3')
  parentElement.append(kata5Heading)
  kata5Heading.append('KATA 5')
  
  let arr4 = []
  
  for (let counter = 1; counter <= 100; counter += 1) {
    const counter5IsPerfectSquare = Number.isInteger(Math.sqrt(counter))
    if (counter5IsPerfectSquare) {

        arr4.push(counter)
        }
    }
  
    parentElement.append(arr4)

//KATA 6
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski


const kata6Heading = document.createElement('h3')
parentElement.append(kata6Heading)
kata6Heading.append('KATA 6')

let arr5 = [];

for (let counter = 20; counter >= 1; counter -= 1) {
    arr5.push(counter)
  }

  parentElement.append(arr5)

//KATA 7
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata7Heading = document.createElement('h3')
parentElement.append(kata7Heading)
kata7Heading.append('KATA 7')

let arr6 = [];

for (let counter = 20; counter >= 2; counter -= 2) {
    arr6.push(counter)
  }

  parentElement.append(arr6)


//KATA 8
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata8Heading = document.createElement('h3')
parentElement.append(kata8Heading)
kata8Heading.append('KATA 8')

let arr7 = [];

for (let counter = 19; counter >= 1; counter -= 2) {
    arr7.push(counter)
  }

  parentElement.append(arr7)

  //KATA 9
  //cite: Scott Martin, Tammy Crittenden, Tony Lukowski


const kata9Heading = document.createElement('h3')
  parentElement.append(kata9Heading)
  kata9Heading.append('KATA 9')
  
  let arr8 = []
  
  for (let counter = 100; counter >= 5; counter -= 5) {
      arr8.push(counter)
    }
  
    parentElement.append(arr8)

//KATA 10
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski


const kata10Heading = document.createElement('h3')
parentElement.append(kata10Heading)
kata10Heading.append('KATA 10')

let arr9 = [];

for (let counter = 100; counter >= 1; counter -= 1) {
    const counter10IsPerfectSquare = Number.isInteger(Math.sqrt(counter))
    if (counter10IsPerfectSquare) {

    arr9.push(counter)
    }
  }  
  parentElement.append(arr9)


//KATA 11
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata11Heading = document.createElement('h3')
parentElement.append(kata11Heading)
kata11Heading.append('KATA 11')

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

parentElement.append(sampleArray)



// KATA 12
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata12Heading = document.createElement('h3')
parentElement.append(kata12Heading)
kata12Heading.append('KATA 12')


let arr12 = []

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            arr12.push(sampleArray[i])
        }
    }
    parentElement.append(arr12);

//KATA 13
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata13Heading = document.createElement('h3')
parentElement.append(kata13Heading)
kata13Heading.append('KATA 13')


let arr13 = []

    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] % 1 === 0) {
            arr13.push(sampleArray[i])
        }
    }
    parentElement.append(arr13);



//KATA 14
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata14Heading = document.createElement('h3')
parentElement.append(kata14Heading)
kata14Heading.append('KATA 14')

let arr14 = []


for(let index = 0; index <= sampleArray.length; index += 1){
   square = sampleArray[index] * sampleArray[index];
   arr14.push(square)
}

parentElement.append(arr14)



//KATA 15
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata15Heading = document.createElement('h3')
parentElement.append(kata15Heading)
kata15Heading.append('KATA 15')



let arr15 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]


let sum = 0;

for(let i = 0; i < arr15.length; i++){

sum += arr15[i]

}

parentElement.append(sum)

//KATA 16
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata16Heading = document.createElement('h3')
parentElement.append(kata16Heading)
kata16Heading.append('KATA 16')

let sum2 = 0;

for(let i = 0; i < sampleArray.length; i++){

sum2 += sampleArray[i]

}

parentElement.append(sum2)






//KATA 17
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski

const kata17Heading = document.createElement('h3')
parentElement.append(kata17Heading)
kata17Heading.append('KATA 17')

let smallest = Math.min.apply(Math, sampleArray)
parentElement.append(smallest)




//KATA 18
//cite: Scott Martin, Tammy Crittenden, Tony Lukowski


const kata18Heading = document.createElement('h3')
parentElement.append(kata18Heading)
kata18Heading.append('KATA 18')

let largest = Math.max.apply(Math, sampleArray)
parentElement.append(largest)