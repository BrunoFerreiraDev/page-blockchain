// Next

// Components
import { ConectingDots } from "../ConectingDots";

// Styled Components
import { FooterContent } from "./styles";

const Footer = () => {
  return (
    <FooterContent>
      <div className="divBackground">
        <div className="content">
          <h1>De zero a criptomoedas em minutos.</h1>
          <div className="contentItem">
            <div className="item">
              <span>footer item footer footer</span>
              <span>footer item footer footer</span>
              <span>footer item footer footer</span>
              <span>footer item footer footer</span>
            </div>
            <div className="item">
              <span>footer item footer footer</span>
              <span>footer item footer footer</span>
              <span>footer item footer footer</span>
              <span>footer item footer footer</span>
            </div>
            <div className="item">
              <span>footer item footer footer</span>
              <span>footer item footer footer</span>
              <span>footer item footer footer</span>
              <span>footer item footer footer</span>
            </div>
          </div>
        </div>
        <ConectingDots
          fillStyle={"#eba417"}
          strokeStyle={"#eba417"}
          canvasId="canvasFooter"
          background="linear-gradient(90deg, #11171a 0%, #11171a 42.33%, #11171a 100%)"
          numberOfStar={100}
        />
      </div>
    </FooterContent>
  );
};
export { Footer };
export default Footer;
