import { FC, useState } from "react";
import useGetHotelReviewsAPI from "../hooks/useGetHotelReviewsAPI";
import { Box, Button, Stack, Tooltip } from "@mui/material";
import Review from "./Review";
import ReviewSkeleton from "@/components/Skeletons/ReviewSkeleton";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { MAX_RETRIES } from "@/constants";
import RequestErrorFallback from "@/components/RequestErrorFallback";
import useRetryHandler from "@/hooks/useRetryHandler";

interface HotelReviewsProps {
  hotelId: string;
}

const REVIEWS_PER_PAGE = 3;

const HotelReviews: FC<HotelReviewsProps> = ({ hotelId }) => {
  const { hotelReviews, isLoading, isError, refetch } =
    useGetHotelReviewsAPI(hotelId);
  const [currentPage, setCurrentPage] = useState(1);
  const { retryCount, handleRetry } = useRetryHandler(refetch);

  if (isLoading) return <ReviewSkeleton />;

  if (isError) {
    return (
      <RequestErrorFallback
        onRetry={handleRetry}
        retryCount={retryCount}
        maxRetries={MAX_RETRIES}
      />
    );
  }

  const totalPages = Math.ceil(hotelReviews.length / REVIEWS_PER_PAGE);
  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
  const currentReviews = hotelReviews.slice(
    startIndex,
    startIndex + REVIEWS_PER_PAGE
  );

  const renderReviews = currentReviews.map((review) => (
    <Review review={review} key={review.reviewId + "-" + review.customerName} />
  ));

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <Stack bgcolor="white" p={3} gap={3} borderRadius={3} my={2}>
      {renderReviews}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <Tooltip title="previous" arrow>
            <Box component="span" display="inline-block">
              <Button onClick={handlePrev} disabled={currentPage === 1}>
                <ArrowBigLeft />
              </Button>
            </Box>
          </Tooltip>

          <Tooltip title="next" arrow>
            <Box component="span" display="inline-block">
              <Button
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                <ArrowBigRight />
              </Button>
            </Box>
          </Tooltip>
        </Box>
      )}
    </Stack>
  );
};

export default HotelReviews;
