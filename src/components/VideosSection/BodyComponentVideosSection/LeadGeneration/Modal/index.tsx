import {
  ModalBody,
  ModalContainer,
  ModalContainerDownload,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "./styles";
import { IVideo } from "..";
import { useState } from "react";
import YouTube from "react-youtube";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

export function Modal({ video, onClose }: { video: IVideo; onClose: () => void }) {
  const [isVideoReady, setIsVideoReady] = useState(false);

  function handleClose() {
    onClose();
  }

  const youtubeVideoId = extractYouTubeVideoId(video.url);

  function extractYouTubeVideoId(url: string) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch(?:\/|\?v=)|embed\/|v\/))([^\s?&]+)/);
    return match?.[1] || "";
  }

  const youtubePlayerOptions = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1
    }
  }

  function handleVideoReady() {
    setIsVideoReady(true);
  }

  return (
    <AnimatePresence>
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleClose}
        />
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ModalOverlay onClick={handleClose}>
            <ModalContainer>
              <ModalHeader>
                <button onClick={handleClose}>x</button>
                <h4><span>Webinar: </span>{video.title}</h4>
              </ModalHeader>
              <ModalBody>
                {
                  youtubeVideoId &&
                  <YouTube
                    videoId={youtubeVideoId}
                    opts={youtubePlayerOptions}
                    onReady={handleVideoReady}
                  />
                }
                {
                  !isVideoReady &&
                  <div className="loading">Carregando...</div>
                }
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
                    <button>Document.doc</button>
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
                  <button>Document.doc</button>
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
                  <button>Folder.zip</button>
                </div>
              </div>
            </ModalContainerDownload>
          </ModalOverlay>
        </motion.div>
      </>
    </AnimatePresence>
  );
}