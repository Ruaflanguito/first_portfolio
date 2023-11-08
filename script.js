function rainPrecentage(){
    let number = Math.floor(Math.random()*101);
    return `There is a ${number}% chance of raining in your area.`;
}

function sky(){
    let number = Math.floor(Math.random()*4);
    if (number === 0){
        return 'The sky is: Sunny and clean.';
    }else if (number === 1){
        return 'The sky is: Sunny with clouds.';
    }else if (number === 2){
        return 'The sky is: Cloudy.';
    }else{
        return 'The sky is: Dark clouds.';
    };
}

function wind(){
    let number = Math.floor(Math.random()*60);
    return `The winds speed: ${number}Kmh.`
}

let final = [sky(), rainPrecentage(), wind()];
console.log(final.join('\n'));
