import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function PortfolioCard({ project }) {

return(

<div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 group">

<img

src={project.image}

className="h-64 w-full object-cover group-hover:scale-110 duration-500"

/>

<div className="p-6">

<span className="text-blue-600 font-semibold">

{project.category}

</span>

<h3 className="text-2xl font-bold mt-3">

{project.title}

</h3>

<p className="text-gray-500 mt-2">

{project.client}

</p>

<div className="flex mt-4">

{

[...Array(project.rating)].map((_,i)=>(

<FaStar

key={i}

className="text-yellow-400"

/>

))

}

</div>

<div className="flex flex-wrap gap-2 mt-5">

{

project.technology.map((tech,index)=>(

<span

key={index}

className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"

>

{tech}

</span>

))

}

</div>

<Link to={`/portfolio/${project.id}`}>

<button

className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"

>

View Details

</button>

</Link>

</div>

</div>

)

}