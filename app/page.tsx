import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p4 rounded-sm lg:col-span-2 p-2">Test</div>
      <div className="bg-primary-foreground p4 rounded-sm p-2">Test</div>
      <div className="bg-primary-foreground p4 rounded-sm p-2">Test</div>
      <div className="bg-primary-foreground p4 rounded-sm p-2">Test</div>
      <div className="bg-primary-foreground p4 rounded-sm p-2 lg:col-span-2">Test</div>
      <div className="bg-primary-foreground p4 rounded-sm p-2">Test</div>

    </div>
  );
}
