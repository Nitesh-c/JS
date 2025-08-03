// palindrome check

function isPalindrome(string){
    if(typeof(string) !== "string"){
        return "Please enter string value. e.g.'life', 'journey'"
    }else{
        string.toLowerCase();
        if(string === string.split("").reverse().join("")){
            return true;
        }else{
            return false;
        }
    }
    console.log("happy journey of JS")
}

console.log(isPalindrome("nan"));
console.log(isPalindrome("notes"));
console.log(isPalindrome("js"));
console.log(isPalindrome("javascript"));
