// Tagpassword
function tagpassword(password){
if (typeof password !== 'string') {
        return "INVALID";
    };
const length= password.length;

for(let i=0;i<=length;i++){


if( length<8){
    return("weak");
        
}
else if(length>=8 && length<12){
return("medium");
}
else if( length>=12) {
    return("strong");
}
}
}
console.log(tagpassword("abc"));