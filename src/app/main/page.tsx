'use client';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../../apis/userApi';
import { setUserInfo, setLoading, setError } from '@/store/slices/userSlice';
import { Button, Typography, Container } from '@mui/material';
import { RootState, AppDispatch } from '../../store/store';

export default function MainPage() {
  const dispatch: AppDispatch = useDispatch();
  const { userInfo, loading, error } = useSelector((state: RootState) => state.user);

  const handleFetchUser = async () => {
    dispatch(setLoading(true));
    try {
      const data = await fetchUserData();
      dispatch(setUserInfo(data));
    } catch (err: any) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Container>
      <Button variant="contained" onClick={handleFetchUser} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch User Info'}
      </Button>
      {userInfo && (
        <Typography variant="body1">
          User: {JSON.stringify(userInfo)}
        </Typography>
      )}
      {error && <Typography color="error">{error}</Typography>}
    </Container>
  );
}