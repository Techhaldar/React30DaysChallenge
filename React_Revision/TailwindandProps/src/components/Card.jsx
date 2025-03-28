function Card({username="Raj", Position, Profile}) {
  return (
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 text-white">
        <img class="w-24 h-24 rounded-full mx-auto" src={Profile} alt="" width="384" height="512" />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg fon">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              {username}
            </div>
            <div>
              {Position}
            </div>
          </figcaption>
        </div>
      </figure>
  )
}

export default Card