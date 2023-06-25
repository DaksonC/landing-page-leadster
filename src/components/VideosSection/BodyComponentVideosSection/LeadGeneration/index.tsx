import { useEffect, useRef, useState } from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";
import videos from '@/server/videos.json'
import { Container, Grid } from "./styles";
import { Pagination } from "./Pagination";

export interface IVideo {
  id: number;
  title: string;
  url: string;
  previewImage: string;
}

export interface OnClickHandler {
  (video: IVideo): void;
}

function arrayChunk<T>(array: T[], size: number): T[][] {
  return array.reduce<T[][]>((chunks, item, index) => {
    if (index % size === 0) {
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
}

export function LeadGeneration() {
  const [selectedVideo, setSelectedVideo] = useState<IVideo | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 9;
  const paginatedVideos = arrayChunk(videos, videosPerPage);
  const menuRef = useRef<HTMLDivElement>(null);

  function handleCardClick(video: IVideo) {
    setSelectedVideo(video);
  }

  function handleModalClose() {
    setSelectedVideo(null);
  }

  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber);

    if (pageNumber === paginatedVideos.length) {
      menuRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    handlePageChange(1);
  }, []);

  function renderCards() {
    const currentVideos = paginatedVideos[currentPage - 1] || [];

    return currentVideos.map((video) => (
      <Card key={video.id} video={video} onClick={handleCardClick} />
    ));
  }

  return (
    <>
      <div ref={menuRef} />
      <Container>
        <Grid>{renderCards()}</Grid>
        {videos.length > videosPerPage && (
          <Pagination
            currentPage={currentPage}
            totalVideos={videos.length}
            videosPerPage={videosPerPage}
            onPageChange={handlePageChange}
          />
        )}
        {selectedVideo && (
          <Modal video={selectedVideo} onClose={handleModalClose} />
        )}
      </Container>
    </>
  );
}