import React from 'react';
import { useMachine } from '@xstate/react';
import { assign, Machine, actions } from 'xstate';

type machineContext = {
  context: any
}

type machineEvent = {
  type: string,
  data: any
}

type sendEvent = (event: machineEvent) => void

const sendNoWhere = (event: machineEvent) => {}


export const GlobalStateContext = React.createContext<machineContext>({context: null});
export const GlobalDispatchContext = React.createContext<sendEvent>(sendNoWhere);

const globalMachine = Machine(
  {
    id: 'global',
    initial: 'loggedOut',
    context: {
      userData: null,
    },
    states: {
      loggedIn: {
        on: {
          LOGOUT: {
            target: 'loggedOut',
            actions: 'clearUserData',
          },
        },
      },
      loggedOut: {
        on: {
          LOGIN: {
            target: 'loggedIn',
            actions: ['setUserData', "log"],
          },
        },
      },
    },
  },
  {
    actions: {
      clearUserData: assign({
        userData: (_ctx, _evt) => null,
      }),
      setUserData: assign({
        userData: (_ctx, evt: any) => evt.data,
      }),
      log: (_, __) => {
        console.log(`received from machine`, __),
        console.log(`current context`, _)
      }
    },
  },
);

export const GlobalContextProvider = ({ children }: { children: any }) => {
  const [current, send] = useMachine(globalMachine);
  return (
    <GlobalStateContext.Provider value={current}>
      <GlobalDispatchContext.Provider value={send}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
};
