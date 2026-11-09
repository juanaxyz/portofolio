import asteriskImg from '../assets/figma/asterisk.png'

export default function MarqueeBanner({ items, isPaused }) {
  return (
    <div className="w-full overflow-hidden py-10 sm:py-14" aria-hidden="true">
      <div className="w-[120%] ml-[-10%] bg-neutral-50 h-28 flex items-center -rotate-2">
        <div
          className="flex items-center gap-9 whitespace-nowrap animate-marquee-slow"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {items.concat(items).map((text, idx) => (
            <div key={idx} className="inline-flex items-center ">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
                {text}
              </span>
              <img src={asteriskImg} alt="" className="w-10 h-10 object-contain mx-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
