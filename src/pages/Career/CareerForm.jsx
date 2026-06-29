import { FaUpload } from "react-icons/fa";

export default function CareerForm() {
  return (
    <section id="apply" className="bg-white py-24">

      <div className="container mx-auto max-w-5xl px-5">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
            APPLY NOW
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Submit Your Application
          </h2>

          <p className="mt-5 text-slate-500">
            Fill in your details and upload your latest resume.
          </p>

        </div>

        <form className="mt-16 rounded-3xl bg-slate-50 p-8 shadow-lg">

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border p-4 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl border p-4 outline-none focus:border-blue-600"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="rounded-xl border p-4 outline-none focus:border-blue-600"
            />

            <select className="rounded-xl border p-4 outline-none focus:border-blue-600">
              <option>Select Position</option>
              <option>React.js Developer</option>
              <option>Node.js Developer</option>
              <option>Flutter Developer</option>
              <option>Laravel Developer</option>
              <option>UI/UX Designer</option>
              <option>Digital Marketing Executive</option>
            </select>

            <input
              type="text"
              placeholder="Experience (e.g. 2 Years)"
              className="rounded-xl border p-4 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Current CTC"
              className="rounded-xl border p-4 outline-none focus:border-blue-600"
            />

          </div>

          <textarea
            rows="5"
            placeholder="Cover Letter"
            className="mt-6 w-full rounded-xl border p-4 outline-none focus:border-blue-600"
          ></textarea>

          <div className="mt-6 rounded-xl border-2 border-dashed border-blue-300 bg-white p-8 text-center">

            <FaUpload className="mx-auto text-4xl text-blue-600" />

            <p className="mt-4 text-slate-600">
              Upload Resume (PDF, DOC, DOCX)
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="mt-4"
            />

          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Submit Application
          </button>

        </form>

      </div>

    </section>
  );
}