import { ButtonStyled } from "./NavBtnStyles";

const NavButton = (props) => {
  return (
    <div>
      {props.icon}
      <ButtonStyled
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </ButtonStyled>
    </div>
  );
};

export default NavButton;
