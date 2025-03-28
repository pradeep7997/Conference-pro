import React, { useState } from 'react';
import { 
  Mail, 
  Lock, 
  User as LucideUser, // Renamed to avoid conflict
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
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

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 7) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[$@#&!]+/)) strength++;
    return strength;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({...prev, [name]: ''}));
    }

    // Password strength calculation
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be strong';
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Set errors or proceed with sign up
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Simulate sign up process
      console.log('Sign Up Successful');
      alert('Sign Up Successful!');
    }
  };

  const passwordStrengthColors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-green-600'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create Account
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Join ConferencePro and unlock powerful event management tools
          </p>

          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LucideUser className={`w-5 h-5 ${errors.fullName ? 'text-red-500' : 'text-gray-400'}`} />
                </div>
                <input 
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                    errors.fullName 
                      ? 'border-red-500 bg-red-50 focus:ring-red-200' 
                      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
                  } focus:outline-none focus:ring-2 transition duration-300`}
                />
                {errors.fullName && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className={`w-5 h-5 ${errors.email ? 'text-red-500' : 'text-gray-400'}`} />
                </div>
                <input 
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
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
              {formData.password && (
                <div className="mt-2 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 w-full rounded ${
                        i < passwordStrength 
                          ? passwordStrengthColors[passwordStrength - 1] 
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              )}
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">{errors.password}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className={`w-5 h-5 ${errors.confirmPassword ? 'text-red-500' : 'text-gray-400'}`} />
                </div>
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-12 py-3 rounded-lg border ${
                    errors.confirmPassword 
                      ? 'border-red-500 bg-red-50 focus:ring-red-200' 
                      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
                  } focus:outline-none focus:ring-2 transition duration-300`}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {errors.confirmPassword ? (
                    <XCircle className="w-5 h-5 text-red-500" />
                  ) : (
                    <button 
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="focus:outline-none"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5 text-gray-400" />
                      ) : (
                        <Eye className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                  )}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>
              )}
            </div>

            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center space-x-2"
            >
              <span>Create Account</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account? {' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;