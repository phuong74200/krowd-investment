// material
import { Button } from '@mui/material';

// routes

// ----------------------------------------------------------------------

// type userLoginForm = {
//   username: string;
//   password: string;
//   afterSubmit?: string;
// };

export default function LoginForm() {
  // const [showPassword, setShowPassword] = useState(false);

  // const onSubmit: SubmitHandler<userLoginForm> = async (data) => {
  //   try {
  //     console.log(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<userLoginForm>();

  // const handleShowPassword = () => {
  //   setShowPassword((show) => !show);
  // };

  return (
    <Button
      fullWidth
      size="large"
      // type="submit"
      variant="contained"
      href="https://www.google.com"
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
