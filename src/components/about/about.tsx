

export default function About_data() {
  return (
    <div>
      <section className="flex flex-col items-center text-center">
        <h3 className="text-header">about school</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-7">
          <div className="bg-sec w-72 h-60 rounded-2xl"></div>
          <div className="bg-sec w-72 h-60 rounded-2xl"></div>
          <div className="bg-sec w-72 h-60 rounded-2xl"></div>
        </div>
      </section>
    </div>
  );
}
