import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {IUser} from "./interfaces/IUser";
import {mock_data, mock_data_voyages} from "./mock_data";
import {IVoyage} from "./interfaces/IVoyage";
import Main from "./Main";
import VoyageList from "./VoyageList";
import AddVoyage from "./AddVoyage";

function App() {

    const [userList, setUserList] = useState<IUser[]>(mock_data);
    const [voyageList, setVoyageList] = useState<IVoyage[]>(mock_data_voyages);
    const [selectedUser, setSelectedUser] = useState<IUser>(userList[0]);

    const addVoyage = (e:React.FormEvent<HTMLFormElement>) => {

        const days = e.currentTarget.days.value;
        const startCity = e.currentTarget.startCity.value;
        const endCity = e.currentTarget.endCity.value;

        const voyage: IVoyage = {
            id: voyageList.length,
            days: days,
            startCity: startCity,
            endCity: endCity,
            user: [selectedUser.id]
        }

        setVoyageList([...voyageList, voyage]);

    }

    const deleteVoyage = (voyage: IVoyage) => {
        setVoyageList(voyageList.filter(v => v.id !== voyage.id));
    }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main userList={userList} voyageList={voyageList} setSelectedUser={setSelectedUser}/>}/>
          <Route path={"/showDestinationOfUser"} element={<VoyageList voyageList={voyageList} user={selectedUser} deleteVoyage={deleteVoyage}/>}/>
          <Route path={"/addVoyage"} element={<AddVoyage user={selectedUser} onSubmit={addVoyage}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
