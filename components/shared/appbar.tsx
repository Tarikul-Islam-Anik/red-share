import Image from "next/image";
import React from "react";
const Appbar = () => {
  return (
    <div className="flex items-center justify-center border-b space-x-3 py-3">
      <Image src="/logo.png" width={45} height={45} alt="red-share-logo" />{" "}
      <span>Red Share</span>
    </div>
  );
};

export default Appbar;
