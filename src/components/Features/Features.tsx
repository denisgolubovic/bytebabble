export default () => {
    const features = [
        {
            title: "Collaborative Blogging",
            desc:
                "Unleash your creativity alongside fellow developers. Share knowledge, write articles, and engage in discussions, all within a vibrant community.",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
        },
        {
            title: "Real-time Analytics",
            desc:
                "Track your posts' performance with our built-in analytics dashboard. Gain insights on views, engagement, and popular content to help you grow.",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
        },
        {
            title: "Secure & Reliable",
            desc:
                "Protect your content with cutting-edge security features. ByteBabble ensures your data is safe and accessible when you need it.",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>,

        },
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl space-y-3">
                    <h3 className="text-indigo-600 font-semibold">Features</h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Empower your developer journey
                    </p>
                    <p>
                        ByteBabble offers a collaborative platform to enrich your developer
                        experience through knowledge sharing, analytics, and top-notch
                        security.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (

                                <li key={idx} className="space-y-3">
                                    <div
                                        className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            {item.icon}
                                        </svg>
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">{item.title}</h4>
                                    <p>{item.desc}</p>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
