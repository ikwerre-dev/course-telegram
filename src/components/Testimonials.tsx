export default function Testimonials() {
  const testimonials = [
    {
      quote: "Thanks to the blueprint Brian gave me I just completed a $1.6 million dollar launch for my digital product...and plan on making double that before year end.",
      author: "McCanon"
    },
    {
      quote: "I'm so glad I did this. If you have a dream that you can work from anywhere in the world, I'm telling you I'm proof that this is possible, so beg, borrow, steal!",
      author: "Jane Robert"
    },
    {
      quote: "From start to finish, my experience was nothing short of amazing. The attention to detail and craftsmanship is top-notch. I'm beyond satisfied with my decision.",
      author: "Michael Lee"
    }
  ]

  return (
    <section className="py-20 bg-dark-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gold">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-dark-darker p-8 rounded-lg border border-gold/20 hover:border-gold/40 transition-all">
              <p className="text-lg mb-6 italic text-gray-300">&quot;{testimonial.quote}&quot;</p>
              <p className="text-gold font-bold">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}