import { formatUSPrice } from '../../utils/formatPrice'
import { useState } from 'react'
const FormRange = ({ label, name, size }) => {
  const step = 1000
  const maxPrice = 10000
  const [selectedPrice, setSelectedPrice] = useState(maxPrice)

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatUSPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e: HTMLInputElement['value']) =>
          setSelectedPrice(e.target.value)
        }
        className={`range ${size}`}
        step={step}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">
          Max : {formatUSPrice(maxPrice)}
        </span>
      </div>
    </div>
  )
}
export default FormRange
