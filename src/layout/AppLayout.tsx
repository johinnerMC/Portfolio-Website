/** @format */

import { Footer, Header, Scrollup } from "./components";

type Props = { children: React.ReactNode };

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Scrollup />
    </>
  );
};
