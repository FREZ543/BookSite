
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../css/Categorie.css';
const Categorie = () => {
  return (
    <div className='Cat'>
    <FormControl fullWidth sx={{width:200,marginTop:5,marginLeft:5,color:'grey' }}>
      <InputLabel id="demo-simple-select-label">Categories</InputLabel>
      <Select
       labelId="demo-simple-select-label"
       id="demo-simple-select"
       label="Categories">
        <MenuItem value={10}>Fantasy</MenuItem>
        <MenuItem value={20}>Science Fiction</MenuItem>
        <MenuItem value={30}>Thriller</MenuItem>
        <MenuItem value={40}>History</MenuItem>
        <MenuItem value={50}>Science</MenuItem> 
      </Select>
    </FormControl>
</div>
  )
}

export default Categorie;
