import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ReactSVG } from 'react-svg';

// icons
import uploadIcon from '../../../public/svg/upload_icon.svg';
import removeIcon from '../../../public/svg/crossed_icon.svg';
import Image from 'next/image';

const StyledDragAndDropContainer = styled.div`
  ${tw`relative my-8`}

  p.label {
    ${tw`text-lg ml-2 mb-4 font-medium`}
  }

  .imagesUploaded {
    ${tw`flex gap-3 flex-wrap mt-3`}
    width: 100%;

    .overlay {
      position: fixed;
      z-index: 11;
      top: 0;
      left: 0;
      background-color: #0000006e;
      height: 100vh;
      width: 100vw;
      display: ${props => (props.isImageOpened ? 'initial' : 'none')};
    }

    .imgContainer {
      ${tw`relative`}
      height: 100px;

      img {
        ${tw`w-auto`}
        top: 50%;
        left: 50%;
        z-index: 20;
        position: initial;
        height: 100%;
        cursor: zoom-in;
      }

      .iconContainer {
        ${tw`absolute top--2 right--2 flex items-center cursor-pointer`}
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 2px solid white;
        background-color: red;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);

        svg {
          ${tw`w-10/12 h-auto mx-auto`}
          fill: white;
          stroke: white;
        }
      }
    }
  }

  p.errorMessage {
    ${tw`text-sm absolute bottom--6 left-0`}
    color: #c40707;
    display: ${props => (props.errorMessage || !props.isDroppedFileIsImage ? 'block' : 'none')};
  }

  @media only screen and (max-width: 600px) {
    p.label {
      ${tw`mb-1`}
      font-size: 16px;
    }

    p.errorMessage {
      font-size: 10px !important;
    }
  }
`;

const StyledDragAndDropBox = styled.div`
  ${tw`w-full flex flex-col items-center justify-center `}
  height: 300px;
  background-image: ${props =>
    props.errorMessage || !props.isDroppedFileIsImage
      ? `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='rgba(196, 7, 7, 1)' stroke-width='3' stroke-dasharray='25' stroke-dashoffset='35' stroke-linecap='square'/%3e%3c/svg%3e")`
      : `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='rgba(0,0,0,0.3)' stroke-width='3' stroke-dasharray='25' stroke-dashoffset='35' stroke-linecap='square'/%3e%3c/svg%3e")`};

  box-shadow: 0px 2px 14px 4px rgba(0, 0, 0, 0);
  transition: all ease 0.5s;

  &.drag {
    box-shadow: 0px 2px 14px 4px rgba(0, 0, 0, 0.25);
  }

  svg {
    ${tw`my-4`}
    width: 30px;
    height: auto;
  }

  p {
    text-align: center !important;
    font-size: 18px;

    span {
      color: #1e31d6;
      font-weight: 600;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 14px;
    }
  }
`;

const DragAndDropBox = ({
  label,
  inputValues,
  setInputValues,
  filesPropertyName,
  filesPropertyValues,
  errorMessage,
}) => {
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const [isImageOpened, setIsImageOpened] = useState(false);
  const [isDroppedFileIsImage, setIsDroppedFileIsImage] = useState(true);

  const fileInput = useRef(null);

  const handleFileInputChange = e => {
    let uploadedFiles = Array.from(e.target.files);
    setIsDroppedFileIsImage(true);

    uploadedFiles = getImagesOnly(uploadedFiles, setIsDroppedFileIsImage);

    setInputValues({
      ...inputValues,
      [filesPropertyName]: [...filesPropertyValues, ...uploadedFiles],
    });
  };

  const handleDrop = e => {
    e.preventDefault();
    setIsDraggedOver(false);
    setIsDroppedFileIsImage(true);

    let filesDropped = Array.from(e.dataTransfer.files);

    filesDropped = getImagesOnly(filesDropped, setIsDroppedFileIsImage);

    setInputValues({
      ...inputValues,
      [filesPropertyName]: [...filesPropertyValues, ...filesDropped],
    });
  };

  const handleImageClick = e => {
    e.target.style.position = !isImageOpened ? 'fixed' : 'initial';
    e.target.style.height = !isImageOpened ? '80vh' : '100%';
    e.target.style.cursor = !isImageOpened ? 'zoom-out' : 'zoom-in';
    e.target.style.transform = !isImageOpened ? 'translate(-50%, -50%)' : 'none';

    setIsImageOpened(!isImageOpened);
  };

  const handleRemoveIconClick = e => {
    const imagesUploaded = Array.from(document.querySelectorAll('.imagesUploaded #uploadedImage'));
    const targetImage = e.currentTarget.previousElementSibling;
    const targetImageIndex = imagesUploaded.indexOf(targetImage);
    const filesUploadedWithoutTargetImage = filesPropertyValues.filter(
      (_, index) => index !== targetImageIndex,
    );
    setInputValues({
      ...inputValues,
      [filesPropertyName]: filesUploadedWithoutTargetImage,
    });
  };

  return (
    <StyledDragAndDropContainer
      isImageOpened={isImageOpened}
      errorMessage={errorMessage}
      isDroppedFileIsImage={isDroppedFileIsImage}
    >
      <p className="label">{label}</p>

      <StyledDragAndDropBox
        onDragOver={e => e.preventDefault()}
        onDragEnter={() => setIsDraggedOver(true)}
        onDragLeave={() => setIsDraggedOver(false)}
        onDrop={handleDrop}
        isDraggedOver={isDraggedOver}
        className={isDraggedOver && 'drag'}
        errorMessage={errorMessage}
        isDroppedFileIsImage={isDroppedFileIsImage}
      >
        <ReactSVG src={uploadIcon.src} />
        <p>
          Drag and Drop here <br /> or <br />{' '}
          <span onClick={() => fileInput.current.click()}>Browse files</span>
        </p>

        <input
          ref={fileInput}
          type="file"
          name="associationDocs"
          onChange={handleFileInputChange}
          accept="image/*"
          multiple
          style={{ display: 'none' }}
        />
      </StyledDragAndDropBox>

      <div className="imagesUploaded">
        {filesPropertyValues.map((file, index) => {
          const tempUrl = URL.createObjectURL(file);

          return (
            <div className="imgContainer" key={index}>
              <div className="overlay"></div>
              <img
                src={tempUrl}
                objectFit={'cover'}
                alt="uploaded image"
                id="uploadedImage"
                onClick={handleImageClick}
                onLoad={e => URL.revokeObjectURL(e.target.src)}
              />
              <div className="iconContainer" onClick={handleRemoveIconClick}>
                <ReactSVG src={removeIcon.src} />
              </div>
            </div>
          );
        })}
      </div>

      <p className="errorMessage">
        {errorMessage || (!isDroppedFileIsImage && 'Only images accepted')}
      </p>
    </StyledDragAndDropContainer>
  );
};

const getImagesOnly = (files, setIsFileImage) =>
  files.filter(file => {
    if (file.type.includes('image')) {
      return file;
    } else {
      setIsFileImage(false);
    }
  });

export default DragAndDropBox;
