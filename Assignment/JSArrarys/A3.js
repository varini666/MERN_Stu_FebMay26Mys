let ticket = [
    { id: "T101", priority: "HIGH" , resolved: true},
    { id: "T102", priority: "MEDIUM" , resolved: false },
    { id: "T103", priority: "LOW", resolved: true },
    { id: "T104", priority: "MEDIUM" , resolved: true },
    { id: "T105", priority: "HIGH" , resolved: false },
    { id: "T106", priority: "LOW", resolved: true }
];
//Urgent ticket
ticket.unshift({ id: "T100", priority: "HIGH", resolved: true });
// Normal ticket
ticket.push({ id: "T107", priority: "MEDIUM" , resolved: true  });
ticket.push({ id: "T108", priority: "MEDIUM" , resolved: true  });
// Current ticket
ticket.shift();
let currentTicket=ticket.shift();
console.log(currentTicket);
// Dropped ticket
ticket.pop();
let droppedTicket=ticket.pop();
console.log(droppedTicket);
// Unresolved tickets
let Pending = ticket.filter(ticket => ticket.resolved === false);
console.log(Pending);
// Pending ID's
let Pendingid = ticket.map(ticket => ticket.id);
console.log(Pendingid);
