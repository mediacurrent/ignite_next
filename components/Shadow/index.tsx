interface ShadowTypes {
  size?: string
  noShadow?: boolean
  text?: string
}

const Shadow = ({ size, noShadow = false, text }: ShadowTypes) => {
  if (noShadow) {
    return (
      <div
        data-cy="no-shadow"
        className="shadow-none p-3 mb-5 bg-light rounded"
      >
        {text}
      </div>
    )
  }

  return (
    <div
      className={
        size
          ? `shadow-${size} p-3 mb-5 bg-body rounded`
          : 'shadow p-3 mb-5 bg-body rounded'
      }
      data-cy="show-shadow"
    >
      {text}
    </div>
  )
}

export default Shadow
