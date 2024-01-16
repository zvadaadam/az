import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicator,
} from "@/components/ui/carousel";


function Startups() {
  const startups = [
    {
      name: "Singular / NFTScoring",
      description: "NFT Exchange for Market Makers",
      traction:
        "YC-backed startup with +500k users. Reched $100k MRR before the NFT market crashed.",
      website: "https://google.com",
      content: "/singular.mp4",
      timeRange: "2021 - 2023",
    },
    {
      name: "GoDeliver",
      description: "B2B Hyper-local delivery platform",
      traction: "Operated in Czechia, Switzerland, and Germany. Reached $2k MRR. Hard business to onboard customers.",
      website: "https://google.com",
      content: "/godeliver.png",
      timeRange: "2020 - 2021",
    },
    {
      name: "Fuzee",
      description: "City planning app combining all modes of transport",
      traction: "B2C app with 10k+ users. Partnered with car manufacturer SKODA.",
      website: "https://google.com",
      content: "/fuzee.png",
      timeRange: "2018 - 2020",
    },
    {
      name: "Cognitic",
      description: "Data Science & AI Studio",
      traction: "Bulding AI solutions for clients. Funded my startups Fuzee & GoDeliver.",
      website: "https://google.com",
      content: "/cognitic.png",
      timeRange: "2018 - 2021",
    },
    // {
    //   name: "Qusion",
    //   description: "Web & Mobile Sudio",
    //   website: "https://google.com",
    //   traction: "TODO",
    //   content: "https://arc.net/og.png",
    //   timeRange: "2021 - 2023",
    // },
  ];

  return (
    <Carousel itemCount={startups.length} className="w-full mb-12">
      <CarouselContent className="-ml-1">
        {startups.map((startup, index) => (
          <CarouselItem key={index} className="pl-1">
            <div className="p-1 relative group rounded-md">
              {startup.content.endsWith('.mp4') ? (
                <video
                  src={startup.content}
                  className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:opacity-50 rounded-lg"
                  loop
                  autoPlay
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={startup.content}
                  alt={startup.name}
                  className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:opacity-50 rounded-lg"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 transition duration-500 ease-in-out group-hover:bg-opacity-50 rounded-lg">
                <div className="flex flex-col aspect-square items-start justify-start p-6 opacity-0 group-hover:opacity-100">
                  <h2 className="text-xl pb-1 font-semibold text-zinc-200 tracking-tighter">
                    {startup.name}
                  </h2>
                  <p className="text-sm text-zinc-200">
                    {startup.description}
                  </p>
                  <p className="text-sm text-zinc-400 absolute top-0 right-0 p-5">
                    {startup.timeRange}
                  </p>
                  <p className="text-sm text-zinc-200 absolute bottom-0 left-0 p-5">
                    {startup.traction}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex justify-center items-center text-zinc-500 bg-black border-zinc-500" />
      <CarouselNext className="hidden md:flex justify-center items-center text-zinc-500 bg-black border-zinc-500" />
    </Carousel>
  )
}

export default Startups;
