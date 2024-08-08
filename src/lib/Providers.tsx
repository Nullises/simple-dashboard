"use client";
/*import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { initializeStore, RootState } from "@/lib";

interface SomePageProps {
  initialReduxState: RootState;
  children: React.ReactNode;
}

export default function Providers({
  initialReduxState,
  children,
}: SomePageProps) {
  const { store, persistor } = initializeStore(initialReduxState);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export async function getServerSideProps() {
  const { store } = initializeStore();
  // Aquí puedes despachar acciones si lo necesitas
  // store.dispatch(yourAction());

  return {
    props: {
      initialReduxState: store.getState(),
    },
  };
}*/

import { Provider } from "react-redux";
import { store } from "./";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
