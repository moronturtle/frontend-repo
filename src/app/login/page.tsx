'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Container, Typography } from '@mui/material';
import { loginUser, loginWithGoogle } from '@/apis/authApi';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const token = await loginUser(email, password);
      if (token) {
        router.push('/main');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const token = await loginWithGoogle();
      if (token) {
        router.push('/main');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      <Button variant="contained" color="primary" onClick={handleGoogleLogin}>
        Login dengan Google
      </Button>
    </Container>
  );
}
