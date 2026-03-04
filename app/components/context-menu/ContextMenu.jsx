import { useEffect } from "react";

const ContextMenu = ({ x, y, onCloseContextMenu, parentRef, children }) => {
  const menuStyle = {
    top: `${y}px`,
    left: `${x}px`,
  };

  useEffect(() => {
    const clickListener = (event) => {
      const menuParent = parentRef?.current;
      if (!menuParent || !menuParent.contains(event?.target)) {
        return;
      }
    };
    document.addEventListener("mousedown", clickListener);
    return () => {
      document.removeEventListener("mousedown", clickListener);
    };
  }, []);

  return (
    <div
      className="p-2 absolute z-999 border border-gray-300 bg-gray-100 rounded-lg"
      style={menuStyle}
      onClick={onCloseContextMenu}
    >
      {children}
    </div>
  );
};

export default ContextMenu;
