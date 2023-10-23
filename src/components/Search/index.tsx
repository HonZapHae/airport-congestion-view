import React, { useState } from 'react';

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
import { Wrapper, WrapperFake } from './styled';
import {
  AIRPORT_CODE,
  AIRPORT_INDEX,
  AIRPORT_NM,
  AirportCodeType,
  AirportIndexType,
  AirportNmType,
  AirportParkingType,
} from '../../constant';

type ListItemType = {
    code: string;
    name: string;
};

type SearchProps = {
  onAirportSelect: (airportCode: AirportCodeType) => void,
  options: ListItemType[],
}

export default function Search({ onAirportSelect, options }: SearchProps) {
  const [values, setValues] = useState<string>(AIRPORT_NM.INCHEON);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // 현재 상태의 반대 값을 설정합니다.
  };

  const handleAirportClick = (airportCode: AirportCodeType) => {
    onAirportSelect(airportCode);
    setValues(options.find(((v) => v.code === airportCode))?.name || '');
  };

  return (
    <Wrapper>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
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
          {/* <WrapperFake onClick={toggleDropdown} /> */}
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
            {options.map((airport) => {
              const labelId = `checkbox-list-secondary-label-${airport.code}`;
              return (
                <ListItem
                  key={airport.code}
                  sx={{ width: 'auto', backgroundColor: '#FAF9FC' }}
                  onClick={() => {
                    handleAirportClick(airport.code as AirportCodeType);
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
                    <ListItemText id={labelId} primary={`${airport.name}`} />
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
