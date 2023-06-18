import React from 'react';
import {IUser} from "./interfaces/IUser";
import {IVoyage} from "./interfaces/IVoyage";
import {useNavigate} from "react-router-dom";

interface MainProps {
    userList: IUser[],
    voyageList: IVoyage[],
    setSelectedUser: (user: IUser) => void
}

const Main = ({userList, voyageList, setSelectedUser}: MainProps) => {

    const navigate = useNavigate();

    const handleUserClick = (user: IUser) => {

        setSelectedUser(user);
        navigate('/showDestinationOfUser');
    }

    return (
        <div>
            <div>
                <table className={"table table-bordered"}>
                    <tr className={"table-row"}>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                    {userList.map(u => {
                        return (
                            <tr onClick={() => handleUserClick(u)} className={"table-row"}>
                                <td>{u.username}</td>
                                <td>{u.password}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    );
};

export default Main;