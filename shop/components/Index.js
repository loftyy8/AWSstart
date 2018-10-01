import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import EnterStore from "./EnterStore"
import "../../style.css";


class EnterStore extends React.Component {
    render(<Router />, document.querySelector("#main"));
    
}
export default EnterStore;