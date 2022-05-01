import React from "react";
import Header from "@components/Header";

const Layout = ({children}) =>{
    return(
        <div className="Layout">
            <h1>HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
              <Header />
            {children}
        </div>);
}

export default Layout;