import React from "react";
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs"

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: (body) => {
      dispatch(sendMessageCreator(body));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);