import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  name: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, ...rest }, ref) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>

      <input {...rest} type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(Input);