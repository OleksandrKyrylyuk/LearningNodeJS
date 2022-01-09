import { DataTable } from "primereact/datatable";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog"
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { IUserData } from '../types';

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


const UserList = () => {
	const { data, info: { Name, Surname, Email} }  = useTypedSelector(store => store.getUsers);
	const { GetAllUsers, GetUserById, DeleteUserById } = useActions();
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);
  const [dialog, setDialog] = useState(false);
  const [visible, setVisible] = useState(false);
  const [delId, setDelId] = useState<number>(0);
	useEffect(() => {
    GetAllUsers();
  }, [GetAllUsers]);

const UserInfo = async (id:number) => {
  await GetUserById(id);
  setDialog(true);
}
 const actionBodyTemplate = (rowData: IUserData) => {
     const delUser = async (id: number) => {
       await setVisible(true);
       setDelId(id);
     }; 
   return (
     <>
       <Button
         icon="pi pi-info"
         className="p-button-rounded p-button-info p-mr-2"
         onClick={() => {
           rowData.id && UserInfo(rowData.id);
         }}
       />
       <Button
         icon="pi pi-pencil"
         className="p-button-rounded p-button-success p-mr-2"
         onClick={() => {
           navigate(`/dashboard/editUser/${rowData.id}`);
         }}
       />
       <Button
         icon="pi pi-trash"
         className="p-button-rounded p-button-warning"
         onClick={() => delUser(Number(rowData.id))}
       />
       <ConfirmDialog
         visible={visible}
         onHide={() => setVisible(false)}
         message="Do you want to delete this user?"
         header="Confirmation"
         icon="pi pi-exclamation-triangle"
         accept={() => {
           DeleteUserById(delId);

           if (toast.current !== null) {
             toast.current.show({
               severity: "info",
               summary: "Done",
               detail: "User has been deleted",
               life: 3000,
             });
           }
         }}
       />
     </>
   );
 };

	const header = (
    <div className="table-header">
      Users
    </div>
  );

  return (
    <>
      <div className="datatable-templating-demo ">
        <Toast ref={toast} />
        <div className="card">
          <DataTable value={data} header={header} responsiveLayout="scroll">
            <Column field="id" header="ID"></Column>
            <Column field="Name" header="Name"></Column>
            <Column field="Surname" header="SurName"></Column>
            <Column field="Email" header="Email"></Column>
            <Column
              body={actionBodyTemplate}
              style={{ minWidth: "8rem" }}
            ></Column>
          </DataTable>
        </div>
        <Dialog
          header="Info"
          visible={dialog}
          style={{ width: "50vw" }}
          onHide={() => setDialog(false)}
        >
          <ul className="list-group">
            <li className="list-group-item">Name: {Name}</li>
            <li className="list-group-item">Surname: {Surname}</li>
            <li className="list-group-item">Email: {Email}</li>
          </ul>
        </Dialog>
      </div>
    </>
  );
};

export default UserList;
