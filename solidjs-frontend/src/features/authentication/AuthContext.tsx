import { auth } from "$src/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { LoadingScreen } from "$src/ui-system";
import { LoginScreen } from "./containers/LoginScreen";
import {
  ParentComponent,
  createContext,
  createSignal,
  Switch,
  Match,
  useContext,
} from "solid-js";

const NO_AUTH_ERROR_MESSAGE =
  "auth is undefined. Did you wrap your Component with <AuthProvider /> ?";

const [user, setUser] = createSignal<User | null>();
onAuthStateChanged(auth, (user) => setUser(user));

const AuthContext = createContext(user());

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error(NO_AUTH_ERROR_MESSAGE);
  return authContext;
};

export const AuthProvider: ParentComponent = (props) => {
  return (
    <>
      <Switch>
        <Match when={typeof user() === "undefined"}>
          <LoadingScreen status="Authenticating..." />
        </Match>
        <Match when={user() === null}>
          <LoginScreen />
        </Match>
        <Match when={user()}>
          <AuthContext.Provider value={user()}>
            {props.children}
          </AuthContext.Provider>
        </Match>
      </Switch>
    </>
  );
};
