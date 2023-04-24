import { ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <Skeleton height="30px" />
      {/* <SkeletonText /> */}
    </ListItem>
  );
};

export default GenreListSkeleton;
