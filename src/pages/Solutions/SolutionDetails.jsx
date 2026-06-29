import { useParams } from "react-router-dom";
import solutionTabs from "../../data/solutionTabs";
import { FaCheckCircle } from "react-icons/fa";

export default function SolutionDetails() {

const { slug } = useParams();

const solution = solutionTabs.find(
(item)=>item.slug===slug
);

if(!solution){

return(

<div className="py-40 text-center">

<h2 className="text-4xl font-bold">

Solution Not Found

</h2>

</div>

)

}

return(

<div>

{/* Hero */}

<section className="bg-gradient-to-r from-blue-700 to-cyan-500 py-28">

<div className="container mx-auto px-5">

<div className="grid lg:grid-cols-2 gap-12 items-center">

<div>

<h1 className="text-5xl font-bold text-white">

{solution.title}

</h1>

<p className="mt-6 text-blue-100 text-lg leading-8">

{solution.description}

</p>

<button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700">

Get Free Consultation

</button>

</div>

<div>

<img
src={solution.image}
alt={solution.title}
className="rounded-3xl shadow-2xl"
/>

</div>

</div>

</div>

</section>

{/* Features */}

<section className="py-24">

<div className="container mx-auto px-5">

<h2 className="text-4xl font-bold text-center">

Features

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

{solution.points.map((item,index)=>(

<div
key={index}
className="rounded-2xl border p-8 hover:shadow-xl duration-300"
>

<FaCheckCircle className="text-blue-600 text-3xl"/>

<h3 className="mt-5 text-xl font-bold">

{item}

</h3>

<p className="mt-3 text-gray-500">

Powerful feature for your business.

</p>

</div>

))}

</div>

</div>

</section>

{/* Benefits */}

<section className="bg-slate-50 py-24">

<div className="container mx-auto px-5">

<div className="grid lg:grid-cols-2 gap-16">

<div>

<img
src={solution.image}
className="rounded-3xl"
/>

</div>

<div>

<h2 className="text-4xl font-bold">

Why Choose {solution.title} ?

</h2>

<p className="mt-6 text-gray-500 leading-8">

Our software helps automate business operations,
reduce manual work and improve productivity.

</p>

<div className="space-y-5 mt-10">

<div className="flex gap-3">

<FaCheckCircle className="text-green-600 mt-1"/>

Secure & Scalable Architecture

</div>

<div className="flex gap-3">

<FaCheckCircle className="text-green-600 mt-1"/>

Cloud Ready

</div>

<div className="flex gap-3">

<FaCheckCircle className="text-green-600 mt-1"/>

Easy To Use Dashboard

</div>

<div className="flex gap-3">

<FaCheckCircle className="text-green-600 mt-1"/>

24×7 Support

</div>

</div>

</div>

</div>

</div>

</section>

{/* CTA */}

<section className="py-24">

<div className="container mx-auto">

<div className="rounded-[35px] bg-gradient-to-r from-blue-700 to-cyan-500 p-16 text-center">

<h2 className="text-5xl font-bold text-white">

Ready To Build Your Project?

</h2>

<p className="mt-5 text-blue-100">

Let's discuss your requirements today.

</p>

<button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700">

Contact Us

</button>

</div>

</div>

</section>

</div>

)

}