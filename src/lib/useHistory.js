// Hook to get the previous path on router history

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function useHistory() {
  const [previous, setPrevious] = useState(null);
  const router = useRouter();

  const storage = globalThis?.sessionStorage;

  useEffect(() => storePathValues, [router.asPath]);

  useEffect(() => setPrevious(storage.getItem("prevPath")), [storage?.getItem("prevPath")]);

  function storePathValues() {
    if (!storage) return;

    const prevPath = storage.getItem('currentPath');

    storage.setItem('prevPath', prevPath);
    storage.setItem('currentPath', globalThis.location.pathname);
  }

  return { previous };
}
