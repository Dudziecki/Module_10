import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthLayout } from "../../components/AuthLayout/AuthLayout";
import { Form } from "../../components/common/Form/Form";
import { Input } from "../../components/common/Input/Input";
import { Button } from "../../components/common/Button/Button";
import { EmailIcon } from "../../assets/icons/EmailIcon";
import { PasswordIcon } from "../../assets/icons/PasswordIcon";
import { useAuth } from "../../contexts/AuthContext";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      login(email, password);
      navigate("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <AuthLayout>
      <Form
        title="Sign in into an account"
        subtitle="Enter your email and password to sign in into this app"
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

        <Button type="submit">Sign In</Button>
      </Form>

      <div className="terms-container">
        <p>
          Forgot to create an account?
          <Link to="/signup" className="helper-link">
            {" "}
            Sign up
          </Link>
        </p>
      </div>
      {error && <p>error</p>}
    </AuthLayout>
  );
};
