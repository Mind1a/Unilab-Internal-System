import React, { useState } from "react";
import { SideButton } from "../../Buttons/SideButton";
import {
  SSideDropdownWrapper,
  SSideInputSpan,
  SSideInputItemWrapper,
  SSideMainDiv,
  SSideInputItems,
  SSideArrowButton,
  SSvgLeft,
  SSideClick,
} from "./SideDropdown.styled";
import { DropArrow } from "../../DropArrow";

export const SideDropdown = ({
  id,
  children,
  path,
  label,
  items,
  LeftComponent,
  showSideBar,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SSideDropdownWrapper>
      <SSideMainDiv isOpen={isOpen}>
        <SSideClick
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <SSvgLeft to={path} aria-label={label}>
            {LeftComponent}
          </SSvgLeft>
          <SSideInputSpan>{children}</SSideInputSpan>
          <SSideArrowButton title="toggle dropdown">
            <DropArrow isOpen={isOpen} stroke={"#FFFFFF"} />
          </SSideArrowButton>
        </SSideClick>
      </SSideMainDiv>
      {isOpen && showSideBar && (
        <>
          <SSideInputItemWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {items &&
              items.map((item) => (
                <SideButton key={item.name} to={item.to}>
                  {item.name}
                </SideButton>
              ))}
          </SSideInputItemWrapper>
        </>
      )}
    </SSideDropdownWrapper>
  );
};
