/**
 * @inline
 */
export interface SignOut {
  (options?: any): Promise<void>;
  (signOutCallback?: any, options?: any): Promise<void>;
}

/**
 * Some description
 * @inline
 */
export type Return = {
  /**
   * Some text
   */
  signOut: SignOut;
}

/**
 * Example description
 */
export function useExample(): Return {
  return {
    signOut: async (signOutCallback?: any, options?: any): Promise<void> => {
      // Example implementation
      if (signOutCallback) {
        signOutCallback();
      }
      console.log('Sign out successful', options);
    },
  }
}