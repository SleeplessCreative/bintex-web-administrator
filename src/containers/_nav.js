export default [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: "dashboard",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-1",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Account Manager"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Add Account",
    to: "/addacc",
    icon: "add",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Accounts List",
    to: "/listacc",
    icon: "list",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];
