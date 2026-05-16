const YoutubeVideoPlayer = ({ videoId }: { videoId: string }) => {
    return (
        <div className="w-full max-w-[800px] aspect-video rounded-[20px] overflow-hidden shadow-lg mt-10">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    );
};

export default YoutubeVideoPlayer;
