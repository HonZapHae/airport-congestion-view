import React from 'react';
import styled from '@emotion/styled';
import { TipNavbar } from '../../components/Tip/TipNavbar';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  max-width: 393px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

const Body = styled.div`
display: flex;
flex-direction: column;
margin-top: 144px;
padding-bottom: 80px;
`;

const List = styled.div`
display: flex;
flex-direction: column;
gap: 14px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 8px;
  background-color: #faf9fc;
  padding: 24px 20px;
`;

const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const Label = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const Subject = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const ListSubItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 16px;
`;
const ListThirdItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 10px;
  font-size: 14px;
  line-height: 22px; 
`;

export function DepartureProcess() {
  return (
    <StyledDiv>
      <Wrapper>
        <TipNavbar title="출국 절차" />
        <Body>
          <List>
            <ListItem>
              <ListTitle>
                <Label>Step 1</Label>
                <Subject>공항 도착</Subject>
              </ListTitle>
            </ListItem>
            <ListItem>
              <ListTitle>
                <Label>Step 2</Label>
                <Subject>탑승수송 및 수하물 위탁</Subject>
              </ListTitle>
            </ListItem>
            <ListItem>
              <ListTitle>
                <Label>Step 3</Label>
                <Subject>탑승장 신원확인 및 항공권 검사</Subject>
              </ListTitle>
            </ListItem>
            <ListItem>
              <ListTitle>
                <Label>Step 4</Label>
                <Subject>보안 검색</Subject>
              </ListTitle>
            </ListItem>
            <ListItem>
              <ListTitle>
                <Label>Step 5</Label>
                <Subject>출국 심사</Subject>
              </ListTitle>
            </ListItem>
            <ListItem>
              <ListTitle>
                <Label>Step 6</Label>
                <Subject>탑승게이트 대기 및 항공기탑승</Subject>
              </ListTitle>
              <ListSubItem>
                탑승 30~40분 전까지 탑승게이트에 도착해주세요.
                <ListThirdItem>
                  인천공항의 경우 게이트 번호에 따라 탑승위치가 다를 수 있으니
                  아래 표를 참고해주세요.
                </ListThirdItem>
                <table
                  style={{
                    border: '1px solid white',
                    borderCollapse: 'collapse',
                    borderRadius: '6px',
                    overflow: 'hidden',
                  }}
                >
                  <tr
                    style={{
                      backgroundColor: '#323646',
                      color: 'white',
                      borderColor: 'none',
                    }}
                  >
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: '400',
                        padding: '6px 0',
                      }}
                    >
                      GATE
                    </th>
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: '400',
                      }}
                    >
                      1~50
                    </th>
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: '400',
                      }}
                    >
                      101~132
                    </th>
                    <th
                      style={{
                        fontSize: '12px',
                        fontWeight: '400',
                      }}
                    >
                      230~270
                    </th>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontSize: '12px',
                        textAlign: 'center',
                        background: '#EFF2FF',
                        padding: '10px 0',
                      }}
                    >
                      탑승 위치
                    </td>
                    <td
                      style={{
                        fontSize: '10px',
                        textAlign: 'center',
                        background: 'white',
                      }}
                    >
                      제1여객 터미널
                    </td>
                    <td
                      style={{
                        fontSize: '10px',
                        textAlign: 'center',
                        background: 'white',
                      }}
                    >
                      탑승동
                    </td>
                    <td
                      style={{
                        fontSize: '10px',
                        textAlign: 'center',
                        background: 'white',
                      }}
                    >
                      제2여객 터미널
                    </td>
                  </tr>
                </table>
              </ListSubItem>
            </ListItem>
          </List>
        </Body>
      </Wrapper>
    </StyledDiv>
  );
}
