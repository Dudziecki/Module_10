import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthLayout } from '../components/AuthLayout/AuthLayout';
import { Form } from '../components/common/Form/Form';
import { Input } from '../components/common/Input/Input';
import { Button } from '../components/common/Button/Button';
import { EmailIcon } from '../assets/icons/EmailIcon';
import { PasswordIcon } from '../assets/icons/PasswordIcon';
import '../components/AuthLayout/AuthLayout.css';
import { useAuth } from '../contexts/AuthContext';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      signUp(email, password);
      navigate('/');
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <AuthLayout>
      <Form
        title="Create an account"
        subtitle="Enter your email and password to sign up into this app"
        onSubmit={handleSubmit}
      >
        <Input
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          icon={<EmailIcon />}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          icon={<PasswordIcon />}
        />

        <Button type="submit">Sign Up</Button>
      </Form>

      <div className="terms-container">
        <p className="terms-text">
          By clicking continue, you agree to our
          <span> Terms of Service</span> and <span>Privacy</span>
        </p>
        <p>
          Already have an account?
          <Link to="/signin" className="helper-link">
            {' '}
            Sign in
          </Link>
        </p>
      </div>
      {error && <p>error</p>}
    </AuthLayout>
  );
};
