import type { Store, Dispatch, StoreEnhancer } from "redux"
import type { State, Action } from "./reducer"

declare global {
  const process: Process

  interface Process {
    env: {
      NODE_ENV: "development" | "production"
      API_ENDPOINT?: string
    }
  }

  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?(): StoreEnhancer
  }
}

declare module "react-redux" {
  interface DefaultRootState extends State {}
  function useDispatch<TDispatch = Dispatch<Action>>(): TDispatch
  function useStore<S = DefaultRootState>(): Store<State, Action>
}
