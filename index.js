

const regions = ['N', 'NE', 'CO', 'SE', 'S'];
const route1 = ['N','NE'];
const route2 = ['SE','CO'];
const route3 = ['SE','S'];
const allRoutes = [
    route1,
    route2,
    route3
]
const going = [];
const comming = [];


let newRoutesCount = 0;

function isGoing(i) {
    if(i === route1[0] || i === route2[0] || i === route3[0] ){
        return true;
    }
    return false
}
function isComming(i) {
    if(i === route1[1] || i === route2[1] || i === route3[1] ){
        return true;
    }
    return false;
}

function generateRoute(going, comming) {
    for(region of going) {
        for(arrival of comming) {
            let newRoute = [region, arrival]
            if(!allRoutes.includes(newRoute)) {
               allRoutes.push(newRoute);
               newRoutesCount += 1; 
            }
            
        }
    }
}

/* function toWhereCantGo(region) {
    let cantReturnTo = [];
    if(region === route1[1]){
        cantReturn.push(route1[0])
    }

    if(region === route2[1]){
        cantReturn.push(route2[0])
        
    }

    if(region === route3[1]){
        cantReturn.push(route3[0])    
    }
    return cantReturnTo
} */

for(let region of regions) {
    if(!isGoing(region)) {
        going.push(region);
    }
    if(!isComming(region)) {
        comming.push(region);
    }

}
generateRoute(going, comming);
console.log(allRoutes)


/* console.log(going);
console.log(comming); */