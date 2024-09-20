"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


const  ThemeToggle = () => {
    const {theme,setTheme} = useTheme();
    const [mounted,setMounted] = React.useState(false);


    React.useEffect(() => {
          setMounted(true);
    },[])
  

    if(!mounted) return null;


    const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);


    return (
      <button
        onClick={() => {
            console.log(theme);
             
            let newtheme;
            if(theme === 'dark'){
                newtheme = 'light';
            }
            else if(theme === 'light'){
                newtheme = 'dark';
            }

            if(newtheme){
                setTheme(newtheme)
            }
        }}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    )
  }

  export default ThemeToggle;