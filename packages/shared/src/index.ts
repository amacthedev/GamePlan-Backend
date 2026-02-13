// GamePlan Shared Types
// This package contains TypeScript types shared between @gameplan/backend and @gameplan/frontend.
// Types will be added here as features are implemented in Phase 2.

export type Role = 'ATHLETE' | 'PARENT' | 'COACH' | 'ADMIN';

export interface UserPublic {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  profileImageUrl?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
