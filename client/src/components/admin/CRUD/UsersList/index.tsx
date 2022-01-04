import { DataTable } from "primereact/datatable";
import { confirmDialog } from "primereact/confirmdialog";
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
  const [delId, setDelId] = useState<number>(0);
	useEffect(() => {
		GetAllUsers();
	}, []);

const UserInfo = async (id:number) => {
  await GetUserById(id);
  setDialog(true);
}

const confirmDelete = (id: number) => {
  setDelId(id)
  confirmDialog({
    message: "Are you sure you want to delete?",
    header: "Confirmation",
    icon: "pi pi-exclamation-triangle",
    accept,
    reject,
  });
};

const accept = () => {
  DeleteUserById(delId);
  toast.current && toast.current.show({
    severity: "info",
    summary: "Confirmed",
    detail: "You have accepted",
    life: 3000,
  });
};

const reject = () => {
  toast.current && toast.current.show({
      severity: "info",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
};

 const actionBodyTemplate = (rowData: IUserData) => {
   return (
     <>
       <Button
         icon="pi pi-info"
         className="p-button-rounded p-button-info p-mr-2"
         onClick={() => {
          rowData.id && UserInfo(rowData.id)
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
         onClick={() => confirmDelete(Number(rowData.id))}
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
