
import { PanelMenu } from "primereact/panelmenu";
import { Navigate, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
    const items = [
      {
        label: "Users",
        icon: "pi pi-fw pi-user",
        items: [
          {
            label: "User list",
            icon: "pi pi-fw pi-list",
            command: () => navigate("/dashboard/"),
          },
          {
            label: "New",
            icon: "pi pi-fw pi-user-plus",
            command: () => navigate("/dashboard/adduser"),
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-users",
            items: [
              {
                label: "Filter",
                icon: "pi pi-fw pi-filter",
                items: [
                  {
                    label: "Print",
                    icon: "pi pi-fw pi-print",
                  },
                ],
              },
              {
                icon: "pi pi-fw pi-bars",
                label: "List",
              },
            ],
          },
        ],
      },
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Left",
            icon: "pi pi-fw pi-align-left",
          },
          {
            label: "Right",
            icon: "pi pi-fw pi-align-right",
          },
          {
            label: "Center",
            icon: "pi pi-fw pi-align-center",
          },
          {
            label: "Justify",
            icon: "pi pi-fw pi-align-justify",
          },
        ],
      },
      {
        label: "Events",
        icon: "pi pi-fw pi-calendar",
        items: [
          {
            label: "Edit",
            icon: "pi pi-fw pi-pencil",
            items: [
              {
                label: "Save",
                icon: "pi pi-fw pi-calendar-plus",
              },
              {
                label: "Delete",
                icon: "pi pi-fw pi-calendar-minus",
              },
            ],
          },
          {
            label: "Archieve",
            icon: "pi pi-fw pi-calendar-times",
            items: [
              {
                label: "Remove",
                icon: "pi pi-fw pi-calendar-minus",
              },
            ],
          },
        ],
      },
    ];

    return (
        <div>
            <div className="card">
                <PanelMenu model={items} style={{ width: 'auto' }}/>
            </div>
        </div>
    );
}
      

export default SideBar;;
