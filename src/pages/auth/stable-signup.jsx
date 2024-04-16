import {
  Avatar,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const StableSignUp = () => {
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: 600 }}
    >
      <Avatar src="/avatar.svg" alt="Avatar" sx={{ width: 80, height: 80, marginBottom: 2 }} />
      <Typography variant="h5" gutterBottom>
        Stable Sign Up
      </Typography>
      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
      >
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="DOB"
          variant="outlined"
          type="date"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Nationality"
          variant="outlined"
          required
        />
        <FormControl sx={{ width: "100%", marginBottom: 2 }}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select labelId="gender-label" variant="outlined" defaultValue="" required>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Email"
          variant="outlined"
          type="email"
          required
        />
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Password"
          variant="outlined"
          type="password"
          required
        />
        <TextField
          sx={{ width: "100%", marginBottom: 2 }}
          label="Phone"
          variant="outlined"
          type="tel"
          required
        />
        <Button sx={{ width: "100%" }} type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default StableSignUp;
