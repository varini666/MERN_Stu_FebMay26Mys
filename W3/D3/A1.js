function invoice(gstRate = 0.18, ...items){
    for(let i=0;i<=items.length;i++){
        let items = items[i];
        if(items.name=="STOP"){
            break;
        }
    if(items.qty<=0||items.price<=0){
        continue;
    }
    subtotal=items.price*items.qty;
}
gst=items.price+0.18;
total=items.price+gst;
return{
    "subtotal":subtotal,
    "gst":gst,
    "total":total
};
}
