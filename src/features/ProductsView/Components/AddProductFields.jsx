import React from "react";

function AddProductFields({ addNewProduct, setAddNewProduct }) {
  const fields = [
    { label: "عنوان محصول", key: "title", type: "text" },
    { label: "وضعیت انتشار", key: "isPublished", type: "select" },
    { label: "تعداد موجودی", key: "entity", type: "number" },
    { label: "قیمت محصول", key: "price", type: "number" },
    { label: "توضیحات محصول", key: "description", type: "textarea" },
  ];

  let handleInputChange = (key, value) => {


    setAddNewProduct((prevProduct) => ({
      ...prevProduct,
      [key]: key === "price" ? Number(value) : value,
    }));
  };

  return (
    <div className=" flex flex-col justify-center gap-5 my-2">
      {fields.map((field, index) => {
        return (
          <div className=" flex flex-col justify-center gap-3 ">
            <label className="text-[var(--text-muted)] text-sm">
              {field.label} :
            </label>

            {field.type === "select" ? (
              <select
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                value={addNewProduct[field.key]}
                className="w-full h-[43px] bg-[var(--bg-input)]  border-[1px] border-[var(--border-light)] rounded-md p-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]"
              >
                <option value="true">منتشر شده</option>
                <option value="false">منتشر نشده</option>
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                value={addNewProduct[field.key]}
                className="w-full h-30 bg-[var(--bg-input)] border-[1px] border-[var(--border-light)] rounded-md p-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]"
              />
            ) : (
              <input
                value={addNewProduct[field.key]}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                type={field.type}
                className="w-full h-[43px] bg-[var(--bg-input)] border-[1px] border-[var(--border-light)] rounded-md p-2 text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AddProductFields;
