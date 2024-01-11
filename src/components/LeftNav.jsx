import React, { useContext } from "react";
import { contextDrawer } from "./contexts/DrawerProvider";
import Accordion from "./Accordion";
import FormAccordion from "./FormAccordion";
import Authentication from "./Authentication";

const LeftNav = () => {
  const { leftDrawer } = useContext(contextDrawer);

  return (
    <div
      className={`fixed bg-slate-800 left-0 z-40 h-screen  overflow-y-auto transition-transform ${
        leftDrawer && "-translate-x-full "
      } w-[249px]`}
    >
      <h1 className="text-white ps-4 mt-5 text-[13px]">Navigation</h1>
      <Accordion />
      <FormAccordion />
      <Authentication />
    </div>
  );
};

export default LeftNav;
