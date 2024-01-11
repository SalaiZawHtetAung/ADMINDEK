import React, { createContext, useState } from "react";
export const contextDrawer = createContext();

const DrawerProvider = ({ children }) => {
  const [rightDrawer, setRightDrawer] = useState(false);
  const [leftDrawer, setLeftDrawer] = useState(false);
  const [SecondRightDrawer, setSecondRightDrawer] = useState(false);
  const [text, setText] = useState(false);
  const [setting, setSetting] = useState(false);
  const [secondNav, setSecondNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [login, setLogin] = useState(false);
  const toggleTextDrawer = () => {
    setText(!text);
    setSetting(false);
  };
  const toggleLogin = () => {
    setLogin(!login);
    setOpen(false)
    setOpenForm(false)
  };
  const toggleFormDrawer = () => {
    setOpenForm(!openForm);
    setOpen(false)
    setLogin(false)
  };
  const toggleOpenDrawer = () => {
    setOpen(!open);
    setOpenForm(false)
    setLogin(false)

  };
  const toggleSecondNav = () => {
    setSecondNav(!secondNav);

    setSetting(false);
  };
  const toggleRightDrawer = () => {
    setRightDrawer(!rightDrawer);
    setText(false);
    setSetting(false);
  };
  const toggleLeftDrawer = () => {
    setLeftDrawer(!leftDrawer);
    setText(false);
    setSetting(false);
  };
  const toggleSecondRightDrawer = () => {
    setSecondRightDrawer(!SecondRightDrawer);
  };
  const toggleSettingDrawer = () => {
    setSetting(!setting);
    setText(false);
  };
  return (
    <contextDrawer.Provider
      value={{
        rightDrawer,
        toggleRightDrawer,
        SecondRightDrawer,
        toggleSecondRightDrawer,
        leftDrawer,
        toggleLeftDrawer,
        text,
        toggleTextDrawer,
        setting,
        toggleSettingDrawer,
        secondNav,
        toggleSecondNav,
        open ,
        toggleOpenDrawer,
        openForm ,
        toggleFormDrawer,
        login, 
        toggleLogin
      }}
    >
      {children}
    </contextDrawer.Provider>
  );
};

export default DrawerProvider;
