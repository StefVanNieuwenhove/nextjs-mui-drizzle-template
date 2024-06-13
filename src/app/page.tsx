import { Button } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Button href='/test' variant='outlined'>
        Go to testpage
      </Button>
      <Button variant='contained'>Hello World!</Button>
    </main>
  );
}
