import React from 'react'

function contact() {
    const media = [
        {name: 'Telegram', url: 't.me/ful_stack_dev'},
        {name: 'Instagram', url: 'instagram.com/amirasadulloh'},
        {name: 'Linkedin', url: 'linkedin.com/in/asadbek-ahadov-83a8752a8/'},
    ]
    return (
        <div className='px-150'>
            <div className="w-100 h-fit mt-100" id="contact">
                <div className="w-50 h-100 flex items-center mb-16">
                    <h1 className='text-white pr-16'><span className='text-blue'>/</span>contact</h1>
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
            <div className='mt-60'>
                <div className="w-60 h-100 mb-16">
                    <h1 className='w-260 text-white pr-16'><span className='text-blue'>#</span>all-media</h1>
                </div>
                <div className='w-100 flex gap-16'>
                    {media.map((item) => (
                        <div className='w-fit h-fit'>
                            <a href={item.url} className='text-gray'>{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default contact;