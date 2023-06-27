import React, { useEffect, useState } from "react";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";
import { Footer } from "../../components/Footer";
import {
  SEditCourseMainDiv,
  SCourseTitle,
  SContainer,
  SGridContainer,
  SButtonContainer,
  SAddDescButton,
} from "./EditCourse.styled";
import { Dropdown } from "../../components/Inputs/Dropdown";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { MultipleOptionDropdown } from "../../components/Inputs/MultipleOptionDropdown";
import { DateInput } from "../../components/Inputs/DateInput/DateInput";
import { Textarea } from "../../components/Inputs/Textarea";

export const EditCourse = () => {
  const { register, control, watch } = useForm();
  const [displayInputs, setDisplayInputs] = useState(false); // state to display additional inputs
  const [displayTextArea, setDisplayTextArea] = useState(false);

  // watch all input values
  const allValues = watch();

  useEffect(() => {
    // Check if first three input values are present and change boolean state
    if (allValues.course && allValues.lecturer && allValues.teaching_type) {
      setDisplayInputs(true);
    } else {
      setDisplayInputs(false);
    }
  }, [allValues]);

  return (
    <SEditCourseMainDiv>
      <FourthHeader />
      <SCourseTitle>სწავლების დამატება/რედაქტირება</SCourseTitle>
      <SContainer>
        <SGridContainer>
          <Dropdown
            name="course"
            label="მიმართულების დასახელება"
            width="18.75rem"
            placeholder="მიმართულების დასახელება"
            items={{
              1: "UI/UX დიზაინი",
              2: "Front End",
              3: "Back End",
              4: "PM",
            }}
            control={control}
          ></Dropdown>
          <MultipleOptionDropdown
            name="lecturer"
            label="ლექტორი"
            width="18.75rem"
            placeholder="ლექტორის სახელი და გვარი"
            items={{
              1: "გიორგი",
              2: "გიო",
              3: "ბექა",
              4: "სახელი გვარი",
              5: "სახელი გვარი",
              6: "სახელი გვარი",
              7: "სახელი გვარი",
              8: "სახელი გვარი",
            }}
            control={control}
          ></MultipleOptionDropdown>
          <Dropdown
            name="teaching_type"
            label="სწავლების ტიპი"
            width="18.75rem"
            placeholder=""
            items={{ 1: "პირველი", 2: "მეორე", 3: "მესამე" }}
            control={control}
          ></Dropdown>
          {displayInputs && (
            <>
              <DateInput
                name="start_date"
                label="დაწყების თარიღი"
                control={control}
                width="18.75rem"
                onSubmit={() => {}}
              ></DateInput>
              <DateInput
                name="end_date"
                label="დასრულების თარიღი"
                control={control}
                width="18.75rem"
                onSubmit={() => {}}
              ></DateInput>
              <SAddDescButton
                width="18.75rem"
                name="add_description"
                onClick={() => setDisplayTextArea(true)}
              >
                მიმართულების აღწერის დამატება
              </SAddDescButton>
            </>
          )}
        </SGridContainer>
        {displayTextArea && (
          <Textarea
            control={control}
            name="course_description"
            placeholder="ჩაწერეთ მიმართულების მოკლე აღწერა..."
          />
        )}
      </SContainer>
      <SButtonContainer>
        <Button width="15rem" height={"3rem"} secondary={"secondary"}>
          გაუქმება
        </Button>
        <Button width="15rem" height={"3rem"}>
          დამატება
        </Button>
      </SButtonContainer>
      <section>
        <SideBar />
      </section>
      <Footer />
    </SEditCourseMainDiv>
  );
};
