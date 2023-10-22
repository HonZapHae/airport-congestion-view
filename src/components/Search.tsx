import React, { useState } from 'react';
import styled from '@emotion/styled';

import {
  Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import FlightLandIcon from '@mui/icons-material/FlightLand';

interface SearchProps {
  onAirportSelect: (airportName: string) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  position: fixed;
  top: 16px;
`;

const WrapperFake = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: transparent;

`;

export default function Search({ onAirportSelect }: SearchProps) {
  const [values, setValues] = useState('김포국제공항');
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValues(event.target.value);
  // };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // 현재 상태의 반대 값을 설정합니다.
  };

  const [selectedAirport, setSelectedAirport] = useState<string | null>(null);

  const handleAirportClick = (airport: string) => {
    setSelectedAirport(airport);
    onAirportSelect(airport);
    setValues(airport);
  };

  const airportList = [
    '김포국제공항',
    '인천국제공항',
    '청주국제공항',
    '제주국제공항',
    '김포공항',
    '김포공항',
  ];

  return (
    <Wrapper>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',

          alignItems: 'center',
          boxShadow: 'none',
          border: '1px solid #DBDBDB',
          '&:hover': { border: '1px solid #631EC6' },
        }}
        onClick={toggleDropdown}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <ArrowBackIosIcon />
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color: '#631EC6',
            fontWeight: '600',
            boxShadow: 'none',
          }}
          placeholder="공항을 변경할 수 있어요"
          inputProps={{ 'aria-label': 'search google maps' }}
          value={values}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {/* window Render */}
      {/* <Box
        sx={{
          width: '100%',
          height: 400,
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        <FixedSizeList
          height={400}
          width={360}
          itemSize={46}
          itemCount={6}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box> */}
      {isOpen ? (
        <>
          <WrapperFake onClick={toggleDropdown} />
          <List
            dense
            sx={{
              flexDirection: 'column',
              width: '100%',
              bgcolor: 'background.paper',
              padding: '0',
              position: 'absolute',
              top: '50px',
              backgroundColor: '#FAF9FC',
              borderRadius: '0 0 6px 6px',
              overflow: 'hidden',
              zIndex: '4444',
            }}
          >
            {airportList.map((airport) => {
              const labelId = `checkbox-list-secondary-label-${airport}`;
              return (
                <ListItem
                  key={airport}
                  sx={{ width: 'auto', backgroundColor: '#FAF9FC' }}
                  onClick={() => {
                    handleAirportClick(airport);
                    toggleDropdown();
                  }}
                  secondaryAction={(
                    <IconButton
                      type="button"
                      sx={{ p: '10px' }}
                      aria-label="search"
                    >
                      <NorthWestIcon sx={{ width: '18px', color: '#CAD1D9' }} />
                    </IconButton>
                  )}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemAvatar>
                      {/* <Avatar
                        alt={`Avatar n°${airport + 1}`}
                        src=""
                        sx={{ backgroundColor: '#F6EFFF' }}
                      /> */}
                      <IconButton
                        type="button"
                        sx={{ p: '10px', backgroundColor: '#F6EFFF' }}
                        aria-label="search"
                      >
                        <FlightLandIcon sx={{ color: '#CFB4F6' }} />
                      </IconButton>
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={`${airport}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </>
      ) : null}
    </Wrapper>
  );
}
