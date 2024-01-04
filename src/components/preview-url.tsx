function PreviewUrl( {contentImg, website}: {contentImg: string, website: string} ) {
  const getBaseUrl = (url: string) => new URL(url).hostname;

  return (
    <div className="relative mb-2">
      <img
        src={contentImg}
        alt={website}
        className="w-full h-auto rounded hover:ring-2 hover:ring-zinc-500 transition-all"
      />
      <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-xs p-1 rounded-md">
        {getBaseUrl(website)}
      </div>
    </div>
  );
}

export default PreviewUrl;
