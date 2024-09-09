const Badge = ({ text='' }: { text: string}) => {

  return (
    <div className="badge-container gap-4 align-items-center py-4 px-8 bg-color-black-full border-radius-16 w-fit-content">
      <p className="text-color-white font-s-11 lh-16 font-w-400 d-inline-block">{text}</p>
    </div>
  )
}

export default Badge

/*

    <div className="badge-container gap-4 align-items-center py-4 px-8 bg-color-black-full border-radius-16">
      <p className="text-color-white font-s-11 lh-16 font-w-400">{text}</p>
    </div>
*/