export function getCurrentRouteName (navigationState) {
  if (!navigationState) return null;
  const route = navigationState.routes[navigationState.index];
  if (route.routes) return getCurrentRouteName(route);
  return route.routeName;
}

export const filterObjectProperties = (sourceObject = {}, keys = []) => {
  const filtered = {};
  keys.forEach((eachKey) => filtered[eachKey] = sourceObject[eachKey]);
  return filtered;
};
