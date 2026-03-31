export default function Stats() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center gap-20 py-12 text-white ">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-2.5">50k+</h2>
          <p>Active Users</p>
        </div>
        <div className="divider divider-horizontal before:bg-white after:bg-white before:w-[0.1px] after:w-[0.1px]"></div>
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-2.5">200+</h2>
          <p>Premium Tools</p>
        </div>
        <div className="divider divider-horizontal before:bg-white after:bg-white before:w-[0.1px] after:w-[0.1px]"></div>
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-2.5">4.9</h2>
          <p>User Rating</p>
        </div>
      </div>
    </div>
  );
}
