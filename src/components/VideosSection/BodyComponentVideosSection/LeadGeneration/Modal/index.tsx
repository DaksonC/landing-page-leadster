import { IVideo } from "..";
import { ModalContainer, ModalOverlay } from "./styles";

export function Modal({ video, onClose }: { video: IVideo; onClose: () => void }) {
  function handleClose() {
    onClose();
  }

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContainer>
        <h1>Modal</h1>
        <h2>{video.title}</h2>
        <iframe src={video.url} title={video.title} allowFullScreen />
      </ModalContainer>
    </ModalOverlay>
  );
}