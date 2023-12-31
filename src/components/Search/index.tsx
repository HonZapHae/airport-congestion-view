import { useState } from 'react';

import {
  List, ListItem, ListItemAvatar, ListItemButton, ListItemText,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { Wrapper, WrapperFake, Container } from './styled';
import { ListItemType } from '@/constants';

type SearchProps = {
  onAirportSelect: (airport: ListItemType) => void,
  options: ListItemType[],
}

export default function Search({ onAirportSelect, options }: SearchProps) {
  const [values, setValues] = useState<string>(options[0].name);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // 현재 상태의 반대 값을 설정합니다.
  };

  const handleAirportClick = (airport: ListItemType) => {
    onAirportSelect(airport);
    const value = options.find(((v) => v.code === airport.code && (v.terminal === undefined || v.terminal === airport.terminal)))?.name || '';
    setValues(value);
  };

  return (
    <Wrapper>
      <Container>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            boxShadow: 'none',
            border: '1px solid #DBDBDB',
            '&:hover': { border: '1px solid #631EC6' },
            '&:focus': { border: '1px solid #631EC6' },
            '&:active': { border: '1px solid #631EC6' },
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
        {isOpen ? (
          <>
            <WrapperFake onClick={toggleDropdown} />
            <List
              dense
              sx={{
                flexDirection: 'column',
                maxWidth: '468px',
                width: '500px',
                bgcolor: 'background.paper',
                padding: '12px 0',
                // paddingTop: '12px',
                position: 'absolute',
                top: '76px',
                backgroundColor: '#FAF9FC',
                borderRadius: '0 0 6px 6px',
                overflow: 'hidden',
                zIndex: '999999',
                boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.05)',
              }}
            >
              {options.map((airport) => {
                const labelId = `checkbox-list-secondary-label-${airport.code}`;
                return (
                  <ListItem
                    key={`${airport.code}${airport.terminal || ''}`}
                    sx={{
                      width: 'auto',
                      backgroundColor: '#FAF9FC',
                      '&:hover': {
                        backgroundColor: '#fcfbff',
                      },
                    }}
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
                        <NorthWestIcon
                          sx={{ width: '18px', color: '#CAD1D9' }}
                        />
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
      </Container>
    </Wrapper>
  );
}
