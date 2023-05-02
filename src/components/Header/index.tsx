// Next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// images
import logo from "../../assets/images/ilustration2.svg";

// Styled Components
import { Content, BoxHeader, NavHeader } from "./styles";

const Header = () => {
  const { asPath } = useRouter();

  return (
    <Content>
      <BoxHeader>
        <Image src={logo} alt="logo" className="logo" />
      </BoxHeader>
      <NavHeader>
        <Link className={asPath === "/" ? "active" : ""} href="/">
          Home
        </Link>
        <Link href="/">Test1</Link>
        <Link href="/">Test2</Link>
        <Link href="/">Test3</Link>
      </NavHeader>
      <BoxHeader></BoxHeader>
    </Content>
  );
};

export { Header };
export default Header;
