import logo from './assets/logo.png';
import morphMarket from './assets/mm-logo.webp';
import galaxy from './assets/largegalaxy.png';

const App = () => {
    return (
        <div className='grid overflow-hidden h-screen grid-cols-1 grid-rows-[1fr,auto,1fr] bg-gray-900 lg:grid-cols-[max(50%,36rem),1fr]'>
            <div className='w-screen h-screen absolute inset-0 z-0 flex items-start justify-start sm:items-center sm:justify-center overflow-hidden'>
                <img src={galaxy} alt='' className='opacity-50 w-full' />
            </div>

            <header className='mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8 z-10'>
                <div>
                    <span className='sr-only'>Morph Galaxy Geckos</span>
                    <img className='h-28 w-auto sm:h-32' src={logo} alt='' />
                </div>
            </header>
            <main className='mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8 z-10'>
                <div className='max-w-lg'>
                    <h1 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                        Coming Soon
                    </h1>
                    <p className='mt-6 text-base leading-7 text-gray-300'>
                        We&apos;re working on something new! If you have any
                        questions feel free to contact us below:
                    </p>
                    <div className='mt-10 space-x-2 text-gray-300'>
                        <a
                            href='mailto:contact@morphgalaxy.com'
                            className='text-sm font-semibold leading-7 text-indigo-400'
                        >
                            <span>contact@morphgalaxy.com</span>
                        </a>

                        <span>|</span>
                        <span>(714) 588-7489</span>
                    </div>
                </div>
            </main>
            <footer className='self-end lg:col-span-2 lg:col-start-1 lg:row-start-3 z-10'>
                <div className='border-t border-gray-700 bg-gray-800 py-10'>
                    <nav className='mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-200 lg:px-8'>
                        <a
                            href='https://www.instagram.com/morphgalaxy/'
                            target='_blank'
                        >
                            <i class='fa-brands fa-instagram text-2xl'></i>
                        </a>
                        <svg
                            viewBox='0 0 2 2'
                            aria-hidden='true'
                            className='h-0.5 w-0.5 fill-gray-300'
                        >
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        <a
                            href='https://www.morphmarket.com/us/c/reptiles/lizards/crested-geckos?seller=morphgalaxy&state=for_sale'
                            target='_blank'
                        >
                            <img
                                src={morphMarket}
                                alt='Morph Market'
                                className='h-6'
                            />
                        </a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default App;
