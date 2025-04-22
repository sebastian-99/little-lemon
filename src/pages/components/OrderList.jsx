import { useState, Fragment, useEffect } from "react";
import ButtonOrder from "./ButtonOrder";
import OrderDescription from "./OrderDescription";
import { RECIPE_TYPES, RECIPES } from "../../data/recipesData";
const OrderList = () => {
  const [recipes, setRecipes] = useState(RECIPES);
  const [filterType, setFilterType] = useState([]);
  useEffect(() => {
    if (filterType.length != 0) {
      const filterRecipes = RECIPES.filter((type) =>
        filterType.includes(type.type)
      );
      setRecipes(filterRecipes);
    }
    if (filterType.length == 0) {
      setRecipes(RECIPES);
    }
  }, [filterType]);
  return (
    <>
      <div className="overflow-x-auto text-nowrap pb-4 pb-xs-4 pb-sm-4 pb-md-3 pb-lg-3 pb-xl-3">
        <div className="mt-3">
          {RECIPE_TYPES.map((recipe, index) => {
            return (
              <Fragment key={index}>
                <ButtonOrder data={recipe} setFilterType={setFilterType} />
              </Fragment>
            );
          })}
        </div>
      </div>
      <hr />
      {recipes.map((recipe, index) => {
        return (
          <Fragment key={index}>
            <OrderDescription data={recipe} />
          </Fragment>
        );
      })}
    </>
  );
};

export default OrderList;
