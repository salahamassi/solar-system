import { Button, TextField } from '@mui/material';

export default function ContactSection(): JSX.Element {
  return (
    <section className="flex flex-col items-center p-8 bg-orange-400">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white">Help Change the World</h2>
        <p className="text-white mt-4">
          Help save the environment and make the switch to solar. Find out which 
          Trina Solar products are perfect for your home, business, or project.
        </p>
        <Button variant="contained" color="secondary" className="mt-4">Find Out More</Button>
      </div>
      <div className="w-full max-w-lg">
        <h3 className="text-white text-2xl mb-4">Get In Touch</h3>
        <form className="flex flex-col gap-4">
          <TextField
            label="Enter your Name"
            variant="outlined"
            fullWidth
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