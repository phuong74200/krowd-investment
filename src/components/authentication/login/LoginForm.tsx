// material
import { Button } from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { setAuthToken } from '@/constants/interceptors';
import { useAuthService } from '@/modules/auth/services/auth.service';

// routes

// ----------------------------------------------------------------------

const firebaseConfig = {
  apiKey: 'AIzaSyBbAvcC2jLQvAgd2OQBTvAJmwodbqIpBog',
  authDomain: 'fun-fund-7b641.firebaseapp.com',
  databaseURL:
    'https://fun-fund-7b641-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'fun-fund-7b641',
  storageBucket: 'fun-fund-7b641.appspot.com',
  messagingSenderId: '526397080002',
  appId: '1:526397080002:web:589f49f0d7e746ca33165b',
  measurementId: 'G-7YDMHCEBF7',
};

type userResponse = {
  enabled: boolean;
  status: 'FILLING_REQUIRED' | 'APPROVED';
  userId: number;
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function LoginForm() {
  const authService = useAuthService();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const token = await result.user.getIdToken();
        console.log(token);
        setAuthToken(token);
        const res: userResponse = await authService.authenticate();
        if (res.status === 'FILLING_REQUIRED') {
          window.location.href = '/auth/register';
        }
        if (res.status === 'APPROVED') {
          const res = await authService.userInfo();
          // const data: any = await res.json();
          if (res.roleId === 'ADMIN') {
            console.log('admin');
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Button
      fullWidth
      size="large"
      onClick={signInWithGoogle}
      variant="contained"
    >
      Google
    </Button>
    // <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
    //   <Stack spacing={3}>
    //     {errors.afterSubmit && (
    //       <Alert severity="error">{errors.root?.message}</Alert>
    //     )}

    //     <TextField
    //       fullWidth
    //       autoComplete="username"
    //       type="email"
    //       label="Email address"
    //       {...register('username')}
    //     />

    //     <TextField
    //       fullWidth
    //       autoComplete="current-password"
    //       type={showPassword ? 'text' : 'password'}
    //       label="Password"
    //       {...register('password')}
    //       InputProps={{
    //         endAdornment: (
    //           <InputAdornment position="end">
    //             <IconButton onClick={handleShowPassword} edge="end">
    //               <Icon icon={showPassword ? eyeFill : eyeOffFill} />
    //             </IconButton>
    //           </InputAdornment>
    //         ),
    //       }}
    //     />
    //   </Stack>

    //   <Stack
    //     direction="row"
    //     alignItems="center"
    //     justifyContent="space-between"
    //     sx={{ my: 2 }}
    //   >
    //     <FormControlLabel control={<Checkbox />} label="Remember me" />

    //     <Link
    //       component={RouterLink}
    //       variant="subtitle2"
    //       to={PATH_AUTH.resetPassword}
    //     >
    //       Forgot password?
    //     </Link>
    //   </Stack>

    //   <LoadingButton fullWidth size="large" type="submit" variant="contained">
    //     Login
    //   </LoadingButton>
    // </form>
  );
}
