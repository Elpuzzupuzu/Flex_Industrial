import { Outlet } from "react-router-dom";

function AppShell() {
  return (
    <>
      <header>
        <p>Flex Industrial</p>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Flex Industrial</p>
      </footer>
    </>
  );
}

export default AppShell;