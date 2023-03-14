import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
let renderCount = 0;

export default function OrderHukForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      touchedFields,
      isDirty,
      isValid,
      dirtyFields,
      isSubmitted,
      errors,
    },
    watch,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    setData(data);
    console.log(data);
    reset();
  };

  const [data, setData] = useState(null);
  const WantService = watch("serviceFlag");
  renderCount += 1;

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full my-4">
            <Image
              alt="jsoo"
              src="/assets/jisokeyb.jpg"
              width={"4000"}
              height={"3000"}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Get Your Own Keyboard NOW!
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>
          </div>
        </div>

        <div className="bg-gray-100"></div>
      </div>

      <div
        id="forms"
        className="w-full h-full flex justify-center items-center bg-[url('/assets/KeybDc2.jpg')] bg-cover bg-center bg-no-repeat p-8"
      >
        <div className="w-1/2 shadow-lg rounded-md bg-white/60 p-8 flex flex-col justify-start">
          <h2 className="text-center font-semibold text-2xl mb-4 uppercase">
            Get Your Own Keyboard NOW!
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-1 flex-col justify-evenly"
          >
            <input
              className="border-2 outline-none p-2 my-2 bg-white shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              placeholder="Name"
              {...register("name", {
                required: { value: true, message: "Name is required" },
                minLength: {
                  value: 4,
                  message: "Name must be at least 4 characters long",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message as ReactNode}</p>
            )}

            <input
              type="email"
              className="border-2 outline-none p-2 my-2 bg-white shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
            />
            {errors.email && (
              <p className="text-red-500">
                {errors.email.message as ReactNode}
              </p>
            )}

            <input
              type="number"
              className="border-2 outline-none p-2 my-2 bg-white shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: { value: true, message: "Phone Number is required" },
                minLength: { value: 10, message: "Too Short!" },
                maxLength: { value: 14, message: "Too Long!" },
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-500">
                {errors.phoneNumber.message as ReactNode}
              </p>
            )}

            <div className="my-4">
              <input type="checkbox" {...register("serviceFlag")} />
              <span className="mx-4 font-semibold">
                Service your keyboard instead ?
              </span>
            </div>

            {WantService ? (
              <div className="flex flex-1 flex-col w-full ">
                <input
                  className="border-2 outline-none p-2 rounded-md my-2"
                  placeholder="Problem"
                  {...register("Problems", { required: "Subject is required" })}
                />
                <textarea
                  className="border-2 outline-none p-2 rounded-md my-2"
                  placeholder="Details"
                  {...register("Details", { required: "Message is required" })}
                />
              </div>
            ) : (
              //disini bagian beli kibot'
              <div className="flex flex-1 flex-col">
                <div className="my-4">
                  <label htmlFor="Size">
                    <p className="w-1/3">Size</p>
                    <select
                      {...register("KeyboardSize")}
                      className="w-full px-4 py-2 rounded-lg"
                    >
                      <option value="Fullsize">Fullsize</option>
                      <option value="Tenkeyless">TKL-Tenkeyless</option>
                      <option value="84 Key">84 Keys</option>
                      <option value="65%">65%</option>
                      <option value="60%">60%</option>
                    </select>
                  </label>
                  <label htmlFor="MountStyle">
                    <p className="w-1/3">Shape</p>
                    <select
                      {...register("Shape")}
                      className="w-full px-4 py-2 rounded-lg"
                    >
                      <option value="Normal">Normal</option>
                      <option value="Ergonomic">Ergonomic</option>
                      <option value="Splitted">Splitted</option>
                    </select>
                  </label>
                </div>

                <label htmlFor="Mounting" className="w-full">
                  <p>Mounting Style</p>
                  <select
                    {...register("Mounting")}
                    className="w-full px-4 py-2 rounded-lg shadow"
                  >
                    <option value="Normal">Normal</option>
                    <option value="Gasket Mounted">Gasket Mounted</option>
                    <option value="Sandwich Mount">Sandwich Mount</option>
                  </select>
                </label>
                <textarea
                  className="border-2 outline-none p-2 my-2 bg-white shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent "
                  placeholder="Details (tell us the colorway you wanted and how do you want the switches feels)"
                  {...register("Details", { required: "Message is required" })}
                />
              </div>
            )}

            <button
              className=" flex justify-center p-2 rounded-md
    w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
              type="submit"
            >
              <span>Submit</span>
            </button>
          </form>

          {/* <div className="w-1/2">
          Render Count -- {renderCount}
          <p className="w-1/2">
            {" "}
            <strong> Data: </strong> {JSON.stringify(data)}{" "}
          </p>
          <p>
            {" "}
            <strong> Is Valid: </strong> {JSON.stringify(isValid)}
          </p>
          <p>
            {" "}
            <strong> Is Dirty : </strong> {JSON.stringify(isDirty)}{" "}
          </p>
          <p>
            {" "}
            <strong> Is Submited: </strong> {JSON.stringify(isSubmitted)}
          </p>
          <p>
            {" "}
            <strong> Errors: </strong> {JSON.stringify(errors?.email?.message)}
          </p>
          <p>
            {" "}
            <strong> Dirty Fields : </strong> {JSON.stringify(dirtyFields)}{" "}
          </p>
          <p>
            {" "}
            <strong> Touched Fields: </strong> {JSON.stringify(touchedFields)}{" "}
          </p>
          <p>
            {" "}
            <strong> Watching Service: </strong> {JSON.stringify(WantService)}
          </p>
        </div> */}
        </div>
      </div>
    </section>
  );
}
