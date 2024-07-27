import React from 'react';
import quate from '../imgs/quote.png';
import aboutImg from '../imgs/aboutImg.png';
import skillsImg from '../imgs/skillsImg.png';
import headerImg from '../imgs/headerImg.png';
import projectImg from '../imgs/projectImg.jpeg';
import PostData from '../jsons/projects.json';
import '../styles/output.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function home() {
    return (
        <>
            <div className='px-16 md:px-150'>
                <header className='h-screen bg-background'>
                    <div className="h-65 flex justify-between">
                        <div className="w-40 mt-150">
                            <h1 id="htext" className='text-white'>Asadbek is <span className='text-blue'>Full-Stack Developer</span></h1>
                            <p className='text-gray my-32'>PHP Forever :)</p>
                            <Link to='/contact' className='border text-white border-blue py-8 px-16 duration-1 hover:bg-hoverBackground'>Contact me!</Link>
                        </div>
                        <div className="w-50 h-100 flex flex-col justify-center items-center">
                            <img src={headerImg} alt="Header Img" width="460px" loading="lazy" />
                            <div className="w-80 p-8 border border-gray flex justify-center items-center text-white">
                                <div className="w-15 h-15 bg-blue mr-8"></div>
                                <p>Currently working <span className='text-blue'>Portfolio</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="h-20 w-100 flex flex-col items-center">
                        <div className="flex flex-col items-end">
                            <legend className='absolute bottom-48 left-96 bg-background'>
                                <img src={quate} alt='quate icon' />
                            </legend>
                            <h2 className='text-white w-fit px-32 py-20 border border-white'>If, at first, you do not succeed, call it version 1.0</h2>
                            <legend className='absolute bottom-28 right-96 bg-background'>
                                <img src={quate} alt='quate icon' />
                            </legend>
                            <h2 className='text-white w-fit px-32 py-20 border border-white'> - Khayri R.R. Woulfe</h2>
                        </div>
                    </div>
                </header>
                <div className="mb-50">
                    <div className="h-60 w-100 flex mb-50">
                        <div className="w-60 h-100 flex items-center justify-between">
                            <h1 className='text-white pr-16'><span className='text-blue'>#</span>Projects</h1>
                            <hr className='w-100 border-blue' />
                        </div>
                        <div className="w-40 flex items-center justify-end">
                            <a href="./pages/projects.html" className='text-gray hover:text-white'>view all ~~&gt;</a>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        {PostData.filter((item, i) => i < 3).map((postDetail, index) => {
                            return <div className="w-340 h-fit border border-gray">
                                <div className="h-fit w-100">
                                    <img src={projectImg} alt="Project Img" loading="lazy" className='w-100' />
                                </div>
                                <div className="w-100 p-8 h-fit text-gray border-t border-t-gray-1 border-b border-b-gray-1 ">
                                    <p>{postDetail.technologies}</p>
                                </div>
                                <div className="w-100 h-fit p-16">
                                    <h2 className='text-white mb-16'>{postDetail.title}</h2>
                                    <p className='text-gray mb-16'>{postDetail.content}</p>
                                    <div className="w-100 flex gap-16">
                                        <a href="{postDetail.live.url}" className={postDetail.live.display + ' border text-white border-blue py-8 px-16 duration-1 hover:bg-hoverBackground'}>Live &lt;~&gt;</a>
                                        <a href="{postDetail.github.url}" className={postDetail.github.display + ' border text-white border-gray py-8 px-16 duration-1 hover:bg-hoverBackgroundS'}>Github &gt;=</a>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="w-100 h-fit mt-120">
                    <div className="w-60 h-100 flex items-center justify-between">
                        <h1 className='text-white pr-16'><span className='text-blue'>#</span>Skills</h1>
                        <hr className='w-100 border-blue' />
                    </div>
                    <div className="flex justify-end mt-40 mb-80">
                        <div className="w-30 h-100">
                            <img src={skillsImg} alt="Skills Img" loading="lazy" />
                        </div>
                        <div className="w-60 h-100 flex gap-16 mt-40 justify-end">
                            <div className="flex flex-col gap-16">
                                <div className="w-180 h-fit border border-gray" data-aos="fade-up-right">
                                    <p className='text-white p-8 border-b border-b-gray'>Languages</p>
                                    <p className='text-gray p-8'>Javascipt PHP</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-16">
                                <div className="w-180 h-fit border border-gray" data-aos="fade-up" data-aos-delay="100">
                                    <p className='text-white p-8 border-b border-b-gray'>Database</p>
                                    <p className='text-gray p-8'>MySql</p>
                                </div>
                                <div className="w-180 h-fit border border-gray" data-aos="fade-up" data-aos-delay="150">
                                    <p className='text-white p-8 border-b border-b-gray'>Other</p>
                                    <p className='text-gray p-8'>HTML CSS SCSS</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-16">
                                <div className="w-180 h-fit border border-gray" data-aos="fade-up-left" data-aos-delay="200">
                                    <p className='text-white p-8 border-b border-b-gray'>Tools</p>
                                    <p className='text-gray p-8'>VSCode Git Font</p>
                                </div>
                                <div className="w-180 h-fit border border-gray" data-aos="fade-up-left" data-aos-delay="250">
                                    <p className='text-white p-8 border-b border-b-gray'>Fremworks and Libraris</p>
                                    <p className='text-gray p-8'>React.js Impress.js Tilt.js AOS.js Typed.js Laravel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-100 h-fit'>
                    <div className="w-60 h-100 flex items-center mb-16">
                        <h1 className='w-260 text-white pr-16'><span className='text-blue'>#</span>About-me</h1>
                        <hr className='w-100 border-blue' />
                    </div>
                    <div className="w-100 h-100 flex mt-30">
                        <div className="w-45 h-100 flex flex-col gap-30" data-aos="fade-up">
                            <p id="about" className='text-gray'>Hello, i'm Asadbek!<br/><br/>I'm a self-taught full-stack developer based in Ferghana, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.<br/><br/>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                            <NavLink to='about' key='about' className='w-fit py-8 px-16 border border-blue text-white duration-1 hover:bg-hoverBackground'>Read More -&gt;</NavLink>
                        </div>
                        <div className="w-55 h-100 flex justify-end -mt-40" data-aos="fade-up-left">
                            <img src={aboutImg} alt="" className='-mt-40' />
                        </div>
                    </div>
                </div>
                <div className="w-100 h-fit mt-100" id="contact">
                    <div className="w-50 h-100 flex items-center mb-16">
                        <h1 className='text-white pr-16'><span className='text-blue'>#</span>Contact</h1>
                        <hr className='border-blue w-100' />
                    </div>
                    <div className="w-100 h-fit flex justify-between">
                        <div className="w-45 h-fit text-gray mt-20">
                            <p id="contactText">I'm interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                        </div>
                        <div className="w-50 h-100 flex justify-end">
                            <div className="w-fit h-fit p-16 text-white border border-gray flex flex-col gap-16" data-aos="fade-up">
                                <p>Massage me here</p>
                                <div className="w-100 h-fit flex flex-col gap-16">
                                    <a href="mailto:asadbekahadov00@gmail.com" className='flex items-center text-gray gap-5'>
                                        <svg fill="#ABB2BF" width="28px" height="28px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd"/>
                                        </svg>
                                        asadbekahadov00@gmail.com
                                    </a>
                                    <a href="https://t.me/ful_stack_dev" className='flex items-center text-gray gap-5'>
                                        <svg width="28px" height="28px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ABB2BF">
                                            <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z"/>
                                        </svg>
                                        ASADBEK
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default home;