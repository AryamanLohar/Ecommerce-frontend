import React from "react";

const CategoryForm = ({ handleonSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleonSubmit}>
        <div className="mb-3">
          <input
            id="newCategory"
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
