// CUSTOM HOOK:

import { useEffect } from "react";

const usePageTitle = (count) => {
    useEffect  (() => {
        document.title = `count - ${count}`;
    },[count]);
}

export default usePageTitle
