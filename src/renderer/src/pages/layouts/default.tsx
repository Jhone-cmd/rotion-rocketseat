import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import * as Collapsible from "@radix-ui/react-collapsible";

export function Default() {
  return (
    <Collapsible.Root defaultOpen className='h-screen w-screen text-rotion-100 flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col max-h-screen'>
        <Header />
        <Outlet />
      </div>
    </Collapsible.Root>
  )
}
