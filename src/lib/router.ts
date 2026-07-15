import { useEffect, useState } from 'react';

export type Route =
  | 'home'
  | 'about'
  | 'academics'
  | 'facilities'
  | 'gallery'
  | 'achievements'
  | 'news'
  | 'contact';

const routeMap: Record<string, Route> = {
  '': 'home',
  '#': 'home',
  '#home': 'home',
  '#about': 'about',
  '#academics': 'academics',
  '#facilities': 'facilities',
  '#gallery': 'gallery',
  '#achievements': 'achievements',
  '#news': 'news',
  '#contact': 'contact',
};

export function parseHash(): Route {
  const h = window.location.hash.replace(/^#\/?/, '');
  return routeMap[h] ?? (routeMap[h] ? routeMap[h] : 'home');
}

export function useRoute(): [Route, (r: Route) => void] {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (r: Route) => {
    window.location.hash = r === 'home' ? '' : `#${r}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return [route, navigate];
}

