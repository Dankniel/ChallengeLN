
interface AnticipoProps {
  text: string
}

const Anticipo = ({ text }: AnticipoProps) => {
  return (
    <div className="d-flex fd-column w-full bg-color-black-secondary py-16 px-24 border-width-1 border-color-gray-secondary justify-center">
      <p className="text-color-white font-s-20 lh-28 font-w-400 sueca-bold">{text}</p>
    </div>
  )
}

export default Anticipo