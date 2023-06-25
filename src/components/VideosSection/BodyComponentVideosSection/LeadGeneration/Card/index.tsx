import { IVideo, OnClickHandler } from "..";
import {
  CardContainer,
  IconPlay,
  IconPlayContainer,
  ImageOverlay,
  ImagePreview
} from "./styles";
import { FaPlay } from "react-icons/fa";

export function Card({ video, onClick }: { video: IVideo; onClick: OnClickHandler }) {
  function handleClick() {
    onClick(video);
  }

  return (
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
  );
}