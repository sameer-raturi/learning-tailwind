import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className="text-white bg-green-600 border-4 border-blue-200">Hello world!</h1>
      <h1 className="text-white bg-sameer">Hello world!</h1>

      <h1 className="text-white bg-sameer underline decoration-slate-100">Hello world!</h1>
    </div>
  );
}
