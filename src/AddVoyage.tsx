import React from 'react';
import {IUser} from "./interfaces/IUser";
import {useNavigate} from "react-router-dom";

interface AddVoyageProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    user: IUser
}

const AddVoyage = ({onSubmit, user}: AddVoyageProps) => {

    const navigate = useNavigate();

    const voyageHelper = (e: React.FormEvent<HTMLFormElement>) => {

        onSubmit(e);
        navigate('/showDestinationOfUser');

    }

    return (
        <div>
            <form onSubmit={voyageHelper}>
                {}
                <label htmlFor="days" className="form-label">Days: </label>
                <input type="number" className="form-control" id="days" placeholder="Enter Days" name="days" required={true}/>
                <label htmlFor="name" className="form-label">Start City: </label>
                <input type="text" className="form-control" id="startCity" placeholder="Enter start City" name="startCity" required={true}/>
                <label htmlFor="name" className="form-label">End City: </label>
                <input type="text" className="form-control" id="endCity" placeholder="Enter end City" name="endCity" required={true}/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddVoyage;