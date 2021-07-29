// Hook to get the previous path on next.js's router
// Usage: const { previous } = useHistory();

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function useHistory() {
  const [previous, setPrevious] = useState(null);
  const router = useRouter();

  const storage = globalThis?.sessionStorage;

  useEffect(() => storePathValues, [router.asPath]);

  // Update the state to force a rerender on previous path change
  useEffect(() => setPrevious(storage.getItem("prevPath")), [storage?.getItem("prevPath")]);

  function storePathValues() {
    if (!storage) return;

    const prevPath = storage.getItem('currentPath');

    storage.setItem('prevPath', prevPath);
    storage.setItem('currentPath', globalThis.location.pathname);
  }

  return { previous };
}
