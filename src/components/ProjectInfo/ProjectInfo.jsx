import { Link } from "react-router-dom";
import {
  SProjectInfoContainer,
  SDateDiv,
  SProjectInfoDiv,
  SImage,
  STitleAndRoleDiv,
  SProjectTitle,
  SProjectRole,
  SProjectStatus,
  SProjectDescription,
  SArrowButton,
  SInlineTextDiv,
} from "./ProjectInfo.styled";

const FINAL_STATUS = "საფინალო პროექტი";

export const ProjectInfo = ({ projectObj }) => {
  return (
    <SProjectInfoContainer>
      <SDateDiv>
        {projectObj.startDate} - {projectObj.endDate}
      </SDateDiv>
      <SProjectInfoDiv>
        <SImage src={projectObj.image} alt={projectObj.title} />
        <div>
          <SInlineTextDiv>
            <STitleAndRoleDiv>
              <SProjectTitle>{projectObj.title}</SProjectTitle>
              <SProjectRole>{projectObj.role}</SProjectRole>
            </STitleAndRoleDiv>
            <SProjectStatus isFinalProject={projectObj.status === FINAL_STATUS}>
              #{projectObj.status}
            </SProjectStatus>
          </SInlineTextDiv>
          <SProjectDescription>{projectObj.description}</SProjectDescription>
        </div>
        <Link to={projectObj.url}>
          <SArrowButton isFinalProject={projectObj.status === FINAL_STATUS}>
            სრულად
          </SArrowButton>
        </Link>
      </SProjectInfoDiv>
    </SProjectInfoContainer>
  );
};
