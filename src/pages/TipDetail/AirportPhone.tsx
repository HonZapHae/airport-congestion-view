import styled from '@emotion/styled';
import CallIcon from '@mui/icons-material/Call';
import { TipNavbar } from '@/components/Tip/TipNavbar';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 104px;
  padding-bottom: 80px;
  gap: 24px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  background-color: #faf9fc;
  padding: 24px 20px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListTitle = styled.div`
  color: #191919;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  letter-spacing: -0.54px;
`;
const ListBody = styled.a`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const CustomCallIcon = styled(CallIcon)`
  font-size: 14px;
`;

const TelWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: start;
  align-items: center;
`;

export function AirportPhone() {
  return (
    <StyledDiv>
      <Wrapper>
        <TipNavbar title="공항상담번호" />
        <Body>
          <List>
            <ListItem>
              <ListTitle>인천국제공항</ListTitle>
              <TelWrapper>
                <CustomCallIcon />
                <ListBody href="tel:1577-2600">1577-2600</ListBody>
              </TelWrapper>
            </ListItem>
            <ListItem>
              <ListTitle>김포공항</ListTitle>
              <TelWrapper>
                <CustomCallIcon />
                <ListBody href="tel:1661-2626">1661-2626</ListBody>
              </TelWrapper>
            </ListItem>
            <ListItem>
              <ListTitle>청주공항</ListTitle>
              <TelWrapper>
                <CustomCallIcon />
                <ListBody href="tel:043-210-6315">043-210-6315</ListBody>
              </TelWrapper>
            </ListItem>
            <ListItem>
              <ListTitle>제주공항</ListTitle>
              <TelWrapper>
                <CustomCallIcon />
                <ListBody href="tel:043-210-6315">1661-2626</ListBody>
              </TelWrapper>
            </ListItem>
            <ListItem>
              <ListTitle>김해공항</ListTitle>
              <TelWrapper>
                <CustomCallIcon />
                <ListBody href="tel:1661-2626">1661-2626</ListBody>
              </TelWrapper>
            </ListItem>
            <ListItem>
              <ListTitle>대구공항</ListTitle>
              <TelWrapper>
                <CustomCallIcon />
                <ListBody href="tel:053-980-5252">053-980-5252</ListBody>
              </TelWrapper>
            </ListItem>
          </List>
        </Body>
      </Wrapper>
    </StyledDiv>
  );
}
