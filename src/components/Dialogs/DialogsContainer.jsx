
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
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);