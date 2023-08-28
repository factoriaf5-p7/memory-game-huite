// TimerContext.tsx

import React, { createContext, useContext, useState } from 'react';

const defaultValue = {
  startTimer: false,
  setStartTimer: (value: boolean) => {}, // Una función vacía como valor predeterminado
};

const TimerContext = createContext(defaultValue);

export function useTimerContext() {
  return useContext(TimerContext);
}

export function TimerProvider({ children }) {
  const [startTimer, setStartTimer] = useState(false);

  return (
    <TimerContext.Provider value={{ startTimer, setStartTimer }}>
      {children}
    </TimerContext.Provider>
  );
}
