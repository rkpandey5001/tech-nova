import { FaCheckCircle } from "react-icons/fa";

export default function Company() {

const points=[
"Custom Website Development",
"Enterprise Software Solutions",
"Mobile App Development",
"AI Powered Applications",
"Cloud Deployment",
"24×7 Technical Support"
]

return(

<section className="py-24 bg-white">

<div className="container mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>

<img

src="/images/about/company.webp"

className="rounded-3xl shadow-xl"

/>

</div>

<div>

<span className="text-blue-600 font-semibold">

WHO WE ARE

</span>

<h2 className="text-5xl font-bold mt-5">

Your Trusted Technology Partner

</h2>

<p className="mt-8 text-slate-600 leading-8">

We specialize in designing and developing modern digital products
that help businesses grow faster.

Our experienced developers build scalable,
secure and high-performance software solutions.

</p>

<div className="grid md:grid-cols-2 gap-5 mt-10">

{

points.map((item,index)=>(

<div

key={index}

className="flex items-center gap-3"

>

<FaCheckCircle className="text-blue-600"/>

<span>

{item}

</span>

</div>

))

}

</div>

</div>

</div>

</div>

</section>

)

}