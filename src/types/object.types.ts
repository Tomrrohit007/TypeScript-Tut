type Plane = {
    model:string;
    flightNumber:string;
    timeOfDeparture:Date;
    timeOfArrival:Date;
    seats:{
        [key:number]:string;
    }
    
}

const airplane:Plane = {
    model:'Aribus',
    flightNumber:"A32",
    timeOfDeparture:new Date(),
    timeOfArrival:new Date(),
    seats:{
        1:'dakda',
        2:'asjas',
    }
}
