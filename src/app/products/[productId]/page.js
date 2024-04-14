const DynamicPage = ({ params, searchParams }) => {
  return (
    <div>
      <h1>
        Dynamic Product Page -{" "}
        <span className="text-blue-500">({params.productId})</span>
      </h1>
      <p>
        Category: <span className="text-red-500">{searchParams.category}</span>
      </p>
    </div>
  );
};

export default DynamicPage;
