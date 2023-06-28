import {
  CardContainer,
  IconPlay,
  IconPlayContainer,
  ImageOverlay,
  ImagePreview
} from "./styles";
import { FaPlay } from "react-icons/fa";
import { IVideo, OnClickHandler } from "..";
import { AnimatePresence, motion } from "framer-motion";

export function Card({ video, onClick }: { video: IVideo; onClick: OnClickHandler }) {
  function handleClick() {
    onClick(video);
  }

  return (
    <AnimatePresence initial={true} >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        style={{ backgroundColor: "transparent" }}
      >
        <CardContainer onClick={handleClick}>
          <IconPlayContainer>
            <ImagePreview src={video.previewImage} alt={video.title} />
            <ImageOverlay />
            <h3>{video.title}</h3>
            <IconPlay>
              <FaPlay style={{ backgroundColor: "transparent" }} />
            </IconPlay>
          </IconPlayContainer>
        </CardContainer>
      </motion.div>
    </AnimatePresence>
  );
}