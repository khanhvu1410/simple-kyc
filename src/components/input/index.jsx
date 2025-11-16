import { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => {
  const { label, placeholder, type = 'text', error, ...rest } = props;

  return (
    <>
      {label && (
        <label className="block text-sm font-medium text-gray-600">
          {label}
        </label>
      )}

      <input
        type={type}
        ref={ref}
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
        {...rest}
      />
      {error && <small className="text-red-600 my-2">{error}</small>}
    </>
  );
});

Input.displayName = 'Input';

export default Input;
