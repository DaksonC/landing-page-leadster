import { Container } from "./styles";

interface IPagination {
  currentPage: number;
  totalVideos: number;
  videosPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

export function Pagination({
  currentPage,
  totalVideos,
  videosPerPage,
  onPageChange,
}: IPagination) {
  const totalPages = Math.ceil(totalVideos / videosPerPage);

  function handlePageClick(pageNumber: number) {
    onPageChange(pageNumber);
  }

  return (
    <Container>
      <p>Página</p>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          className={currentPage === pageNumber ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}
    </Container>
  );
}