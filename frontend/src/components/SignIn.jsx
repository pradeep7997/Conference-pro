import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  User, 
  EyeOff, 
  Eye, 
  CheckCircle2, 
  XCircle 
} from 'lucide-react';

// Validation Utilities
const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
  // At least 8 characters, one uppercase, one lowercase, one number, one special char
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSignIn = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character';
    }

    // Set errors or proceed with sign in
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Simulate sign in process
      console.log('Sign In Successful');
      alert('Sign In Successful!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Sign in to continue to ConferencePro
          </p>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className={`w-5 h-5 ${errors.email ? 'text-red-500' : 'text-gray-400'}`} />
                </div>
                <input 
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors(prev => ({...prev, email: ''}));
                  }}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                    errors.email 
                      ? 'border-red-500 bg-red-50 focus:ring-red-200' 
                      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
                  } focus:outline-none focus:ring-2 transition duration-300`}
                />
                {errors.email && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className={`w-5 h-5 ${errors.password ? 'text-red-500' : 'text-gray-400'}`} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors(prev => ({...prev, password: ''}));
                  }}
                  className={`w-full pl-10 pr-12 py-3 rounded-lg border ${
                    errors.password 
                      ? 'border-red-500 bg-red-50 focus:ring-red-200' 
                      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
                  } focus:outline-none focus:ring-2 transition duration-300`}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {errors.password ? (
                    <XCircle className="w-5 h-5 text-red-500" />
                  ) : (
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-gray-400" />
                      ) : (
                        <Eye className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-end">
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center space-x-2"
            >
              <span>Sign In</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account? {' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;