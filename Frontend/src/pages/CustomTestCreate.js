import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function CustomTestCreate() {
  const [questions, setQuestions] = React.useState([{ name: '', category: '', difficulty: '', timeTaken: '' }]);
  const categories = ["Physics", "Chemistry", "Biology", "Mathematics", "Aptitudes"];
  const difficultyOptions = ["Very Easy", "Easy", "Moderate", "Hard", "Very Hard"];
  const timeTakenOptions = ["1 min", "2 min", "<= 5 min", "<= 10 min", "<= 15 min", "<= 20 min", "<= 30 min"];

  const handleAddQuestion = () => {
    setQuestions([...questions, { name: '', category: '', difficulty: '', timeTaken: '' }]);
  };

  const handleDeleteQuestion = () => {
    setQuestions(questions.slice(0, -1));
  };

  const handleChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };
  const handleChangeA = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };
  const handleChangeB = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };
  const handleChangeC = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };
  const handleChangeD = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  return (
    <div className='p-5 lg:px-20 text-gray-800'>
      <Typography variant="h5" gutterBottom>
        Add Custom Test
      </Typography>

      {questions.map((question, index) => (
        <Grid container spacing={4} sx={{ mb: 6 }} key={index}>
          <Grid item xs={12}>
            <TextField
              required
              id={`question-name-${index}`}
              name={`question-name-${index}`}
              label="Write Question Here"
              fullWidth
              variant="standard"
              value={question.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id={`option-one-${index}`}
              name={`option-one-${index}`}
              label="Option A"
              fullWidth
              variant="standard"
              value={question.optionOne}
              onChange={(e) => handleChangeA(index, 'option-one', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id={`option-two-${index}`}
              name={`option-two-${index}`}
              label="Option B"
              fullWidth
              variant="standard"
              value={question.optionTwo}
              onChange={(e) => handleChangeB(index, 'option-two', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id={`option-three-${index}`}
              name={`option-three-${index}`}
              label="Option C"
              fullWidth
              variant="standard"
              value={question.optionThree}
              onChange={(e) => handleChangeC(index, 'option-three', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id={`option-four-${index}`}
              name={`option-four-${index}`}
              label="Option D"
              fullWidth
              variant="standard"
              value={question.optionFour}
              onChange={(e) => handleChangeD(index, 'option-four', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor={`category-${index}`}>Select Category *</InputLabel>
              <Select
                required
                labelId={`category-label-${index}`}
                id={`category-${index}`}
                name={`category-${index}`}
                value={question.category}
                onChange={(e) => handleChange(index, 'category', e.target.value)}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor={`difficulty-${index}`}>Select Difficulty *</InputLabel>
              <Select
                required
                labelId={`difficulty-label-${index}`}
                id={`difficulty-${index}`}
                name={`difficulty-${index}`}
                value={question.difficulty}
                onChange={(e) => handleChange(index, 'difficulty', e.target.value)}
              >
                {difficultyOptions.map((difficulty) => (
                  <MenuItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor={`time-${index}`}>Select Time Taken *</InputLabel>
              <Select
                required
                labelId={`time-label-${index}`}
                id={`time-${index}`}
                name={`time-${index}`}
                value={question.time}
                onChange={(e) => handleChange(index, 'time', e.target.value)}
              >
                {timeTakenOptions.map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      ))
      }

      <div className='flex justify-between'>
        <Button variant='contained' sx={{ mt: 3, mb: 2 }} onClick={handleAddQuestion}>
          Add New Question
        </Button>
        <Button variant='contained' color='error' sx={{ mt: 3, mb: 2 }} onClick={handleDeleteQuestion}>
          Delete Question
        </Button>
      </div>
      <Button variant='contained' color='success' sx={{ mt: 3, mb: 2 }} onClick={handleDeleteQuestion}>
        Add Test
      </Button>
    </div >
  );
}
