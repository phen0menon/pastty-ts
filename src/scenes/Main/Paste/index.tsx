import React, { useEffect } from "react";
import { RouteComponentProps, withRouter, Redirect } from "react-router";
import { fetchPaste } from "#/store/actions/editor";
import Editor from "#/scenes/Main/Editor";
import "./index.scss";
import { connect } from "react-redux";
import { StoreRootState, ExternalPaste } from "#/store/types";
import { modes, InternalModeOption } from "../Editor/util";
import _ from "lodash";

const constructPasteLink = (alias: string) => `${window.location.href}alias`;

interface PasteProps extends RouteComponentProps<{ alias: string }> {
  pasteData: ExternalPaste;
}

const Paste = (props: PasteProps) => {
  const { alias } = props.match.params;
  const { pasteData } = props;

  if (_.isEmpty(pasteData)) {
    return <Redirect to="/" />;
  }

  const currentMode: InternalModeOption = modes[pasteData.dialect];

  return (
    <div className="paste-content d-flex">
      <Editor
      // className="w-100"
      // readOnly={true}
      // mode={currentMode}
      // contents={pasteData.code}
      />

      <div className="paste-info">
        <div className="paste-info__line">
          <div>Author:</div>
          <div>{pasteData.author}</div>
        </div>
        <div className="paste-info__line">
          <div>Create at:</div>
          <div>{pasteData.creationTime}</div>
        </div>
        <div className="paste-info__line">
          <div>Description:</div>
          <div>{pasteData.description}</div>
        </div>
        <div className="paste-info__line">
          <div>Link:</div>
          <div>{constructPasteLink(alias)}</div>
        </div>
        <div className="paste-info__line">
          <div>Views:</div>
          <div>{pasteData.views}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreRootState) => ({
  pasteData: state.editor.pasteData as (ExternalPaste),
});

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(Paste),
);
