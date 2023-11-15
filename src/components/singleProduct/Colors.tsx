function Colors({ colors }) {
  return (
    <div className="mt-6">
      <h4 className="text-md font-medium tracking-wider capitalize">colors</h4>
      <div className="mt-2">
        {colors.map((color) => {
          return (
            <button
              key={color}
              type="button"
              className={`badge w-6 h-6 mr-2`}
              style={{ backgroundColor: color }}
            ></button>
          )
        })}
      </div>
    </div>
  )
}
export default Colors
