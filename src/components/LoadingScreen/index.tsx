import { useEffect, useState } from "react";
import { BackgroundIsActiveLoading, ImageLoadingContent, LoadingScreenContainer } from "./styles";

export function LoadingScreen() {
  const [isActiveLoading, setIsActiveLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsActiveLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {
        isActiveLoading ? <BackgroundIsActiveLoading />
          : (
            <LoadingScreenContainer>
              <ImageLoadingContent />
              <h1>Carregando...</h1>
            </LoadingScreenContainer>
          )
      }
    </>
  )
}