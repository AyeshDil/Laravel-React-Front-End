import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return(
        <>
        <p>DEfault Layout</p>
            <Outlet />
        </>
    )
};
