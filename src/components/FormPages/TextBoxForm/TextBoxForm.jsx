import { useState } from "react";
import { FormHeader } from "../FormHeader/FormHeader"
import { useForm } from "react-hook-form";
import { TextareaAnswer } from "../../TextareaAnswer";
import { SFormContainer } from "../CheckboxForm/CheckboxForm.styled";
import { STextboxDiv } from "./TextBoxForm.styled";

export const TextBoxForm = ({
  formIndex,
  handleRemoveForm,
  indexedFormTypes,
  handleFormTypeChange
}) => {
  const [questionTypeId, setQuestionTypeId] = useState(3); // Temporary code
  const { control } = useForm(); // just a test code for textarea

  const setFormType = (newFormTypeId) =>{
    handleFormTypeChange(formIndex, newFormTypeId);
  }

  return (
    <SFormContainer>
      <FormHeader
        indexedFormTypes={indexedFormTypes}
        setFormType={setFormType}
        questionTypeId={questionTypeId}
        setQuestionTypeId={setQuestionTypeId}
        handleRemoveForm={handleRemoveForm}
      />
      <STextboxDiv>
        <h3>პასუხი:</h3>
        <TextareaAnswer control={control} name="textAnswer" />
      </STextboxDiv>
    </SFormContainer>
  );
}
