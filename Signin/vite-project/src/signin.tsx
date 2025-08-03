import { useState } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

const SignIn = () => {
  const [user, setUser] = useState<GoogleUser | null>(null);

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decoded: GoogleUser = jwtDecode(credentialResponse.credential);
      console.log('Decoded user:', decoded);
      setUser(decoded);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80 text-center">
        {user ? (
          <>
            <img
              src={user.picture}
              alt="User"
              className="mx-auto rounded-full w-24 h-24 shadow-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">Welcome,</h2>
            <p className="text-lg text-gray-700 font-medium">{user.name}</p>
            <p className="text-sm text-gray-500 mb-4">{user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <GoogleLogin onSuccess={handleSuccess} onError={() => console.log('Login Failed')} />
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
