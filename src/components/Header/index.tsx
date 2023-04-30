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
          Test
        </Link>
        <Link href="/Artigos" className={asPath === "/Artigos" ? "active" : ""}>
          Test
        </Link>
        <Link
          href="/studying"
          className={asPath === "/studying" ? "active" : ""}
        >
          Test
        </Link>
        <Link href="/about" className={asPath === "/about" ? "active" : ""}>
          Test
        </Link>
      </NavHeader>
      <BoxHeader></BoxHeader>
    </Content>
  );
};

export { Header };
export default Header;
