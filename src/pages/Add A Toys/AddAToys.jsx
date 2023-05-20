import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";


const AddAToys = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const onSubmit = (data) => {

        fetch("http://localhost:5000/toys", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });
        // console.log(data);
      };
    console.log(watch("example"));
    // console.log(user);
    return (
        <div className="container mx-auto">
            <h1 className="text-7xl font-BebasNeue font-semibold text-sky-400 text-center py-16">Add A Toy</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4 py-20">
                {errors.exampleRequired && <span>This field is required</span>}
                <input
                    className="p-2 w-full rounded-sm text-lg text-white placeholder:text-white placeholder:text-base focus:outline-none "
                    {...register("pictureURL", { required: true })}
                    placeholder="Toy Picture URL"
                    type="url"
                />  

                <input
                className="p-2 w-full rounded-sm text-lg text-white placeholder:text-white placeholder:text-base focus:outline-none "
                    {...register("Toy Name", { required: true })}
                    placeholder="Toy Name"
                // defaultValue="30k"
                />
                <input
                className="p-2 w-full rounded-sm text-lg text-white placeholder:text-white placeholder:text-base focus:outline-none "
                    value={user?.email}
                    {...register("email", { required: true })}
                    placeholder="your email"
                    type="email"
                />
                <input
                    className="p-2 w-full rounded-sm text-lg text-white placeholder:text-white placeholder:text-base focus:outline-none "
                    value={user?.displayName}
                    {...register("postedBy", { required: true })}
                    placeholder="Your name"
                    type="text"
                />
                <input
                    className="p-2 w-full rounded-sm text-lg text-white placeholder:text-white placeholder:text-base focus:outline-none "
                    {...register("Sub-category", { required: true })}
                    placeholder="Sub-category"
                    type="text"
                />
                <input
                    className="p-2 w-full rounded-sm text-lg text-white placeholder:text-white placeholder:text-base focus:outline-none "
                    {...register("price", { required: true })}
                    placeholder="Price"
                    type="number"
                />
                <input
                    className="p-2 w-full rounded-sm text-lg text-white placeholder:text-white placeholder:text-base focus:outline-none "
                    {...register("rating", { required: true })}
                    placeholder="Rating"
                    type="number"
                    step="any"
                />
                <input
                    className="p-2 w-full rounded-sm text-lg text-white placeholder:text-white placeholder:text-base focus:outline-none "
                    {...register("availableQuantity", { required: true })}
                    placeholder="Available quantity"
                    type="number"
                />


                <input
                    className="p-2 w-full rounded-sm text-lg text-white placeholder:text-white placeholder:text-base focus:outline-none "
                    {...register("description", { required: true })}
                    placeholder="description"
                    type="text"
                />



                {/* <input type="submit" /> */}

                <input className="btn btn-outline col-span-3 btn-primary text-3xl font-BebasNeue px-10 btn-block" value="Add a toy" type="submit" />
            </form>
        </div>
    );
};

export default AddAToys;