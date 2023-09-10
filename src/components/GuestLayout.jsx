import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div>
      <div>
        <p>For guest user only</p>
        <Outlet />
      </div>
    </div>
  );
}
