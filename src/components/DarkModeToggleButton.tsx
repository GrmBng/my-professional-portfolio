import { setDarkMode } from "../context/DarkModeContext";

const DarkModeToggleButton: React.FC = () => {
  const { toggleDarkMode } = setDarkMode();

  return (
    <button
      className="px-4 py-2 text-white bg-gray-800 hover:bg-gray-600 rounded transition-colors duration-300 ease-in-out"
      onClick={toggleDarkMode}
    >
      Dark Mode
    </button>
  );
};

export default DarkModeToggleButton;
