import * as React from "react";
import { off, on } from "../utils";

type ThemeMode = "dark" | "light";
type ThemeState = ReturnType<typeof useThemeMode>[0] | null;
type SetThemeState = ReturnType<typeof useThemeMode>[1] | null;

export const ThemeContext = React.createContext<ThemeState>(null);
export const SetThemeContext = React.createContext<SetThemeState>(null);

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useThemeMode();

  const modeValue = React.useMemo(() => mode, [mode]);
  const setModeValue = React.useMemo(() => setMode, [setMode]);

  return (
    <ThemeContext.Provider value={modeValue}>
      <SetThemeContext.Provider value={setModeValue}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

////////////////////////////////////////
////                              /////
//////////////////////////////////////
const preferDarkQuery = "(prefers-color-scheme: dark)";
/**
 * This hook is not for usage.
 * It exists only for the theme provider.
 * Please use the useTheme and useSetTheme hooks instead
 * @returns readonly [ThemeMode, React.Dispatch<React.SetStateAction<ThemeMode>>]
 */
function useThemeMode() {
  const [mode, setMode] = React.useState<ThemeMode>(() => {
    const value = window.localStorage.getItem("MODE");
    if (value) {
      return value === "dark" ? "dark" : "light";
    }

    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  });

  React.useEffect(() => {
    let isMounted = true;

    const handler = () => {
      if (!isMounted) return;
      setMode(window.matchMedia(preferDarkQuery).matches ? "dark" : "light");
    };

    on(window, "change", handler);

    return () => {
      isMounted = false;
      off(window, "change", handler);
    };
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("MODE", mode);
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  // we're doing it this way instead of as an effect so we only
  // set the localStorage value if they explicitly change the default
  return [mode, setMode] as const;
}
