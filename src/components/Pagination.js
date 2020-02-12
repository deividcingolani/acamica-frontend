import Pagination from "react-bootstrap/Pagination";

export const PaginationTable = ({
  lengthArray,
  sizePage,
  setpageActual,
  pageActual
}) => {
  /* Numbers of Page */
  let numberPages = lengthArray / sizePage;
  numberPages = Number.isInteger(numberPages)
    ? numberPages
    : Math.trunc(numberPages) + 1;

  let items = [];

  for (let number = 1; number <= numberPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={() => setpageActual(number)}
        active={number === pageActual}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination>
      <Pagination.First onClick={() => setpageActual(1)} />
      <Pagination.Prev
        onClick={() =>
          pageActual > 1
            ? setpageActual(pageActual - 1)
            : setpageActual(pageActual)
        }
      />
      {items}
      <Pagination.Next
        onClick={() => {
          pageActual < numberPages
            ? setpageActual(pageActual + 1)
            : setpageActual(pageActual);
        }}
      />
      <Pagination.Last onClick={() => setpageActual(numberPages)} />
    </Pagination>
  );
};
