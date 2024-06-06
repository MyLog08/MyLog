import styled from 'styled-components';

export const DetailEditSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  padding: 20px;

  & > div {
    margin-bottom: 20px;
  }
  input[type='text'],
  textarea {
    width: 700px;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    font-family: ${({ theme }) => theme.fonts.bold};
    margin-top: 5px;
    caret-color: ${({ theme }) => theme.colors.primary};
    transition: box-shadow 0.3s ease-in-out;

    &::placeholder {
      color: ${({ theme }) => theme.colors.primary};
      font-family: ${({ theme }) => theme.fonts.bold};
    }

    &:hover,
    &:focus {
      box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
      outline-color: ${({ theme }) => theme.colors.primary};
    }
  }

  textarea {
    resize: vertical;
    min-height: 150px;
  }
`;

export const PostImageGrid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const DetailTitle = styled.div`
  width: 700px;
`;

export const PostImageTitle = styled.div``;
// 이미지 프리뷰 스타일링
export const PreviewContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  width: fit-content;
  height: fit-content;
  transition: box-shadow 0.3s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  img {
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.regular};
  }
`;

// 파일 업로드 버튼 스타일링
export const FileInput = styled.input`
  display: none;
`;

export const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px auto 20px auto;
  margin-bottom: 20px;
  width: 700px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary};
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledInput = styled.input`
  display: none;
`;

export const SelectFileButton = styled.label`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground};
  }
`;

export const FileNameDisplay = styled.span`
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-top: 5px;
  > p {
    font-family: ${({ theme }) => theme.fonts.bold};
  }
`;

export const FileInputContainer = styled.label`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  input[type='file'] {
    display: none;
  }
  > p {
    ${({ theme }) => theme.fonts.bold};
  }
`;

export const CustomFileInput = styled.label`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground};
  }
`;

// 이미지 영역 스타일링
export const ImageArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

// 수정 버튼 영역 스타일링
export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
