import { useHistory } from "react-router-dom";
import { HomePageBtn } from "./HomeBtnStyles";

const SitterIcon = () => {
    let hisotry = useHistory();

    const changeSitterRouteHandler = () => {
        const newPath = "/Dogs";
        hisotry.push(newPath);
    };

    return (
        <HomePageBtn onClick={changeSitterRouteHandler} >
            Interested in becoming a sitter ?
        </HomePageBtn>
    );
};

export default SitterIcon;