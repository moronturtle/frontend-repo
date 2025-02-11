'use client'
import { Container } from '@mui/material';
import UserList from '@/components/organism/UserList';
import Typography from '@/components/atoms/Typography';

export default function MainPage() {
  return (
    <Container>
      <Typography variant="h5" gutterBottom sx={{ mt: 6 }}>
        User Management
      </Typography>
      <UserList />
    </Container>
  );
}