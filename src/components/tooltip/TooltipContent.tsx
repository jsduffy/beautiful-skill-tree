import * as React from 'react';
import styled from 'styled-components';
// @ts-ignore
import CloseIcon from '../../images/close.svg';

type Props = {
  content: React.ReactNode;
  handleClose: () => void;
  titleContent: React.ReactElement;
};

const TooltipContent = React.memo(function({
  content,
  titleContent,
  handleClose,
}: Props) {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <React.Fragment>{titleContent}</React.Fragment>
        <img
          onClick={handleClose}
          style={{
            width: '16px',
            margin: '21px 4px auto 0',
            cursor: 'pointer',
          }}
          src={CloseIcon}
          alt="icon"
        />
      </div>
      <ContentContainer>{content}</ContentContainer>
    </React.Fragment>
  );
});

export default TooltipContent;

const ContentContainer = styled.div`
  margin: 8px 0;
`;
