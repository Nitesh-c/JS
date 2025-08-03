// reverse a string

function reverseString(string){
    if(typeof string !== "string"){
        return "Please enter string";
    }else{
        let reverseString = string.split("").reverse().join("").toLowerCase()
        return reverseString;
    }

    console.log("Programme End !")
}

console.log(reverseString("Hello World"))