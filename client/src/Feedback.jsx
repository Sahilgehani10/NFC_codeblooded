import StarRating from "./Starrating";

export default function Feedback() {
  return (
    <div className="pt-[50px] flex flex-col items-center">
      <h1 className="text-4xl p-5">Feedback</h1>
      <h4 className="text-xl p-5">
        How was your experience? Let us know by rating us
      </h4>
      <StarRating color="gold" className="p-5" size={50} />
    </div>
  );
}
