import Button from 'react-bootstrap/Button';
import { HomeButtonStyles } from '../styles/HomeButton.styles';

export const HomeButton = ({buttonClicked}) => {
    return (
        <HomeButtonStyles.ButtonWrapper>
            <Button className="custom-button" variant="primary">둘러보기</Button>{' '}
        </HomeButtonStyles.ButtonWrapper>
    )
}
