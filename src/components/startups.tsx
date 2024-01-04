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
      name: "Singular (e.g., NFTScoring)",
      description: "NFT Exchange for Market Makers",
      traction:
        "YC-backed startup with over half a million users. Reched $100k MRR before the NFT market crashed.",
      website: "https://google.com",
      content: "https://arc.net/og.png",
      timeRange: "2021 - 2023",
    },
    {
      name: "GoDeliver",
      description: "Platform for hyper-local delivery",
      traction: "TODO",
      website: "https://google.com",
      content: "https://arc.net/og.png",
      timeRange: "2021 - 2023",
    },
    {
      name: "Cognitic",
      description: "Data Science & AI Studio",
      traction: "TODO",
      website: "https://google.com",
      content: "https://arc.net/og.png",
      timeRange: "2021 - 2023",
    },
    {
      name: "Fuzee",
      description: "City planning app combing all modes of transport",
      traction: "TODO",
      website: "https://google.com",
      content: "https://arc.net/og.png",
      timeRange: "2021 - 2023",
    },
    {
      name: "Qusion",
      description: "Web & Mobile Sudio",
      website: "https://google.com",
      traction: "TODO",
      content: "https://arc.net/og.png",
      timeRange: "2021 - 2023",
    },
  ];

  return (
    <Carousel itemCount={startups.length} className="w-full mb-12">
      <CarouselContent className="-ml-1">
        {startups.map((startup, index) => (
          <CarouselItem key={index} className="pl-1">
            <div className="p-1 relative group rounded-md">
              <img
                src={startup.content}
                alt={startup.name}
                className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:opacity-50 rounded-lg"
              />
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
      <CarouselPrevious className="hidden md:block text-zinc-500 bg-black border-zinc-500" />
      <CarouselNext className="hidden md:block text-zinc-500 bg-black border-zinc-500" />
    </Carousel>
  )
}

export default Startups;
