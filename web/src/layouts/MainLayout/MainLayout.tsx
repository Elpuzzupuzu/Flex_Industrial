import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      {/* Header irá aquí */}

      <Outlet />

      {/* Footer irá aquí */}
    </>
  );
}

export default MainLayout;