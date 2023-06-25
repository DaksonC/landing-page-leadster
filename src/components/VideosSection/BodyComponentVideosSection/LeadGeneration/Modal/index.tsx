import {
  ModalBody,
  ModalContainer,
  ModalContainerDownload,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "./styles";
import { IVideo } from "..";
import { AiOutlineCloudDownload } from "react-icons/ai";

export function Modal({ video, onClose }: { video: IVideo; onClose: () => void }) {
  function handleClose() {
    onClose();
  }

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContainer>
        <ModalHeader>
          <button onClick={handleClose}>x</button>
          <h4><span>Webinar: </span>{video.title}</h4>
        </ModalHeader>
        <ModalBody>
          <iframe src={video.url} title={video.title} />
        </ModalBody>
        <ModalFooter>
          <h5>Descrição</h5>
          <p>{video.description}</p>
          <h5>Downloads</h5>
          <div className="download__icons">
            <div className="spreadsheet">
              <AiOutlineCloudDownload
                style={{
                  marginRight: "5px",
                  color: "#092B00",
                  backgroundColor: "transparent"
                }}
                size={20}
              />
              <button>Spreadsheet.xls</button>
            </div>
            <div className="document">
              <AiOutlineCloudDownload
                style={{
                  marginRight: "5px",
                  color: "#001529",
                  backgroundColor: "transparent"
                }}
                size={20}
              />
              <button>Presentation.ppt</button>
            </div>
            <div className="presentation">
              <AiOutlineCloudDownload
                style={{
                  marginRight: "5px",
                  color: "#f0660a",
                  backgroundColor: "transparent"
                }}
                size={20}
              />
              <button>Presentation.ppt</button>
            </div>
          </div>
        </ModalFooter>
      </ModalContainer>
      <ModalContainerDownload>
        <div className="download__icons">
          <div className="spreadsheet">
            <AiOutlineCloudDownload
              style={{
                marginRight: "5px",
                color: "#092B00",
                backgroundColor: "transparent"
              }}
              size={20}
            />
            <button>Spreadsheet.xls</button>
          </div>
          <div className="document">
            <AiOutlineCloudDownload
              style={{
                marginRight: "5px",
                color: "#001529",
                backgroundColor: "transparent"
              }}
              size={20}
            />
            <button>Presentation.ppt</button>
          </div>
          <div className="presentation">
            <AiOutlineCloudDownload
              style={{
                marginRight: "5px",
                color: "#f0660a",
                backgroundColor: "transparent"
              }}
              size={20}
            />
            <button>Presentation.ppt</button>
          </div>
          <div className="folder">
            <AiOutlineCloudDownload
              style={{
                marginRight: "5px",
                color: "#1f0a4e",
                backgroundColor: "transparent"
              }}
              size={20}
            />
            <button>Presentation.ppt</button>
          </div>
        </div>
      </ModalContainerDownload>
    </ModalOverlay>
  );
}