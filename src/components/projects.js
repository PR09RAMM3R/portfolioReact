import React from 'react';
import projectImg from '../imgs/projectImg.jpeg';
import ProjectsData from '../jsons/projects.json';
import smallProjectsData from '../jsons/smallProjects.json';

function projects() {
    return (
        <div className='px-150'>
            <div className="mt-60">
                <h1 className='text-white pr-16'><span className='text-blue'>/</span>projects</h1>
                <p className='text-gray'>List of my projects</p>
            </div>
            <div className="mt-70">
                <div className="w-60 h-100 flex items-center justify-between">
                    <h1 className='text-white pr-16'><span className='text-blue'>#</span>complete-sites</h1>
                </div>
                <div className="flex justify-center flex-wrap gap-16 mt-50">
                    {ProjectsData.map((projectsDetail) => {
                        return <div className="w-340 h-fit border border-gray">
                            <div className="h-fit w-100">
                                <img src={projectsDetail.img} alt="Project Img" loading="lazy" className='w-100' />
                            </div>
                            <div className="w-100 p-8 h-fit text-gray border-t border-t-gray-1 border-b border-b-gray-1 ">
                                <p>{projectsDetail.technologies}</p>
                            </div>
                            <div className="w-100 h-fit p-16">
                                <h2 className='text-white mb-16'>{projectsDetail.title}</h2>
                                <p className='text-gray mb-16'>{projectsDetail.content}</p>
                                <div className="w-100 flex gap-16">
                                    <a href="{projectsDetail.live.url}" className={projectsDetail.live.display + ' border text-white border-blue py-8 px-16 duration-1 hover:bg-hoverBackground'}>Live &lt;~&gt;</a>
                                    <a href="{projectsDetail.github.url}" className={projectsDetail.github.display + ' border text-white border-gray py-8 px-16 duration-1 hover:bg-hoverBackgroundS'}>Github &gt;=</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div className="mt-80 mb-150">
                <div className="w-60 h-100 flex items-center justify-between">
                    <h1 className='text-white pr-16'><span className='text-blue'>#</span>small-projects</h1>
                </div>
                <div className="flex justify-center flex-wrap gap-16 mt-50">
                    {smallProjectsData.map((smallProjectsDetail, index) => {
                        return <div className="w-340 h-fit border border-gray">
                            <div className="w-100 p-8 h-fit text-gray border-t border-t-gray-1 border-b border-b-gray-1 ">
                                <p>{smallProjectsDetail.technologies}</p>
                            </div>
                            <div className="w-100 h-fit p-16">
                                <h2 className='text-white mb-16'>{smallProjectsDetail.title}</h2>
                                <p className='text-gray mb-16'>{smallProjectsDetail.content}</p>
                                <div className="w-100 flex gap-16">
                                    <a href="{smallProjectsDetail.live.url}" className={smallProjectsDetail.live.display + ' border text-white border-blue py-8 px-16 duration-1 hover:bg-hoverBackground'}>Live &lt;~&gt;</a>
                                    <a href="{smallProjectsDetail.github.url}" className={smallProjectsDetail.github.display + ' border text-white border-gray py-8 px-16 duration-1 hover:bg-hoverBackgroundS'}>Github &gt;=</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default projects;