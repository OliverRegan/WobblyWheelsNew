import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useGetCoaches } from "../../assets/dataFunctions/useGetCoaches"
import { useGetSkaters } from "../../assets/dataFunctions/useGetSkaters"


// Ag Grid
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

import "./admin.css"

const Admin = () => {

    // States for which tab is selected. 0 = null, 1 = skaters .... 5 = merch
    const [tab, setTab] = useState(1);

    // Data
    // const [data, setData] = useState();
    let data;
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    // What tab/type is active
    const [typeActive, setTypeActive] = useState('');

    // Column state
    let columns = [];


    let { coaches, coachLoading, coachError } = useGetCoaches();
    let { skaters, skatersLoading, skatersError } = useGetSkaters();


    useEffect(() => {

    }, [])

    // Get data
    if (tab === 1) {
        data = skaters;

        // Set columns          
        columns = [
            { headerName: 'Skater Id', field: 'skaterId', sortable: true, filter: true, resizable: true },
            { headerName: 'Skater First Name', field: 'skaterName', sortable: true, filter: true, resizable: true },
            { headerName: 'Skater Last Name', field: 'skaterLastName', sortable: true, filter: true, resizable: true },
            { headerName: 'Skater User Name', field: 'userName', sortable: true, filter: true, resizable: true },
            { headerName: 'Skater Associated User Id', field: 'skaterEmergencyContact', sortable: true, filter: true, resizable: true },

        ];
    }
    else if (tab === 2) {

        data = coaches;

        // Set columns          
        columns = [
            { headerName: 'Coach Id', field: 'coachId', sortable: true, filter: true, resizable: true },
            { headerName: 'Coach Name', field: 'coachName', sortable: true, filter: true, resizable: true },
            { headerName: 'Coach Position', field: 'coachPosition', sortable: true, filter: true, resizable: true },

        ];
    }
    else if (tab === 3) {

        data = coaches;

        // Set columns          
        columns = [
            { headerName: 'Coach Id', field: 'coachId', sortable: true, filter: true, resizable: true },
            { headerName: 'Coach Name', field: 'coachName', sortable: true, filter: true, resizable: true },
            { headerName: 'Coach Position', field: 'coachPosition', sortable: true, filter: true, resizable: true },

        ];
    }
    else if (tab === 4) {

        data = coaches;

        // Set columns          
        columns = [
            { headerName: 'Coach Id', field: 'coachId', sortable: true, filter: true, resizable: true },
            { headerName: 'Coach Name', field: 'coachName', sortable: true, filter: true, resizable: true },
            { headerName: 'Coach Position', field: 'coachPosition', sortable: true, filter: true, resizable: true },

        ];
    }



    const handleRowClick = () => {

    };


    // AG Grid params/settings
    const onGridReady = params => {
        params.api.sizeColumnsToFit();
        params.api.setQuickFilter();
    }

    return (
        <div className="row w-85 mx-auto mx-auto py-3" id="lesson-group-card-holder">
            <div className="bg-main w-100 rounded-top mx-auto shadow d-flex justify-content-around">
                <p className="card-title-custom text-center"><span className="font-italic">Admin
                </span></p>
            </div>
            <div className="bg-light w-100 rounded-bottom mx-auto shadow justify-content-around">
                <div className=" d-flex ">
                    {/* Buttons to change display */}
                    <ul className="w-100 p-0 d-flex justify-content-around py-4 list-unstyled">
                        <li className={(tab == 1 ? "bg-main" : "bg-dark") + " text-light w-100 rounded cursor-pointer text-center py-2 mx-2"} role='button' onClick={() => { setTab(1); }}>
                            Skaters
                        </li>
                        <li className={(tab == 2 ? "bg-main" : "bg-dark") + " text-light w-100 rounded cursor-pointer text-center py-2 mx-2"} role='button' onClick={() => { setTab(2); }}>
                            Lessons
                        </li>
                        <li className={(tab == 3 ? "bg-main" : "bg-dark") + " text-light w-100 rounded cursor-pointer text-center py-2 mx-2"} role='button' onClick={() => { setTab(3); }}>
                            Users
                        </li>
                        <li className={(tab == 4 ? "bg-main" : "bg-dark") + " text-light w-100 rounded cursor-pointer text-center py-2 mx-2"} role='button' onClick={() => { setTab(4); }}>
                            Coaches
                        </li>
                        <li className={(tab == 5 ? "bg-main" : "bg-dark") + " text-light w-100 rounded cursor-pointer text-center py-2 mx-2"} role='button' onClick={() => { setTab(5); }}>
                            Merch
                        </li>
                    </ul>

                </div>

            </div>
            {/* Admin Nav Bar */}
            <div className="w-100 d-flex justify-content-center p-0 my-4">
                <div id="gridContainer" className="ag-theme-alpine-dark w-100" >
                    <AgGridReact
                        onGridReady={onGridReady}
                        defaultColDef={{ resizable: true, autosize: true }}
                        columnDefs={columns}
                        domLayout={'autoHeight'}
                        rowData={data}
                        pagination={true}
                        paginationPageSize={10}
                        filter={true}
                        onRowClicked={(row) => { handleRowClick(); /*props.idFunc(row.data.id); nav(`/volcano/${row.data.id}`)*/ }}
                    />
                </div>
            </div>
        </div>
    )

}

export default Admin;