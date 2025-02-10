'use client';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/apis/firebase';
import Cookies from 'js-cookie';

export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    Cookies.set('token', token, { expires: 7, secure: true });

    return token;
  } catch (error) {
    console.warn('Login error:', error);
    throw error;
  }
}

export function logoutUser() {
  Cookies.remove('token');
}
