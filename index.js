// // Code your solution in this file!
// function distanceFromHqInBlocks(block) {
//     const hq = 42
//     if(block >= 42) {
//     return block - hq 
// } else {
//     return hq - block
// }
// }


// function distanceFromHqInFeet(block) {
//     const hq = 42 
//     if (block >= 42) {
//     return (block - hq) *264 
//     } else {
//         return (hq - block) * 264
//     }
// }

// function distanceTravelledInFeet(startBlock, endBlock) {
//     if(startBlock > endBlock) {
//         return (startBlock - endBlock) * 264
//     } else {
//         return (endBlock - startBlock) * 264
//     }
// }


// function calculatesFarePrice(startBlock, endBlock) {
//     const feet = distanceTravelledInFeet(startBlock, endBlock)
//     if(feet <= 400) {
//         return 0
//     } else if(feet > 400 && feet <= 2000) {
//         return ((startBlock - endBlock) * 264 - 400) * 0.02
//     } else if (feet > 2000 && feet < 2500) {
//         return 25
//     } else { 
//         return 'cannot travel that far'
//     } 
    

// }





// FIRST
// function: pick up location for passenger ==> returns the number of blocks 
// from HQ. 
// HQ located on 42nd block 
// for example pickup location 50 (50th street) ==> return value 8 
// 50 - 42 = 8 

//SECOND 
//calc. number of feet travelled based on distance 
// example. function ==> distanceTravelledInFeet(startBlock, endBlock)
// return feet distance travelled
//each block is 264 feet long
// example. (38-34)*264



// const oneBlock = 264 
// const hq = 42 * oneBlock


function distanceFromHqInBlocks(block) {
    const hq = 42
    if (block >= hq) {
        return block - hq
    } else {
        return hq - block
    }
}

function distanceFromHqInFeet(distanceFeet) {
    const hq = 42
    if(distanceFeet >= hq) {
        return (distanceFeet - hq) * 264 
    } else {
        return (hq - distanceFeet) * 264
    }
}

const distanceTravelledInFeet = function (startingBlock, endingBlock) {
    if (endingBlock >= startingBlock) {
        return (endingBlock - startingBlock) * 264
    } else {
        return (startingBlock - endingBlock) * 264
    }
 
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400) {
        return 0
    } else if (feet > 400 && feet < 2000) {
        return (feet - 400) * 0.02
    } else if (feet > 2000 && feet < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}