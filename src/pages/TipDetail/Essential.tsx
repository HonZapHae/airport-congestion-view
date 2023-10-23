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

export function Essential() {
  return (
    <StyledDiv>
      <Wrapper>
        <TipNavbar title="여행객 필수품 리스트" />
        <Body>
          <BoxContainer>
            <FormGroup>
              <FormControlLabel
                control={(
                  <Checkbox
                    sx={{
                      '&.Mui-checked': {
                        color: '#631EC6;',
                      },
                    }}
                    defaultChecked
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
                label="신분증"
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
                label="항공티켓"
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
                label="바우처"
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
                label="의류"
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
                label="속옷+양말"
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
                label="모자"
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
                label="에어팟"
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
                label="충전기"
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
                label="보조배터리"
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
            </FormGroup>
          </BoxContainer>
        </Body>
      </Wrapper>
    </StyledDiv>
  );
}
