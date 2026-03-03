// Function scope
function scope()
{
    var insideVar = 10;
    let insideLet = 20;
    const insideConst = 30;
    console.log(insideVar);
    console.log(insideLet);
    console.log(insideConst);
}
scope();
    // console.log(insideVar);//Function scope
    // console.log(insideLet);//Block scope
    // console.log(insideConst);//Block scope

    function varFunctionScoped(){
        if(true){
            var x = 40;
            let y = 50;
        }
        console.log("x:",x);
        console.log("y:",y);//let can't access outside the block bcz it's a block scope
    }
    varFunctionScoped();