import React from 'react'

const SinglePage = () => {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Latest blog posts</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">Stay informed with our latest articles and expert opinions.</p>
    </div>
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-3">
      <article className="flex flex-col items-start justify-between">
        <a href="#" className="inline-block rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200">Productivity</a>
        <div className="mt-5 flex items-center gap-x-2 text-sm text-gray-500">
          <time datetime="2024-08-17">August 17, 2024</time>
          <span aria-hidden="true">•</span>
          <p>7 mins read</p>
        </div>
        <div className="group relative mt-3">
          <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Maximizing Efficiency with Automation: A Beginner's Guide
            </a>
          </h3>
          <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">Learn how automation can transform your business operations, streamline workflows, and save valuable time in this comprehensive beginner's guide.</p>
        </div>
        <div className="relative mt-8 flex justify-start gap-x-2">
          <div className="flex-none">
            <span className="relative rounded-full">
              <span aria-hidden="true" className="absolute inset-0 h-10 w-10 rounded-full ring-1 ring-inset ring-gray-900/10"></span>
              <img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </span>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Jane Doe
              </a>
            </p>
            <p className="text-gray-600">Senior Product Manager</p>
          </div>
        </div>
      </article>
      <article className="flex flex-col items-start justify-between">
        <a href="#" className="inline-block rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200">Industry Insights</a>
        <div className="mt-5 flex items-center gap-x-2 text-sm text-gray-500">
          <time datetime="2024-08-10">August 10, 2024</time>
          <span aria-hidden="true">•</span>
          <p>6 mins read</p>
        </div>
        <div className="group relative mt-3">
          <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              The Future of SaaS: Trends to Watch in 2024
            </a>
          </h3>
          <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">Explore the emerging trends in the SaaS industry that are set to shape the future, from AI integration to personalized user experiences.</p>
        </div>
        <div className="relative mt-8 flex justify-start gap-x-2">
          <div className="flex-none">
            <span className="relative rounded-full">
              <span aria-hidden="true" className="absolute inset-0 h-10 w-10 rounded-full ring-1 ring-inset ring-gray-900/10"></span>
              <img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </span>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                John Smith
              </a>
            </p>
            <p className="text-gray-600">Head of Strategy</p>
          </div>
        </div>
      </article>
      <article className="flex flex-col items-start justify-between">
        <a href="#" className="inline-block rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200">Technology</a>
        <div className="mt-5 flex items-center gap-x-2 text-sm text-gray-500">
          <time datetime="2024-08-03">August 3, 2024</time>
          <span aria-hidden="true">•</span>
          <p>8 mins read</p>
        </div>
        <div className="group relative mt-3">
          <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              Building a Scalable Architecture: Key Considerations
            </a>
          </h3>
          <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">Discover the critical elements of building a scalable software architecture that can grow with your business needs and handle increased demand effortlessly.</p>
        </div>
        <div className="relative mt-8 flex justify-start gap-x-2">
          <div className="flex-none">
            <span className="relative rounded-full">
              <span aria-hidden="true" className="absolute inset-0 h-10 w-10 rounded-full ring-1 ring-inset ring-gray-900/10"></span>
              <img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </span>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Emily Brown
              </a>
            </p>
            <p className="text-gray-600">Chief Technology Officer (CTO)</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
    </div>
  
  )
}

export default SinglePage
