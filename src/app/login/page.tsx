'use client'
import { useRouter } from 'next/navigation';
import { Container } from '@mui/material';
import { loginWithGoogle } from '@/apis/authApi';
import LoginForm from '@/components/organism/ LoginForm';

export default function LoginPage() {
  const router = useRouter();

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
      <LoginForm onClick={handleGoogleLogin} />
    </Container>
  );
}
