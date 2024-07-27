import React from 'react';
import aboutImg from '../imgs/aboutImg.png';
import softSkillsImg from '../imgs/fanFactImg.png';

function about() {
    return (
        <div className='px-150'>
            <div className='w-100 h-fit mt-60'>
                <div className="w-60 h-100 mb-16">
                    <h1 className='w-260 text-white pr-16'><span className='text-blue'>/</span>about-me</h1>
                    <p className='text-gray mt-16'>Who am I?</p>
                </div>
                <div className="w-100 h-100 flex mt-60">
                    <div className="w-45 h-100 flex flex-col gap-30" data-aos="fade-up">
                        <p id="about" className='text-gray'>Hello, i'm Asadbek!<br/><br/>I'm a self-taught full-stack developer based in Ferghana, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.<br/><br/>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                    </div>
                    <div className="w-55 h-100 flex justify-end -mt-40" data-aos="fade-up-left">
                        <img src={aboutImg} alt="" className='-mt-40' />
                    </div>
                </div>
            </div>
            <div className="mt-100 mb-100">
                <div className="w-60 h-100 mb-16">
                    <h1 className='w-260 text-white pr-16'><span className='text-blue'>#</span>skills</h1>
                </div>
                <div className="mt-40 flex flex-wrap gap-16">
                    <div className="w-180 h-fit border border-gray" data-aos="fade-up" data-aos-delay="100">
                        <p className='border-b border-b-gray text-white p-8'>Languages</p>
                        <p className='text-gray p-8'>Javascipt PHP</p>
                    </div>
                    <div className="w-180 h-fit border border-gray" data-aos="fade-up" data-aos-delay="200">
                        <p className='border-b border-b-gray text-white p-8'>Database</p>
                        <p className='text-gray p-8'>MySql</p>
                    </div>
                    <div className="w-180 h-fit border border-gray" data-aos="fade-up" data-aos-delay="300">
                        <p className='border-b border-b-gray text-white p-8'>Other</p>
                        <p className='text-gray p-8'>HTML CSS SCSS TailwindCSS</p>
                    </div>
                    <div className="w-180 h-fit border border-gray" data-aos="fade-up" data-aos-delay="400">
                        <p className='border-b border-b-gray text-white p-8'>Tools</p>
                        <p className='text-gray p-8'>VSCode Git Font</p>
                    </div>
                    <div className="w-180 h-fit border border-gray" data-aos="fade-up" data-aos-delay="500">
                        <p className='border-b border-b-gray text-white p-8'>Fremworks and Libraris</p>
                        <p className='text-gray p-8'>React.js Impress.js Tilt.js AOS.js Typed.js Laravel</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="w-60 h-100 mb-16">
                    <h1 className='w-260 text-white pr-16'><span className='text-blue'>#</span>soft-skills</h1>
                </div>
                <div className="flex">
                    <div className="w-70 flex flex-wrap gap-16">
                        <p className='w-350 border border-gray p-8 text-white' data-aos="fade-up" data-aos-delay="100"><b>Communication</b> Clear tech talk, non-tech explanations.</p>
                        <p className='w-350 border border-gray p-8 text-white' data-aos="fade-up" data-aos-delay="200"><b>Problem-Solving</b> Decode complexity to smart solutions.</p>
                        <p className='w-350 border border-gray p-8 text-white' data-aos="fade-up" data-aos-delay="300"><b>Teamwork</b> Collaborate, code, achieve greatness together.</p>
                        <p className='w-350 border border-gray p-8 text-white' data-aos="fade-up" data-aos-delay="400"><b>Adaptability</b> Embrace change, learn, stay cutting-edge.</p>
                        <p className='w-350 border border-gray p-8 text-white' data-aos="fade-up" data-aos-delay="500"><b>Creativity</b> Innovate code, craft unique solutions.</p>
                    </div>
                    <div className="w-30 flex justify-center items-center">
                        <img src={softSkillsImg} alt="fan-facts img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;