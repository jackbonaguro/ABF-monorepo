export const BREAKPTS = {
  XS: 360,
  SM: 480,
  MD: 768,
  LG: 992,
  XL: 1200,
};

export type BreakPts = keyof typeof BREAKPTS;

export const DEFAULT_TOAST_STYLES = {
  border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: 0,
  padding: '8px',
  color: 'black',
  fontSize: 12,
  boxShadow: 'none',
}; // TODO(dave4506)
