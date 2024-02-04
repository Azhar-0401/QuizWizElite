import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, FormControl, InputLabel, MenuItem, Rating, Select } from '@mui/material';

const customTestList = [{
  testName: "Custom Test 1",
  desc: "Custom Test 1 Description"
}, {
  testName: "Custom Test 2",
  desc: "Custom Test 2 Description"
}, {
  testName: "Custom Test 3",
  desc: "Custom Test 3 Description"
}, {
  testName: "Custom Test 4",
  desc: "Custom Test 4 Description"
}, {
  testName: "Custom Test 5",
  desc: "Custom Test 5 Description"
},
]

const allTestList = [{
  testName: "Test 1",
  desc: "Test 1 Description",
  rating: 2
}, {
  testName: "Test 2",
  desc: "Test 2 Description",
  rating: 4
}, {
  testName: "Test 3",
  desc: "Test 3 Description",
  rating: 1
}, {
  testName: "Test 4",
  desc: "Test 4 Description",
  rating: 1
}, {
  testName: "Test 5",
  desc: "Test 5 Description",
  rating: 4.5
}, {
  testName: "Test 6",
  desc: "Test 6 Description",
  rating: 1.5
}, {
  testName: "Test 7",
  desc: "Test 6 Description",
  rating: 3
}, {
  testName: "Test 8",
  desc: "Test 6 Description",
  rating: 3.5
}, {
  testName: "Test 9",
  desc: "Test 6 Description",
  rating: 4
}, {
  testName: "Test 10",
  desc: "Test 10 Description",
  rating: 2.3
}
]

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function TeacherHome() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState('');

  const handleChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <div className='flex flex-col lg:flex-row justify-between text-gray-800'>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Button variant='contained' sx={{ mt: 3, mb: 2, ml: 3 }} href='/custom-test-create'>Create New Custom Test</Button>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography sx={{ mt: 4, mb: 2, ml: 3 }} variant="h6" component="div">
              Your Custom Tests
            </Typography>
            <Demo>
              <List dense={dense}>
                {
                  customTestList.map((item, index) => {
                    return (<ListItem
                      className='hover:bg-gray-200 cursor-pointer'
                      secondaryAction={
                        <>
                          <IconButton edge="end" aria-label="delete">
                            <EditIcon />
                          </IconButton>
                          <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                          </IconButton>
                        </>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.testName}
                        secondary={item.desc}
                      />
                    </ListItem>
                    )
                  })
                }
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, maxWidth: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <Typography sx={{ mt: 4, mb: 2, ml: 3 }} variant="h6" component="div">
              <div className='flex flex-wrap justify-between'>
                <div>All Tests</div>
                <div>
                  <FormControl sx={{ width: "300px" }}>
                    <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={difficulty}
                      label="difficulty"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Very Easy</MenuItem>
                      <MenuItem value={20}>Easy</MenuItem>
                      <MenuItem value={30}>Moderate</MenuItem>
                      <MenuItem value={40}>Hard</MenuItem>
                      <MenuItem value={50}>Very Hard</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </Typography>
            <Demo>
              <List dense={dense}>
                {
                  allTestList.map((item, index) => {
                    return (<ListItem
                      className='hover:bg-gray-200 cursor-pointer'
                      secondaryAction={
                        <Rating name="size-small" defaultValue={item.rating} size="small" />
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.testName}
                        secondary={item.desc}
                      />
                    </ListItem>
                    )
                  })
                }
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}