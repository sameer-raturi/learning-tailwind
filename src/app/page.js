import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-white bg-green-600 border-4 border-blue-200">
        Hello world!
      </h1>
      <h1 className="text-white bg-sameer">Hello world!</h1>

      <h1 className="text-white bg-sameer underline decoration-slate-100">
        Hello world!
      </h1>
      <div className="flex items-baseline">
        <div className="pt-2 pb-6 bg-sky-500"></div>
        <div className="pt-8 pb-12 bg-red-500">02</div>
        <div className="pt-12 pb-4 bg-green-500">04</div>
      </div>

      <div className="grid md:grid-col-2 gap-4 lg:grid-cols-3">
        <div className="p-6 rounded-lg bg-sky-500">1</div>
        <div className="p-6 rounded-lg bg-sky-500">2</div>
        <div className="p-6 col-span-2 rounded-lg bg-red-500">3</div>
        <div className="p-6 rounded-lg bg-sky-500">4</div>
        <div className="p-6 rounded-lg bg-sky-500">5</div>
        <div className="p-6 rounded-lg bg-sky-500">6</div>
      </div> */}
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p>this is a paragraph</p>
      <a>this is an anchor tag</a>
      <div>
        <button>this is a button</button>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">Checkbox</label>
      </div>
      <div>
        <select>
          <option>option 1</option>
          <option>option 2</option>
        </select>
      </div>
    </div>
  );
}
