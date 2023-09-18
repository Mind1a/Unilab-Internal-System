import styled from "styled-components";
import deleteSvg from "/assets/svg/delete.svg";
import imageUploadSvg from "/assets/svg/imageUpload.svg";
import fileUploadSvg from "/assets/svg/fileUpload.svg";
import uploadDoneSvg from "/assets/svg/uploadDone.svg";
import uploadCloudSvg from "/assets/svg/uploadCloud.svg";

export const SUploaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5.125rem;
`;

export const SInputWrapper = styled.div`
  width: ${({width})=>width ? width : "18.25rem"};
  height: ${({height})=>height ? height : "9.812rem"};
  margin: ${({margin})=>margin};
  margin-top: 3.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.187rem;
  visibility: hidden;
  cursor: default;
`;

export const SDeleteIcon = styled.div`
  width: 4.4375rem;
  height: 2.437rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  background-color: red;
  background-image: url(${deleteSvg});
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.375rem;
  cursor: pointer;
`;

export const SDownloadICon = styled.div`
  width: 4.4375rem;
  height: 2.437rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.375rem;
  cursor: pointer;
`;

export const SUploader = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23ffffff' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 0.625rem;
  cursor: pointer;
  overflow: hidden;

  ${({ active }) =>
    active &&
    `
    border: ${({isImageType})=>isImageType ? 'none' : '2px solid #2984CE'};
    &:hover {
      ${SOverlay} {
        background: rgba(255, 255, 255, 0.7);
        visibility: visible;
      }
    }
    `}
`;

export const STitle = styled.p`
  font-size: 0.75rem;
`;

export const SDesk = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  display: block;
`;

export const UploadContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
`;

export const SFileUpload = styled.div`
  position: relative;
`;

export const SCloudUpload = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;
export const SUploadFileIcon = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${fileUploadSvg});
`

export const SUploadImgIcon = styled(SUploadFileIcon)`
  background-image: url(${imageUploadSvg});
`
export const SUploadDoneIcon = styled(SUploadFileIcon)`
  background-image: url(${uploadDoneSvg});
`
export const SUploadCloudIcon = styled(SUploadFileIcon)`
  background-image: url(${uploadCloudSvg});
`