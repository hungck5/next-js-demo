import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  rootUrl: string;
}

function Layout({children , rootUrl} : LayoutProps) {
  return (<div>
    <header> Root URL: {rootUrl}</header>
    <main>{children}</main>
  </div>)
}

export default Layout;