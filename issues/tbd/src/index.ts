interface Base {
  permission: string;
  role: string;
}

interface Placeholder {
  permission: unknown;
  role: unknown;
}

declare global {
  interface ClerkAuthorization {}
}

/**
 * Some description
 *
 * @interface
 */
export type OrganizationCustomRoleKey = ClerkAuthorization extends Placeholder
  ? ClerkAuthorization['role'] extends string
    ? ClerkAuthorization['role']
    : Base['role']
  : Base['role'];

/**
 * @inline
 */
export type UseExampleReturn = 
| {
  /**
   * A boolean that indicates whether Clerk has completed initialization. Initially `false`, becomes `true` once Clerk loads.
   */
  isLoaded: false;
  /**
   * A boolean that indicates whether a user is currently signed in.
   */
  isSignedIn: undefined;
  /**
   * The current user's role in their active organization.
   */
  orgRole: undefined;
}
| {
  isLoaded: true;
  isSignedIn: false;
  orgRole: null;
}
| {
  isLoaded: true;
  isSignedIn: true;
  orgRole: null;
}
| {
  isLoaded: true;
  isSignedIn: true;
  orgRole: OrganizationCustomRoleKey;
};

/**
 * Example description
 */
export function useExample(initialState: any = {}): UseExampleReturn {
  // Example implementation
  const state = { ...initialState }
  return state
}