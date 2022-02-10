import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";

function Header() {
  return (
    <div>
      <div className="flex justify-between p-6 shadow-sm shadow-gray-400 items-center w-screen h-16 border-b-2">
        {/* <Image src="/icons8-google-calendar-48.png" width="48" height="48" /> */}
        <Image
          src="https://rb.gy/0npp0a"
          className="l-4"
          width="194"
          height="36"
        />
        <Button variant="contained">Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
