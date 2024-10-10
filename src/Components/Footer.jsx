import logo from '../../public/Image/icons8-restaurant-96.png'
import fb from '../../public/Image/fb.png'
import git from '../../public/Image/icons8-github-50.png'
import insta from '../../public/Image/icons8-insta-48.png'
const Footer = () => {
    return (
        <div>
            <footer className="px-4 divide-y border-2 bg-purple-300">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
                            <img src={logo} alt="" />
                            </div>
                            <span className="self-center text-purple-800 text-2xl font-semibold">EliteEateries</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3 text-[16px]">
                            <h3 className="tracking-wide uppercase text-purple-950">Product</h3>
                            <ul className="space-y-1 text-[16px] text-purple-800">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3 text-[16px]">
                            <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
                            <ul className="space-y-1 text-purple-800">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3 text-[16px]">
                            <h3 className="uppercase text-purple-950">Developers</h3>
                            <ul className="space-y-1 text-purple-800 ">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Public API</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase text-[16px] text-purple-950">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <a rel="noopener noreferrer" href="https://www.facebook.com/rafioul.sourav" title="Facebook" className="flex items-center p-1">
                             <img className='w-8 h-8' src={fb} alt="" />
                                </a>
                                <a rel="noopener noreferrer" href="https://github.com/Bedoian/my-eleventh-assignment" title="Github" className="flex items-center p-1">
                                   <img className='w-8 h-8' src={git} alt="" />
                                </a>
                                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                   <img src={insta} className='w-8 h-8' alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-md text-purple-900 text-center dark:text-gray-600">© 2024 Company Co. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;