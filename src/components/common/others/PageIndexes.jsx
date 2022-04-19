import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

// components
import Button from "../buttons/Button";

const StyledIndexes = styled.div`
  ${tw`flex items-center mx-auto justify-center gap-4`}

  .indexes {
    ${tw`flex gap-1 items-center`}

    p {
      ${tw`mx-3`}
    }
  }
`;

const PageIndexes = ({
  totalNumOfPosts,
  totalNumOfPostsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalNumOfPages = Math.ceil(totalNumOfPosts / totalNumOfPostsPerPage);

  const indexes = [];
  indexes.push(
    <Button
      primary={currentPage === 1}
      size="sm"
      style={{
        background: currentPage !== 1 && "transparent",
        border: currentPage !== 1 && "none",
        color: currentPage !== 1 && "black",
      }}
      onClick={() => setCurrentPage(1)}
      key={1}
    >
      1
    </Button>
  );

  if (currentPage >= 2 && currentPage <= 3) {
    for (var i = 2; i <= currentPage + 1; i++) {
      indexes.push(
        <Button
          primary={currentPage === i}
          size="sm"
          style={{
            background: currentPage !== i && "transparent",
            border: currentPage !== i && "none",
            color: currentPage !== i && "black",
          }}
          onClick={() => setCurrentPage(i)}
          key={i}
        >
          {i}
        </Button>
      );
    }
    indexes.push(<p>...</p>);
  } else if (currentPage >= 4 && currentPage <= totalNumOfPages - 3) {
    indexes.push(<p>...</p>);
    for (var i = currentPage - 1; i <= currentPage + 1; i++) {
      indexes.push(
        <Button
          primary={currentPage === i}
          size="sm"
          style={{
            background: currentPage !== i && "transparent",
            border: currentPage !== i && "none",
            color: currentPage !== i && "black",
          }}
          onClick={() => setCurrentPage(i)}
          key={i}
        >
          {i}
        </Button>
      );
    }
    indexes.push(<p>...</p>);
  } else if (
    currentPage >= totalNumOfPages - 2 &&
    totalNumOfPages > currentPage
  ) {
    indexes.push(<p>...</p>);
    for (var i = currentPage - 1; i < totalNumOfPages; i++) {
      indexes.push(
        <Button
          primary={currentPage === i}
          size="sm"
          style={{
            background: currentPage !== i && "transparent",
            border: currentPage !== i && "none",
            color: currentPage !== i && "black",
          }}
          onClick={() => setCurrentPage(i)}
          key={i}
        >
          {i}
        </Button>
      );
    }
  }

  if (currentPage !== totalNumOfPages) {
    indexes.push(
      <Button
        primary={currentPage === totalNumOfPages}
        size="sm"
        style={{
          background: currentPage !== totalNumOfPages && "transparent",
          border: currentPage !== totalNumOfPages && "none",
          color: currentPage !== totalNumOfPages && "black",
        }}
        onClick={() => setCurrentPage(totalNumOfPages)}
        key={totalNumOfPages}
      >
        {totalNumOfPages}
      </Button>
    );
  }

  return (
    <StyledIndexes>
      <Button
        secondary
        disabled={currentPage === 1}
        size="sm"
        style={{ width: 100 }}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Back
      </Button>
      <div className="indexes">{indexes}</div>
      <Button
        primary
        disabled={currentPage === totalNumOfPages}
        size="sm"
        style={{ width: 100 }}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </Button>
    </StyledIndexes>
  );
};

export default PageIndexes;
