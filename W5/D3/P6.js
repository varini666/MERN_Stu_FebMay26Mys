// Usage of await with non-promise values

function getReadyValue(){
    return 25;
}

function getDelayedValue(){
    return Promise.resolve(75);
}

async function showValues(){
    const readyvalue = await getReadyValue();
    const delayedvalue = await getDelayedValue();

    console.log("ReadyValue:",readyvalue);
    console.log("DelayedValue:",delayedvalue);
}
showValues();
