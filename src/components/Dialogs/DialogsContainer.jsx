
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs"
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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


export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect) (Dialogs);
