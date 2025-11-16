import Button from '../../components/button';
import Checkbox from '../../components/checkbox';
import Input from '../../components/input';

const Login = () => {
  return (
    <>
      <form className="mt-6">
        <div className="mb-4">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="text"
            error=""
            required
          />
        </div>
        <div className="mb-4">
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            error=""
            required
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <Checkbox label="Remember me" />
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <Button>Login</Button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Don't have an account?
        <a href="#" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </>
  );
};

export default Login;
