// Find the longest word from given string

function findLargest(string){
    if(typeof(string) !== "string") return false;
    else{
        let splitString = string.split(" ");
        let result = "";
        for(let i = 0; i < splitString.length; i++){

            for(let j = 0; j < splitString.length; i++){
                if(splitString[i].length > splitString[j].length){
                    result = splitString[i];
                }
            }

            // console.log(splitString[i])
        }
    }

    return 0;
}

console.log(findLargest("want to master networking and operating system"));

