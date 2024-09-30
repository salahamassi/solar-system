import { Button, TextField } from '@mui/material';

export default function ContactSection(): JSX.Element {
  return (
    <section className="flex flex-col items-center p-8 bg-orange-400">
      <div className="w-full max-w-lg mt-32">
        <h2 className="text-white font-medium text-3xl mb-4">Get In Touch</h2>
        <form className="flex flex-col gap-4"> 
          <TextField
            label="Enter your Name"
            variant="outlined"
            fullWidth
            sx={{
              width: '100%',
              '& .MuiFilledInput-root': {
                backgroundColor: 'white'
              }
            }}
          />
          <TextField
            label="Enter a valid email address"
            type="email"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Enter your message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
          />
          <Button variant="contained" color="primary" type="submit">Submit</Button>
        </form>
      </div>
    </section>
  );
}