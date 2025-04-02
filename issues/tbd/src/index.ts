/**
 * Foobar
 */
export type Stuff<T> = T & {
  /**
   * If `true`, the previous data will be kept in the cache until new data is fetched. Defaults to `false`.
   */
  keepPreviousData?: boolean;
};

/**
 * Example of an interface with optional stuff
 */
export interface ExampleInterface {
  /**
   * Some description
   */
  foo?: string;
  /**
   * Some other description
   */
  bar?: number;
  /**
   * Some boolean
   */
  baz?: boolean;
}

/**
 * @inline
 */
export type Params = {
  initialState?: Record<string, any>;
}

/**
 * Some description
 * @inline
 */
export type Return<T extends string = 'example'> = {
  /**
   * Some text
   */
  isLoaded: boolean;
  /**
   * Some other text
   */
  user?: Record<string, any>;
  /**
   * Other return value
   */
  data?: T;
}

/**
 * Example description
 */
export function useExample(params: Params): Return {
  return {
    isLoaded: true,
    user: params.initialState,
    data: 'example',
  }
}