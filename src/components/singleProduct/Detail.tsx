function Detail({ title, info }) {
  return (
    <div className="mt-4 space-y-6">
      <p className="text-sm text-gray-600">
        <strong>{title}</strong>: {info}
      </p>
    </div>
  )
}
export default Detail
