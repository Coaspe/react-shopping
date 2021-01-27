import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
export const Wrapper = styled.div`
    margin: 40px;
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
` //백틱으로 컴포넌트 넘겨주기가 가능하다.