import React from "react";
import Nav from "./Nav";
import LeftNav from "./LeftNav";
import Right from "./Right";
import SecondRight from "./SecondRight";
import DrawerProvider from "./contexts/DrawerProvider";
import Text from "./Text";

const AllNav = () => {
  return (
    <DrawerProvider>
      <>
        <Nav />
        <LeftNav />
        <Right />
        <SecondRight />
      </>
    </DrawerProvider>
  );
};

export default AllNav;
