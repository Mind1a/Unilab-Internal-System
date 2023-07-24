import React, { useEffect, useState } from "react";
import {
  SDeleteButtonContainer,
  SDuplicateButtonContainer,
  SDuplicateDeleteButtons,
} from "./DuplicateDeleteButtons.styled";

const buttonId = "duplicateButton";

export const DuplicateDeleteButtons = ({
  handleRemoveForm,
  handleCopyForm,
}) => {
  const [isClicked, setisClicked] = useState(false);
  const srcDuplicate = isClicked
    ? "assets/svg/duplicateClicked.svg"
    : "assets/svg/duplicate.svg";
  console.log(isClicked);
  useEffect(() => {
    const handleDesignChange = (e) => {
      if (e.target.id !== buttonId) {
        console.log("A");
        setisClicked(false);
      }
    };

    window.addEventListener("click", handleDesignChange);
    return () => {
      window.removeEventListener("click", handleDesignChange);
    };
  }, [isClicked]);
  return (
    <SDuplicateDeleteButtons>
      <SDuplicateButtonContainer>
        <img
          id={buttonId}
          src={srcDuplicate}
          alt="Duplicate Form"
          onClick={() => {
            handleCopyForm;
            setisClicked(!isClicked);
          }}
        />
      </SDuplicateButtonContainer>
      <SDeleteButtonContainer>
        <img src="assets/svg/delete.svg" alt="" onClick={handleRemoveForm} />
      </SDeleteButtonContainer>
    </SDuplicateDeleteButtons>
  );
};
