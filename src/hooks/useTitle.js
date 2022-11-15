import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}  Active Learning`;
  }, [title]);
};
export default useTitle;
