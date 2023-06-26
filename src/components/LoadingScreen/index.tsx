import { ImageLoadingContent, LoadingScreenContainer } from "./styles";

export function LoadingScreen() {
  return (
    <LoadingScreenContainer>
      <ImageLoadingContent />
      <h1>Carregando...</h1>
    </LoadingScreenContainer>
  )
}