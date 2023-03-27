import React from "react";

interface HeaderProps {
    titleHeader: string;
}

const Header = ( {titleHeader}: HeaderProps ) => {
  return (
    <div>
      <h1>{titleHeader}</h1>
      <hr/>
    </div>
  )
}

export default Header;