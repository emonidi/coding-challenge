import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 data-testid="heading" className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        The best cosmetics ever!
                    </h1>
                    <p data-testid="paragraph" className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Blah blah blah blah lorem ipsum and all the bells and whistles here. 
                    </p>
                   
                    <Link data-testid="cta" to="/products" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Check out our products
                    </Link>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://www.cosnova.com/storage/brand/eauO9YLsQlvvRVEYJ1UKzoW9De3FYL-metaYWJfdW50ZXJuZWhtZW5fbWFya2VuX2VzczAxLmpwZw==-.jpg" alt="mockup"/>
                </div>
            </div>
        </section>
    )
}