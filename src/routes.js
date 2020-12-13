import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const ListAcc = React.lazy(() => import("./views/ListAcc/ListAcc"));
const AddAcc = React.lazy(() => import("./views/AddAcc/AddAcc"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/dashboard", name: "DASHBOARD", component: Dashboard },
  { path: "/listacc", name: "LIST ACCOUNTS", component: ListAcc },
  { path: "/addacc", name: "ADD ACCOUNTS", component: AddAcc },
];

export default routes;
