import styled from '@emotion/styled';
import ParkinRecipt from '@/resources/icons/icon-parking-recipt.png';

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

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 20px;
  font-weight: 900;
`;

const IconRecipt = styled.img`
width: 16px;
height: 22px;

`;

const CustomTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #f4f4f4;
`;
const CustomTableHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #f4f4f4 ;
`;

const CustomTableHeaderCell = styled.div`
  background-color: #f0ebf8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #9837f9;
  font-size: 14px;
  font-weight: 700;
  box-sizing: border-box;
`;

const CustomTableCell = styled.div`
  background-color: #faf9fc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const CustomTableRow = styled.div`
background-color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const CustomTableCol = styled.div`
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BadgeWrapper = styled.div`
  display: flex;
  width: 72px;
  height: fit-content;
  justify-content: right;
`;

const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  font-size: 11px;
  color: white;
  background-color: #9837f9;
  border-radius: 6px;
`;

const BadgeLight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  font-size: 11px;
  color: white;
  background-color: #bb8cff;
  border-radius: 6px;
`;

export default function ParkingPrice() {
  return (
    <StyledDiv>
      <Wrapper>
        <Body>
          <Title>
            <IconRecipt src={ParkinRecipt} alt="parking" />
            주차요금 안내
          </Title>
          <CustomTable>
            <CustomTableHeader>
              <CustomTableHeaderCell
                style={{ borderRight: '1px solid #f4f4f4' }}
              >
                구분
              </CustomTableHeaderCell>
              <CustomTableHeaderCell>요금</CustomTableHeaderCell>
            </CustomTableHeader>
            <CustomTableRow>
              <CustomTableRow>
                <CustomTableCell
                  style={{
                    color: '#9837f9',
                    fontWeight: '600',
                    fontSize: '14px',
                    boxShadow: 'none',
                  }}
                >
                  단기
                </CustomTableCell>
                <CustomTableCell
                  style={{
                    color: '#787878',
                    fontWeight: '600',
                    fontSize: '14px',
                    border: '1px solid #f4f4f4',
                    borderTop: '0',
                  }}
                >
                  소형
                </CustomTableCell>
              </CustomTableRow>
              <CustomTableCol>
                <CustomTableCell
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    paddingTop: '20px',
                    paddingBottom: '6px',
                    gap: '8px',
                  }}
                >
                  <BadgeWrapper>
                    <Badge>기본 30분</Badge>
                  </BadgeWrapper>
                  1,200원
                </CustomTableCell>
                <CustomTableCell
                  style={{
                    boxShadow: 'none',
                    fontSize: '14px',
                    fontWeight: '700',
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    gap: '8px',
                  }}
                >
                  <BadgeWrapper>
                    <BadgeLight>추가 15분</BadgeLight>
                  </BadgeWrapper>
                  6,400원
                </CustomTableCell>
                <CustomTableCell
                  style={{
                    boxShadow: 'none',
                    fontSize: '14px',
                    fontWeight: '700',
                    paddingTop: '6px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid #f4f4f4',
                    gap: '8px',
                  }}
                >
                  <BadgeWrapper>
                    <BadgeLight>1일</BadgeLight>
                  </BadgeWrapper>
                  24,000원
                </CustomTableCell>
              </CustomTableCol>
            </CustomTableRow>
            <CustomTableRow>
              <CustomTableRow>
                <CustomTableCell
                  style={{
                    color: '#9837f9',
                    fontWeight: '600',
                    fontSize: '14px',
                    boxShadow: 'none',
                  }}
                >
                  장기
                </CustomTableCell>
                <CustomTableCol>
                  <CustomTableCell
                    style={{
                      color: '#787878',
                      fontWeight: '600',
                      fontSize: '14px',
                      borderLeft: '1px solid #f4f4f4',
                      borderRight: '1px solid #f4f4f4',
                    }}
                  >
                    소형
                  </CustomTableCell>
                  <CustomTableCell
                    style={{
                      color: '#787878',
                      fontWeight: '600',
                      fontSize: '14px',
                      border: '1px solid #f4f4f4',
                      borderBottom: '0',
                    }}
                  >
                    대형
                  </CustomTableCell>
                </CustomTableCol>
              </CustomTableRow>
              <CustomTableCol>
                <CustomTableCol>
                  <CustomTableCell
                    style={{
                      boxShadow: 'none',
                      fontSize: '14px',
                      fontWeight: '700',
                      paddingTop: '20px',
                      paddingBottom: '6px',
                      gap: '8px',
                    }}
                  >
                    <BadgeWrapper>
                      <Badge>1시간</Badge>
                    </BadgeWrapper>
                    1,200원
                  </CustomTableCell>
                  <CustomTableCell
                    style={{
                      boxShadow: 'none',
                      fontSize: '14px',
                      fontWeight: '700',
                      paddingTop: '6px',
                      paddingBottom: '20px',
                      borderBottom: '1px solid #f4f4f4',
                      gap: '8px',
                    }}
                  >
                    <BadgeWrapper>
                      <BadgeLight>1일</BadgeLight>
                    </BadgeWrapper>
                    6,400원
                  </CustomTableCell>
                </CustomTableCol>
                <CustomTableCol>
                  <CustomTableCell
                    style={{
                      boxShadow: 'none',
                      fontSize: '14px',
                      fontWeight: '700',
                      paddingTop: '20px',
                      paddingBottom: '6px',
                      gap: '8px',
                    }}
                  >
                    <BadgeWrapper>
                      <Badge>30분</Badge>
                    </BadgeWrapper>
                    1,200원
                  </CustomTableCell>
                  <CustomTableCell
                    style={{
                      boxShadow: 'none',
                      fontSize: '14px',
                      fontWeight: '700',
                      paddingTop: '6px',
                      paddingBottom: '20px',
                      gap: '8px',
                    }}
                  >
                    <BadgeWrapper>
                      <BadgeLight>
                        1일
                      </BadgeLight>
                    </BadgeWrapper>
                    6,400원
                  </CustomTableCell>
                </CustomTableCol>
              </CustomTableCol>
            </CustomTableRow>
          </CustomTable>
        </Body>
      </Wrapper>
    </StyledDiv>
  );
}
