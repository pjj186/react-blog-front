import React from "react";
import Responsive from "../components/common/Responsive";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtons from "../components/write/WriteActionButtons";
import EditorContainer from "../containers/write/EditorContainer";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
