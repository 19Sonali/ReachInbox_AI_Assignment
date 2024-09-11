import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Toggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className="flex items-center justify-center mb-5 cursor-pointer">
            <label className="inline-flex items-center relative">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
               
                <div className={`relative w-14 h-8 rounded-full transition-colors 
                                ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}
                                peer-checked:${darkMode ? 'bg-gray-600' : 'bg-gray-300'}
                                after:content-[''] after:absolute after:top-[2px] 
                                after:left-[2px] after:bg-${darkMode ? 'black' : 'white'}
                                after:border-${darkMode ? 'black' : 'gray-300'}
                                after:border after:rounded-full after:h-6 
                                after:w-6 after:transition-all
                                peer-checked:after:translate-x-full`}>

                    
                    
                    <FaSun className={`absolute left-2 top-2 text-yellow-500 ${darkMode ? 'visible' : 'invisible'} transition-opacity`} />
                    <FaMoon className={`absolute right-2 top-2 text-white ${darkMode ? 'invisible' : 'visible'} transition-opacity`} />
                    
                </div>
            </label>
        </div>
    );
}

export default Toggle;
