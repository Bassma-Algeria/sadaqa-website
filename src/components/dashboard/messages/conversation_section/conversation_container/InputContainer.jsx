import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';

// styles
import styles from '../../../../../styles/dashboard.module.scss';

// images and icons
import sendMessageIcon from '../../../../../../public/svg/send_message_icon_filed.svg';

// socket
import {
  userIsTypingSocketEmitter,
  userStopTypingSocketEmitter,
} from '../../../../../socket/eventsEmitters/messagesEmitters';

// redux
import { sendMessage } from '../../../../../redux/actions/messagesActions';

// components
import Button from '../../../../common/buttons/Button';

const InputContainer = ({ conversationSectionFooter }) => {
  const {
    messages: {
      conversation: {
        chatParticipant: { user_id },
      },
    },
    authUser: {
      profileInfo: {
        generalInfo: { user_id: currentUserId },
      },
    },
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const [messageToSend, setMessageToSend] = useState('');

  const handleSendButtonClick = () => {
    if (messageToSend) {
      dispatch(sendMessage({ content: messageToSend, receiverId: user_id }));
      userStopTypingSocketEmitter({
        senderId: currentUserId,
        receiverId: user_id,
      });
      setMessageToSend('');
    }
  };

  return (
    <div className={styles.conversationFooter} ref={conversationSectionFooter}>
      <Input
        inputValue={messageToSend}
        setInputValue={setMessageToSend}
        handleSend={handleSendButtonClick}
      />
      <Button primary size="md" onClick={handleSendButtonClick}>
        <p>Send</p>
        <ReactSVG src={sendMessageIcon.src} />
      </Button>
    </div>
  );
};

const Input = ({ inputValue, setInputValue, handleSend }) => {
  const {
    messages: {
      conversation: {
        chatParticipant: { user_id },
      },
    },
    authUser: {
      profileInfo: {
        generalInfo: { user_id: currentUserId },
      },
    },
  } = useSelector(state => state);

  const handleMessageInputChange = e => {
    setInputValue(e.target.value);
    userIsTypingSocketEmitter({
      senderId: currentUserId,
      receiverId: user_id,
    });

    if (e.target.value === '') {
      userStopTypingSocketEmitter({
        senderId: currentUserId,
        receiverId: user_id,
      });
    }
  };

  const handleInputKeyPress = e => {
    if (inputValue && e.key === 'Enter') handleSend();
  };

  return (
    <input
      type="text"
      value={inputValue}
      placeholder="Type something ..."
      onChange={handleMessageInputChange}
      onKeyPress={handleInputKeyPress}
    />
  );
};

export default InputContainer;
