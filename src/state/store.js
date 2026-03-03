export function initialState() {
  return {
    name: "",
    pillars: [],
    cats: {},

    challenges: [],
    activeIdentity: null,
    allIdentities: [],

    synOverrides: {},
    currentTpls: [],
    currentScreen: 1,
  };
}

export function createStore() {
  let state = initialState();
  const listeners = new Set();

  function getState() { return state; }
  function setState(updater) {
    state = typeof updater === "function" ? updater(state) : updater;
    listeners.forEach(fn => fn(state));
  }
  function subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); }
  function reset() { setState(initialState()); }

  return { getState, setState, subscribe, reset };
}
