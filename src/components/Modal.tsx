import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { makeImagePath } from "../utils";
import { IoIosPlay } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { SlLike, SlDislike } from "react-icons/sl";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContainer = styled(motion.div)`
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.theme.black.darker};
`;

const ModalImage = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 400px;
  background-image: linear-gradient(to top, #181818, transparent),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
`;

const ModalTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
  font-size: 32px;
  position: relative;
  top: -80px;
`;

const ModalOverview = styled.p`
  padding: 20px;
  position: relative;
  top: -60px;
  color: ${(props) => props.theme.white.lighter};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  top: -4rem;
  padding: 0 20px;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1.6rem;
  background-color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

const InfoButtons = styled.div`
  display: flex;
  gap: 0.8rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    cursor: pointer;
  }
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: any;
}

export function Modal({ isOpen, onClose, content }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && content && (
        <>
          <Overlay
            onClick={onClose}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContainer layoutId={content.id + ""}>
              <ModalImage
                bgphoto={makeImagePath(content.backdrop_path, "w1280")}
              />
              <ModalTitle>{content.title || content.name}</ModalTitle>
              <ButtonContainer>
                <PlayButton>
                  <IoIosPlay size={20} />
                  Play
                </PlayButton>
                <InfoButtons>
                  <div>
                    <IoMdAdd size={20} />
                  </div>
                  <div>
                    <SlLike size={20} />
                  </div>
                  <div>
                    <SlDislike size={20} />
                  </div>
                </InfoButtons>
              </ButtonContainer>
              <ModalOverview>{content.overview}</ModalOverview>
            </ModalContainer>
          </Overlay>
        </>
      )}
    </AnimatePresence>
  );
}
