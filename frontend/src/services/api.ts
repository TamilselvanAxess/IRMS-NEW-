const API_BASE_URL = 'http://localhost:3001/api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface ApiError {
  message: string;
}

class ApiService {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData: ApiError = await response.json();
        throw new Error(errorData.message || 'An error occurred');
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error');
    }
  }

  // Authentication methods
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    return this.request<LoginResponse>('/user/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async getCurrentUser(): Promise<{ message: string; user: User }> {
    return this.request<{ message: string; user: User }>('/user/me');
  }

  async forgotPassword(email: string): Promise<{ message: string; previewUrl?: string }> {
    return this.request<{ message: string; previewUrl?: string }>('/user/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async resetPassword(token: string, password: string): Promise<{ message: string }> {
    return this.request<{ message: string }>(`/user/reset-password/${token}`, {
      method: 'POST',
      body: JSON.stringify({ password }),
    });
  }

  // Utility methods
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const apiService = new ApiService();
export default apiService; 