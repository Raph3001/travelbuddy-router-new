import {IUser} from "./interfaces/IUser";
import {IVoyage} from "./interfaces/IVoyage";

export const mock_data: IUser[] = [{
    id:0,
    username:"Raph3001",
    password:"JanKoek420",

},
    {
        id:1,
        username:"jooonax",
        password:"kocjod20",
        
    }];

export const mock_data_voyages: IVoyage[] = [{
        id: 0,
        days: 7,
        startCity: "Graz",
        endCity: "Zagreb",
        user: [0,1]
    },{
    id: 1,
    days: 90,
    startCity: "Graz",
    endCity: "Ulaanbaatar",
    user: [0]
},
    {
        id: 2,
        days: 60,
        startCity: "Vienna",
        endCity: "Almaty",
        user: [1]
}]