import React, { useEffect, useState } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextField } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import { selectedDay } from "../atom/monthAtom";
import DoneIcon from "@mui/icons-material/Done";
import { selectedEvents, event } from "../atom/eventAtom";
import { useAppContext } from "../context/AppContext";

const colors = [
  "bg-rose-500",
  "bg-fuchsia-500",
  "bg-yellow-500",
  "bg-violet-500",
  "bg-sky-500",
  "bg-teal-500",
];

function CreateEvent() {
  const [currentModalState, setCurrentModalState] = useRecoilState(modalState);
  const [currSelectedDay, setCurrentSelectedDay] = useRecoilState(selectedDay);
  const [currSelectedEvent, setCurrentSelectedEvent] =
    useRecoilState(selectedEvents);
  //const [savedEvents, setSavedEvents] = useRecoilState(events);
  const [title, setTitle] = useState(
    currSelectedEvent ? currSelectedEvent.title : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    currSelectedEvent
      ? colors.find((color) => currSelectedEvent.selectedLabel === color)
      : colors[0]
  );
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [description, setDescription] = useState(
    currSelectedEvent ? currSelectedEvent.description : ""
  );

  // const getSavedItems = () => {
  //   let list = localStorage.getItem("savedEvents");
  //   if (list) {
  //     return JSON.parse(list);
  //   } else {
  //     return [];
  //   }
  // };

  const [savedEvents, dispatchEvents] = useAppContext();

  useEffect(() => {
    if (!currentModalState) {
      setCurrentSelectedEvent(null);
    }
  }, [currentModalState]);

  function handleSubmit(e) {
    e.preventDefault();
    const val = {
      title,
      description,
      day: currSelectedDay.valueOf(),
      selectedLabel,
      id: currSelectedEvent ? currSelectedEvent.id : Date.now(),
    };
    if (currSelectedEvent) {
      dispatchEvents({ type: "update", payload: val });
    } else {
      dispatchEvents({ type: "push", payload: val });
    }
    setCurrentModalState(false);
  }

  return (
    <div className="fixed border-0 border-gray-500 z-40 top-[18vh] left-[35vw] w-[30vw] h-[80vh] rounded-lg shadow-2xl bg-[#fff]">
      <header className="h-[5vh] bg-gray-100 rounded-t-lg flex items-center justify-between p-4">
        <DragHandleIcon className="!text-gray-400 !text-2xl" />
        <span>
          {currSelectedEvent && (
            <IconButton
              onClick={() => {
                dispatchEvents({ type: "delete", payload: currSelectedEvent });
                setCurrentModalState(false);
              }}
            >
              <DeleteIcon />
            </IconButton>
          )}
          <IconButton
            className="!hover:cursor-pointer"
            aria-label="menu icon"
            onClick={() => setCurrentModalState(!currentModalState)}
          >
            <CloseIcon className="!text-gray-700 !text-2xl " />
          </IconButton>
        </span>
      </header>
      <main className="p-4">
        <form className="flex flex-col gap-10" action="">
          <TextField
            id="standard-basic"
            label="Add Title"
            variant="standard"
            className="!w-[90%] !flex !m-auto "
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="ml-8 flex items-center gap-12">
            <AccessTimeIcon className="!text-gray-500 !text-xl" />
            <span className="ml-8 text-xl text-gray-700">
              {currSelectedDay.format("dddd, MMMM DD")}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex gap-8 m-auto">
            {colors.map((currColor, idx) => {
              return (
                <span
                  key={idx}
                  onClick={() => setSelectedLabel(currColor)}
                  className={`${currColor} w-8 h-8 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === currColor && (
                    <DoneIcon className="!text-gray-100" />
                  )}
                </span>
              );
            })}
          </div>
          <div className="ml-8 flex justify-end pr-8 items-center gap-12">
            <Button variant="text" className="!text-gray-600">
              More Options
            </Button>
            <Button
              style={{ backgroundColor: "#307fc8" }}
              className="!hover:bg-[#5e9cd4]"
              variant="contained"
              onClick={handleSubmit}
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
