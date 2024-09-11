import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Toggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
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
                                peer-focus:outline-none peer-focus:ring-4
                                peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                ${darkMode ? 'bg-black' : 'bg-white'} 
                                peer-checked:${darkMode ? 'bg-white' : 'bg-black'}
                                after:content-[''] after:absolute after:top-[2px] 
                                after:left-[2px] after:bg-${darkMode ? 'white' : 'black'}
                                after:border-${darkMode ? 'black' : 'white'}
                                after:border after:rounded-full after:h-6 
                                after:w-6 after:transition-all
                                peer-checked:after:translate-x-full`}>

                    {/* Move FaSun to the right and FaMoon to the left */}
                    <FaSun className={`absolute right-2 top-2 text-yellow-500 ${darkMode ? 'invisible' : 'visible'} transition-opacity`} />
                    
                    <FaMoon className={`absolute left-2 top-2 text-white ${darkMode ? 'visible' : 'invisible'} transition-opacity`} />
                    
                </div>
            </label>
        </div>
    );
}

export default Toggle;
