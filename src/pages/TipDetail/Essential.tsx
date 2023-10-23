import React from 'react';
import styled from '@emotion/styled';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { TipNavbar } from '../../components/Tip/TipNavbar';

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
margin-top: 144px;
padding-bottom: 120px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  flex-shrink: 0;
  background: #faf9fc;
  padding: 30px 26px;
`;

const BoxColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ListCheck = styled.div`
  display: flex;
  flex-direction: column;
`;

export function Essential() {
  return (
    <StyledDiv>
      <Wrapper>
        <TipNavbar title="여행객 필수품 리스트" />
        <Body>
          <BoxContainer>
            <BoxColumn>
              <ListItem>
                <Title>여행 용품</Title>
                <ListCheck>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="여권"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="지갑"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="E-티켓 및 바우처"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="상비약"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="휴대용 선풍기"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="귀마개"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="안대"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="샤워기 필터"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="물티슈"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="보조 배터리"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="스킨, 로션"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="선크림"
                  />
                </ListCheck>
              </ListItem>
              <ListItem>
                <Title>생필품</Title>
                <ListCheck>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="폼클렌징"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="칫솔+치약"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="면도기"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="수건"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="여분의 지퍼백"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="헤어 드라기"
                  />

                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="우천용품"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="볼펜"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="립밥"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="목베개"
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        sx={{
                          '&.Mui-checked': {
                            color: '#631EC6;',
                          },
                        }}
                      />
                    )}
                    sx={{ color: '#3d3c40' }}
                    label="신발"
                  />
                </ListCheck>
              </ListItem>
            </BoxColumn>
          </BoxContainer>
        </Body>
      </Wrapper>
    </StyledDiv>
  );
}
