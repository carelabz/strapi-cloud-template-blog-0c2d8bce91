import { useRef, useMemo } from "react";
import { useRegions } from "./regionContext";
import { usePathname, useRouter } from "next/navigation";

export const useLocalizedNavigate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { regions } = useRegions();

  const allowedLanguages = useMemo(() => regions.map(r => r.language).filter(Boolean), [regions]);
  console.log("allowedLanguages",allowedLanguages);
  

  // store locale in a ref so it won't trigger re-renders
  const localeRef = useRef(null);
  if (localeRef.current === null) {
    const segments = pathname.split("/").filter(Boolean);
    localeRef.current = allowedLanguages.includes(segments[0]) ? segments[0] : null;
  }

  const navigate = (path) => {
    const finalPath = localeRef.current
      ? `/${localeRef.current}${path.startsWith("/") ? path : `/${path}`}`
      : path;
    console.log("Final Path",finalPath);
    
    router.push(finalPath);
  };

  return navigate;
};
