import { FaStar } from "react-icons/fa";

const Rating = ({ totalRate }: any) => {
  const maxStars = 5;

  const getStarColor = (rating: number) => {
    if (rating === 5) return "text-green-600";
    if (rating === 4) return "text-green-500";
    if (rating === 3) return "text-yellow-500";
    if (rating === 2) return "text-orange-500";
    if (rating === 1) return "text-red-500";
    return "text-gray-300";
  };

  return (
    <div>
      <div className="flex items-center gap-1 text-[1.1rem]">
        {totalRate > 0 && (
          <>
            <div>{totalRate}</div>
            <div className="flex items-center">
              {[...Array(maxStars)].map((_, index) => {
                const starRating = index + 1;
                return (
                  <FaStar
                    key={index}
                    className={`text-[1.2rem] ${
                      totalRate >= starRating ? getStarColor(totalRate) : "text-gray-300"
                    } text-[1.2rem] `}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Rating;
