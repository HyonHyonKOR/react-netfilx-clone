import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { makeImagePath } from "../utils";
import { renderTrendingResultType } from "../service/api";

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
  top: -60px;
`;

const ModalOverview = styled.p`
  padding: 20px;
  position: relative;
  top: -60px;
  color: ${(props) => props.theme.white.lighter};
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
              <ModalImage bgphoto={makeImagePath(content.backdrop_path)} />
              <ModalTitle>{renderTrendingResultType(content)}</ModalTitle>
              <ModalOverview>{content.overview}</ModalOverview>
            </ModalContainer>
          </Overlay>
        </>
      )}
    </AnimatePresence>
  );
}
