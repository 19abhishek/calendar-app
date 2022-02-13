import React from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextField } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Button from "@mui/material/Button";

function CreateEvent() {
  return (
    <div className="fixed border-0 border-gray-500 z-40 top-[20vh] left-[35vw] w-[30vw] h-[70vh] rounded-lg shadow-2xl bg-[#fff]">
      <header className="h-[5vh] bg-gray-100 rounded-t-lg flex items-center justify-between p-4">
        <DragHandleIcon className="!text-gray-400 !text-2xl" />
        <IconButton className="!hover:cursor-pointer" aria-label="menu icon">
          <CloseIcon className="!text-gray-700 !text-2xl " />
        </IconButton>
      </header>
      <main className="p-4">
        <form className="flex flex-col gap-12" action="">
          <TextField
            id="standard-basic"
            label="Add Title"
            variant="standard"
            className="!w-[90%] !flex !m-auto "
          />
          <div className="ml-8 flex items-center gap-12">
            <AccessTimeIcon className="!text-gray-500 !text-xl" />
            <span className="ml-8 text-xl text-gray-700">
              Monday, February 07
            </span>
          </div>
          <div className="ml-8 flex items-center gap-12">
            <PeopleIcon className="!text-gray-500 !text-xl" />
            <span className="ml-8 text-xl text-gray-700">Add People</span>
          </div>
          <div className="ml-8 flex items-center gap-12">
            <LocationOnIcon className="!text-gray-500 !text-xl" />
            <span className="ml-8 text-xl text-gray-700">Add Location</span>
          </div>
          <div className="ml-8 flex items-center gap-12">
            <MenuOpenIcon className="!text-gray-500 !text-xl !mt-4" />
            <TextField
              id="standard-basic"
              label="Add Description"
              variant="standard"
              className="!w-[68%] !flex !m-auto"
            />
          </div>
          <div className="ml-8 flex justify-end pr-8 items-center gap-12">
            <Button variant="text" className="!text-gray-600">
              More Options
            </Button>
            <Button
              style={{ backgroundColor: "#307fc8" }}
              className="!hover:bg-[#5e9cd4]"
              variant="contained"
            >
              Save
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default CreateEvent;
