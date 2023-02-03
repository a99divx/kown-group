export default function Loader() {
  return (
    <>
      <div
        className="w-full h-full fixed top-0 left-0 text-kown-p flex align-middle"
        style={{ backgroundColor: "white" }}
      >
        <div className="text-md inline-block m-auto" style={{ height: 30 }}>
          Loading...
        </div>
      </div>
    </>
  );
}
