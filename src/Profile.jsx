import { useContext } from "react";
import { dashboardContext } from "./Dashboard";
import { appStore } from "./store";

export const Profile = () => {
  const { formData, setFormData } = useContext(dashboardContext);

  const { count, increaseCount } = appStore();

  console.log(count)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <input type="number" name="mobile" onChange={(e) => handleChange(e)} />
      count {count}
      <button onClick={() => increaseCount()}>Increase</button>
    </div>
  );
};
