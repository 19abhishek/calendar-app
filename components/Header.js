import React, { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div>
      <header className=" w-screen h-16 flex justify-between items-center p-4 border-b-2">
        <div className="flex items-center">
          <div className="flex items-center gap-4">
            <IconButton aria-label="menu icon">
              <MenuIcon className="!cursor-pointer" />
            </IconButton>
            <Image src="https://rb.gy/gzkehd" width={48} height={48} />
            <span className="text-2xl text-gray-600">Calendar</span>
          </div>
          <div className="flex items-center ml-12">
            <Button variant="outlined">Today</Button>
            <IconButton aria-label="Left icon">
              <ChevronLeftIcon />
            </IconButton>
            <IconButton aria-label="Right icon">
              <ChevronRightIcon />
            </IconButton>
            <span className="text-[1.5rem] text-gray-700">Feburuary 2022</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <SearchIcon />
          <HelpOutlineIcon />
          <SettingsIcon />
          <AppsIcon />
          <IconButton aria-label="Right icon" onClick={signOut}>
            <Avatar>Ak</Avatar>
          </IconButton>
        </div>
      </header>
    </div>
  );
}

export default Header;
