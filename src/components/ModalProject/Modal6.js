import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 440px) {
    position: relative;
    bottom: 260px;
    overflow: hidden;
  }
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 550px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  @media screen and (max-width: 808px) {
    transform: scale(0.7);
  }
  @media screen and (max-width: 580px) {
    transform: scale(0.55);
  }
  @media screen and (max-width: 440px) {
    height: 500px;
    width: 600px;
  }
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
    text-align: center;
  }
  a {
    text-align: center;
    width: 150px;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
    &:after {
      display: block;
      content: "";
      border-bottom: solid 1px #019fb6;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover:after {
      transform: scaleX(1);
    }
    &:active {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal6 = ({ showModal6, setShowModal6 }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },

    opacity: showModal6 ? 1 : 0,
    transform: showModal6 ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal6 = (e) => {
    if (modalRef.current === e.target) {
      setShowModal6(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal6) {
        setShowModal6(false);
        console.log("I pressed");
      }
    },
    [setShowModal6, showModal6]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal6 ? (
        <Background ref={modalRef} onClick={closeModal6}>
          <animated.div style={animation}>
            <ModalWrapper showModal6={showModal6}>
              <ModalImg
                src={require("./calculator.jpg")}
                alt="calculator app on laptop"
              />
              <ModalContent>
                <h1>React Calculator</h1>
                <p>
                  This project was created using html, css React JS using state
                  hooks .{" "}
                </p>
                <a
                  href="https://dylangorman.github.io/calculator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View App
                </a>
                <br></br>
                <a
                  href="https://github.com/dylangorman/calculator"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              </ModalContent>
              <CloseModalButton
                aria-label="close modal"
                onClick={() => setShowModal6((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal6;
