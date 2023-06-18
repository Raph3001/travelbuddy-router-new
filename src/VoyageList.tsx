import React from 'react';
import {IUser} from "./interfaces/IUser";
import {IVoyage} from "./interfaces/IVoyage";
import {useNavigate} from "react-router-dom";

interface VoyageListProps {
    user: IUser,
    voyageList: IVoyage[],
    deleteVoyage: (voyage: IVoyage) => void
}

const VoyageList = ({user, voyageList, deleteVoyage}: VoyageListProps) => {

    const navigate = useNavigate();

    const addVoyageHandler = () => {

        navigate('/addVoyage');

    }

    const homeHandler = () => {
        navigate('/');
    }

    return (
        <div>
            <div>
                <button onClick={addVoyageHandler}>Add Voyage</button>
                <button onClick={homeHandler}>Back to Home</button>
                <h2>{`Voyages of User ${user.username}`}</h2>
                <table className={"table table-bordered"}>

                    <tr className={"table-row"}>
                        <th>Days</th>
                        <th>startCity</th>
                        <th>endCity</th>
                    </tr>
                    {voyageList.map(v => {
                        if (v.user.includes(user.id)) {
                            return (
                                <tr className={"table-row"}>
                                    <td>{v.days}</td>
                                    <td>{v.startCity}</td>
                                    <td>{v.endCity}</td>
                                    <button onClick={() => deleteVoyage(v)}>delete</button>
                                </tr>
                            )
                        }
                    })}
                </table>
            </div>
        </div>
    );
};

export default VoyageList;