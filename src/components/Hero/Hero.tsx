import {SignInButton} from "@clerk/nextjs";

export default () => {

    return (
        <section className="mt-48 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 mb-24">
            <div className="text-center space-y-4">
                <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                    ByteBabble: Sparking Developer Conversations
                    <span className="text-indigo-600"> one Byte at a Time</span>
                </h1>
                <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                    A micro-blogging platform connecting developers with code, ...and memes
                </p>
            </div>
            <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                <a
                   className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto">
                    <SignInButton>Get started</SignInButton>
                </a>
                <a
                   className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto">
                    <SignInButton>Try it out</SignInButton>
                </a>
            </div>
        </section>
    )
}