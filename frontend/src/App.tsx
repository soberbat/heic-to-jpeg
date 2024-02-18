import { useState, ChangeEvent } from "react";
import axios, { AxiosResponse } from "axios";
import "./App.css";
import {
  Container,
  ConvertButton,
  ConvertedFile,
  FileInput,
  FlexContainer,
  FloatingWrap,
  InnerWrapper,
  Overlay,
  Spinner,
} from "./app.styles";

function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setConvertedFile(null);
      setErrorMessage("");
    }
  };

  const handleConvert = async () => {
    if (!selectedFile) {
      setErrorMessage("Please select a file.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response: AxiosResponse<Blob> = await axios.post(
        "https://heic-conver-api-7egxgsovaq-ew.a.run.app/convert",
        formData,
        {
          responseType: "blob",
        }
      );

      setIsLoading(false);

      if (response.status === 200) {
        setConvertedFile(response.data);
      } else {
        setErrorMessage("Conversion failed. Please try again later.");
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Container>
        <FloatingWrap>
          <InnerWrapper>
            <ConvertButton onClick={handleConvert}>Convert</ConvertButton>
            <FileInput onChange={handleFileChange} />

            {errorMessage && (
              <FlexContainer className="error">{errorMessage}</FlexContainer>
            )}

            {isLoading && (
              <FlexContainer>
                <Spinner />
              </FlexContainer>
            )}

            {convertedFile && (
              <ConvertedFile>
                <a
                  href={URL.createObjectURL(convertedFile)}
                  download="converted.jpeg"
                  className="download-link"
                >
                  Download JPEG
                </a>
              </ConvertedFile>
            )}
          </InnerWrapper>
        </FloatingWrap>
        <Overlay />
      </Container>
    </>
  );
}

export default App;
