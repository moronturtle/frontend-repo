import { Snackbar, Alert } from '@mui/material';

interface NotificationProps {
  message: string;
  open: boolean;
  onClose: () => void;
}

const Notification = ({ message, open, onClose }: NotificationProps) => (
  <Snackbar
    open={open}
    autoHideDuration={4000}
    onClose={onClose}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  >
    <Alert onClose={onClose} severity="success">
      {message}
    </Alert>
  </Snackbar>
);

export default Notification;
