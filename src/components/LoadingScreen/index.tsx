import { ImageLoading, LoadingScreenContainer } from "./styles";

export function LoadingScreen() {
  return (
    <LoadingScreenContainer>
      <div className="stack-loading">
        <ImageLoading src="/favicon.ico" alt="loading" />
      </div>
    </LoadingScreenContainer>
  )
}