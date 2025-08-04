// Find the longest word from given string

function findLargest(string){
    if(typeof(string) !== "string") return false;
    else{
        let split = string.split(" ");
        for(let i = 0; i < split.length; i++){
            for(let j = 0; j < split.length; j++){
                if(split[i].length > split[j]){
                    return split[i]
                }else{
                    return split[j]
                }
            }
        }
    }

}

console.log(findLargest("want to master networking and operating system"))