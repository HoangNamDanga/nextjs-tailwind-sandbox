"use client";
import {
  MdAttachEmail,
  MdOutlineArchive,
  MdOpenInBrowser,
} from "react-icons/md";
import React, { useState, useRef } from "react";
import ContextMenu from "../../components/context-menu/ContextMenu";
const ContextMenuPage = () => {
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0 });
  const textAreaRef = useRef();

  const openContextMenuHandler = (e) => {
    e.preventDefault();
    const { pageX, pageY } = e;
    console.log({ pageX, pageY });
    setContextMenu({ show: true, x: pageX, y: pageY });
  };

  const menuItems = [
    {
      id: 0,
      label: "Open",
      icon: <MdOpenInBrowser />,
      onclick: () => alert("Open"),
    },
    {
      id: 1,
      label: "Email",
      icon: <MdAttachEmail />,
      onclick: () => alert("Email"),
    },
    {
      id: 2,
      label: "Open",
      icon: <MdOutlineArchive />,
      onclick: () => alert("Archive"),
    },
  ];

  const closeContextMenuHandler = (e) => {
    setContextMenu({ show: false, x: 0, y: 0 });
  };

  return (
    <div className="bg-white rounded-lg mx-4 p-4 min-h-[70vh]">
      <h1>Đây là trang ContextMenu</h1>
      <br />
      <br />
      <br />
      <br />
      <textarea
        ref={textAreaRef}
        className="p-2 border border-gray-300 rounded-md w-full"
        rows={15}
        onContextMenu={(e) => openContextMenuHandler(e)}
      ></textarea>
      {contextMenu.show && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onCloseContextMenu={closeContextMenuHandler}
          parenRef={textAreaRef} // Đưa vào đây làm prop
        >
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
                onClick={() => {
                  item.onClick();
                  closeContextMenuHandler();
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </ContextMenu>
      )}
    </div>
  );
};

export default ContextMenuPage;
