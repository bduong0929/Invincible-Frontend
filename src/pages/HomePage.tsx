
export default function HomePage() {
    return (
        <div className="flex flex-col items-center">
            {/* homepage title */}
            <h1 className="font-mono text-5xl font-bold italic m-16">BE INVINCIBLE</h1>

            <div id="default-carousel" className="relative" data-carousel="static">
                <img className="rounded-md"
                    src="https://images.unsplash.com/photo-1580051745101-2dca6e53f15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMDY4OTg3N3x8ZW58MHx8fHw%3D&w=1000&q=80" />
            </div>
        </div>
    );
}