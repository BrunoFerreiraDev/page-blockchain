// Next
import Image from "next/image";

// Components
import { ConectingDots } from "../ConectingDots";

// images
import backgroundBase from "../../assets/images/background.png";
import ilustration2 from "../../assets/images/ilustration2.svg";
import canvasBackground from "../../assets/images/canvasBackground.svg";

// Styled Components
import {
  BoxMain,
  Content,
  ShowMoreButtom,
  CertificationBox,
  SigninButtom,
  ContentItems,
  ContentImage,
  SectionMain,
  ContentSecction,
} from "./styles";

const Sections = () => {
  return (
    <>
      <BoxMain>
        <div className="content">
          <Content>
            <ContentItems className="firstSection">
              <h1>O que é a tecnologia blockchain?</h1>
              <p>
                A blockchain é um livro-razão imutável e compartilhado para
                registrar transações, controlar ativos e aumentar a confiança.
                Descubra por que empresas do mundo todo estão adotando essa
                tecnologia
              </p>
              <ShowMoreButtom>Saiba Mais</ShowMoreButtom>
              <CertificationBox>selo de confiabilidade 💎</CertificationBox>
              <h5>Como a transação é validada?</h5>
              <SigninButtom>Cadastre</SigninButtom>
              <h3>Como a transação é validada?</h3>
              <p>
                O minerador só pode adicionar uma transação no bloco se uma
                maioria simples (50%+1) da rede concordar que aquela transação é
                legítima e correta. O nome disso é o consenso da rede
                blockchain. No caso do Bitcoin, o consenso é medido através do
                poder computacional. Duas cadeias de blocos podem ser formadas
                ao mesmo tempo, o impasse será resolvido quando a rede precisar
                escolher uma das cadeias. No final, ganha a cadeia que tiver a
                maior quantidade de trabalho.
              </p>
            </ContentItems>

            <ContentImage>
              <Image src={backgroundBase} alt="background" />
            </ContentImage>
          </Content>

          <ConectingDots
            fillStyle={"#27B0BB"}
            strokeStyle={"#27B0BB"}
            canvasId="canvasFirstSection"
            background="transparent"
            numberOfStar={50}
          />
        </div>
      </BoxMain>
      <ContentSecction>
        <div className="divBackground">
          <SectionMain className="lastSection">
            <ContentItems className="ContentItems">
              <h1 className="blackTitle">Visão geral da blockchain</h1>
              <p>
                O minerador só pode adicionar uma transação no bloco se uma
                maioria simples (50%+1) da rede concordar que aquela transação é
                legítima e correta. O nome disso é o consenso da rede
                blockchain. No caso do Bitcoin, o consenso é medido através do
                poder computacional. Duas cadeias de blocos podem ser formadas
                ao mesmo tempo, o impasse será resolvido quando a rede precisar
                escolher uma das cadeias. No final, ganha a cadeia que tiver a
                maior quantidade de trabalho.
              </p>
              <div className="contentButtons">
                <SigninButtom className="signin">Cadastre</SigninButtom>
                <ShowMoreButtom className="showMore">Saiba Mais</ShowMoreButtom>
              </div>
            </ContentItems>
            <div className="contentImage">
              <Image src={ilustration2} alt="intrutation" />
            </div>
          </SectionMain>
          <div className="contentBackgroundImage">
            <Image src={canvasBackground} alt="canvas" />
          </div>
        </div>
      </ContentSecction>
    </>
  );
};

export { Sections };
export default Sections;
